package public

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"gopkg.in/ldap.v2"

	adminFunc "backend/functions/admin"
	"backend/modules/config"
	ldapLoader "backend/modules/ldap"

	"backend/modules/mysql"
	"backend/types/common"
	"backend/types/model"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/crypto"
	"backend/utils/text"
	"backend/utils/value"
)

func AdminLoginPutHandler(c *fiber.Ctx) error {
	// * Parse body
	body := new(payload.AdminLogin)
	if err := c.BodyParser(body); err != nil {
		return response.Error(false, "Unable to parse body", err)
	}

	// * Validate body
	if err := text.Validator.Struct(body); err != nil {
		return err
	}

	// * Query admin record
	var admin *model.Admin
	if err := mysql.DB.Model(admin).Where("uid = ?", body.Uid).First(&admin).Error; err != nil {
		return response.Error(false, "Admin record whitelist not exist", err)
	}

	// * LDAP authentication
	searchRequest := ldap.NewSearchRequest(
		config.C.LdapBaseDn,
		ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
		fmt.Sprintf("(uid=%s)", *body.Uid),
		[]string{"dn", "uid", "cn", "mail"},
		nil,
	)

	result, err := ldapLoader.L.Search(searchRequest)
	if err != nil {
		return response.Error(false, "Unable to search LDAP record", err)
	}
	if len(result.Entries) == 0 {
		return response.Error(false, "LDAP record not exist", err)
	}

	dn := result.Entries[0].DN
	if err := ldapLoader.L.Bind(dn, *body.Password); err != nil {
		return response.Error(false, "LDAP authentication failure", err)
	}

	// * Construct name from LDAP record
	name := result.Entries[0].GetAttributeValue("cn")
	email := result.Entries[0].GetAttributeValue("mail")
	username := adminFunc.GetUsername(name)

	// * Update admin name if not match
	if name != value.Val(admin.Name) || email != value.Val(admin.Email) {
		admin.Name = &name
		admin.Email = &email
		if tx := mysql.DB.Model(admin).Updates(admin); tx.Error != nil {
			return response.Error(false, "Unable to update admin name", tx.Error)
		}
	}

	// * Sign JWT
	claims := &common.AdminClaims{
		Id:       admin.AdminId,
		Username: &username,
		Exp:      value.Ptr(time.Now().Add(7 * 24 * time.Hour)),
	}
	token, errr := crypto.SignJwt(claims)
	if errr != nil {
		return response.Error(true, "Unable to sign JWT", err)
	}

	return c.JSON(response.Info(map[string]any{
		"token":    token,
		"username": username,
	}))
}
