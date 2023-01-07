package admin

import (
	"github.com/gofiber/fiber/v2"

	"backend/modules/mysql"
	"backend/types/enum"
	"backend/types/model"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/text"
)

func RoundPostHandler(c *fiber.Ctx) error {
	// * Parse body
	body := new(payload.AdminRoundRecord)
	if err := c.BodyParser(body); err != nil {
		return response.Error(false, "Unable to parse body", err)
	}

	// * Validate body
	if err := text.Validator.Struct(body); err != nil {
		return response.Error(false, "Unable to validate body", err)
	}

	// * Create round
	round := &model.Round{
		RoundId:               nil,
		Name:                  body.Name,
		Detail:                body.Detail,
		Majors:                body.Majors,
		Year:                  body.Year,
		StartDate:             body.StartDate,
		SubmissionEndDate:     body.SubmissionEndDate,
		InterviewAnnounceDate: body.InterviewAnnounceDate,
		FinalistAnnounceDate:  nil,
		Status:                &enum.RoundStatusSubmissionDraft,
		CreatedAt:             nil,
		UpdatedAt:             nil,
	}

	if err := mysql.DB.Create(round).Error; err != nil {
		return response.Error(false, "Unable to create round", err)
	}

	return c.JSON(response.Info("Successfully created round"))
}
