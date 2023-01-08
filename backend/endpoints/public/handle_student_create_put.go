package public

import (
	"time"

	"github.com/gofiber/fiber/v2"

	"backend/modules/smtp"
	"backend/types/payload"
	"backend/types/response"
)

func StudentCreatePutHandler(c *fiber.Ctx) error {
	// * Parse body
	body := new(payload.StudentCreate)
	if err := c.BodyParser(body); err != nil {
		return response.Error(true, "Unable to parse body", err)
	}

	// * Send email
	if err := smtp.SendEmail(
		*body.Name,
		*body.Email,
		"Your new admission account is activated",
		smtp.RegisteredTemplate,
		map[string]any{
			"student_name":            body.Name,
			"student_email":           body.Email,
			"round_name":              "Active Recruitment #1",
			"round_year":              "2021",
			"interview_announce_date": time.Now().Format("Mon, 02 Jan 2006"),
			"cta_url":                 "https://admission.sit.kmutt.ac.th/test",
		}); err != nil {
		return response.Error(true, "Unable to send email", err)
	}

	// * Return response
	return c.JSON(response.Info("OK"))
}
