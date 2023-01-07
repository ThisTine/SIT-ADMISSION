package endpoints

import (
	"github.com/gofiber/fiber/v2"

	adminEndpoint "backend/endpoints/admin"
	publicEndpoint "backend/endpoints/public"
	"backend/modules/fiber/middlewares"
)

func Init(router fiber.Router) {
	// * Public
	public := router.Group("/public")
	public.Get("/province", publicEndpoint.ProvinceGetHandler)
	public.Put("/admin/login", publicEndpoint.AdminLoginPutHandler)

	// * Admin
	admin := router.Group("/admin", middlewares.AdminJwt())
	admin.Post("round", adminEndpoint.RoundPostHandler)
	admin.Get("rounds", adminEndpoint.RoundsGetHandler)

	// * Student
	student := router.Group("/student")
	_ = student
}
