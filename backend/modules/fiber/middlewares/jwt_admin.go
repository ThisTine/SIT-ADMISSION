package middlewares

import (
	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"

	"backend/modules/config"
	"backend/types/common"
	"backend/types/response"
)

var AdminJwt = func() fiber.Handler {
	conf := jwtware.Config{
		SigningKey:  []byte(config.C.JwtSecret),
		TokenLookup: "cookie:token_admin",
		ContextKey:  "admin",
		Claims:      &common.AdminClaims{},
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return response.Error(false, "JWT validation failure", err)
		},
	}

	return jwtware.New(conf)
}
