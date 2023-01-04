package public

import (
	"github.com/gofiber/fiber/v2"

	"backend/modules/hub"
	"backend/types/common"
	"backend/types/payload"
	"backend/types/response"
	"backend/utils/text"
)

func ProvinceGetHandler(c *fiber.Ctx) error {
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

	// * Group postal code by amphure
	amphures := make(map[*common.Amphure][]*common.Tambon)
	for _, tambon := range tambons {
		amphures[tambon.Amphure] = append(amphures[tambon.Amphure], tambon)
	}

	// * Map amphure payload
	var amphureInfos []*payload.AmphureInfo
	for amphure, filteredTambons := range amphures {
		amphureInfos = append(amphureInfos, &payload.AmphureInfo{
			AmphureId:     amphure.Id,
			AmphureNameTh: amphure.NameTh,
			AmphureNameEn: amphure.NameEn,
			Tambons:       filteredTambons,
		})
	}

	return c.JSON(response.Info(&payload.ZipCodeInfo{
		ProvinceId:     tambons[0].Amphure.Province.Id,
		ProvinceNameTh: tambons[0].Amphure.Province.NameTh,
		ProvinceNameEn: tambons[0].Amphure.Province.NameEn,
		Amphures:       amphureInfos,
	}))
}
