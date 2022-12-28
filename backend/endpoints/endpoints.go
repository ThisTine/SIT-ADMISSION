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
	public.Get("/province", publicEndpoint.GetProvinceHandler)
	public.Put("/admin/login", publicEndpoint.PutAdminLoginHandler)

	// * Admin
	admin := router.Group("/admin", middlewares.AdminJwt())
	admin.Get("rounds", adminEndpoint.GetRoundsHandler)

	// * Student
	student := router.Group("/student")
	_ = student
}
