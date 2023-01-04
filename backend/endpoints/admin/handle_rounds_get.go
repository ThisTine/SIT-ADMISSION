package admin

import (
	"github.com/gofiber/fiber/v2"

	"backend/modules/mysql"
	"backend/types/model"
	"backend/types/model_extended"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/text"
)

func RoundsGetHandler(c *fiber.Ctx) error {
	// * Parse query
	query := new(payload.AdminRoundQuery)
	if err := c.QueryParser(query); err != nil {
		return response.Error(false, "Unable to parse query", err)
	}

	// * Validate query
	if err := text.Validator.Struct(query); err != nil {
		return err
	}

	// * Query rounds
	var rounds []*extendedModel.RoundSubmission
	if err := mysql.DB.Model(new(model.Round)).Select("rounds.*, (SELECT COUNT(*) FROM submissions WHERE round_id = rounds.round_id) AS submission_count").Where("year = ?", query.Year).Find(&rounds).Error; err != nil {
		return response.Error(false, "Unable to query rounds", err)
	}

	return c.JSON(response.Info(rounds))
}
