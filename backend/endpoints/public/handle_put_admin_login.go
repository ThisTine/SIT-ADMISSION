package public

import (
	"time"

	"github.com/gofiber/fiber/v2"

	"backend/modules/mysql"
	"backend/types/common"
	"backend/types/model"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/crypto"
	"backend/utils/text"
	"backend/utils/value"
)

func PutAdminLoginHandler(c *fiber.Ctx) error {
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
	if err := mysql.DB.Model(admin).Where("email = ?", body.Email).First(&admin).Error; err != nil {
		return response.Error(false, "Unable to query admin record", err)
	}

	// TODO: Implement LDAP login

	// * Sign JWT
	claims := &common.AdminClaims{
		Id:  admin.AdminId,
		Exp: value.Ptr(time.Now().Add(7 * 24 * time.Hour)),
	}
	token, err := crypto.SignJwt(claims)
	if err != nil {
		return response.Error(true, "Unable to sign JWT", err)
	}

	return c.JSON(response.Info(map[string]any{
		"token": token,
	}))
}
