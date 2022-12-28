package public

import (
	"github.com/gofiber/fiber/v2"

	"backend/modules/hub"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/text"
)

func GetProvinceHandler(c *fiber.Ctx) error {
	// * Parse query
	query := new(payload.ZipCodeQuery)
	if err := c.QueryParser(query); err != nil {
		return response.Error(false, "Unable to parse query", err)
	}

	// * Validate query
	if err := text.Validator.Struct(query); err != nil {
		return response.Error(false, "Unable to validate body", err)
	}

	// * Fetch data
	tambons, ok := hub.Hub.ZipCodeMap[query.ZipCode]
	if !ok {
		return response.Error(false, "Unable to find zip code", nil)
	}

	return c.JSON(response.Info(&payload.ZipCodeInfo{
		ProvinceId:     tambons[0].Amphure.Province.Id,
		ProvinceNameTh: tambons[0].Amphure.Province.NameTh,
		ProvinceNameEn: tambons[0].Amphure.Province.NameEn,
		AmphureId:      tambons[0].Amphure.Id,
		AmphureNameTh:  tambons[0].Amphure.NameTh,
		AmphureNameEn:  tambons[0].Amphure.NameEn,
		Tambons:        tambons,
	}))
}
