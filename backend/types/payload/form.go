package payload

import "backend/types/common"

type ZipCodeQuery struct {
	ZipCode uint32 `query:"zipcode" validate:"min=10000,max=99999"`
}

type ZipCodeInfo struct {
	ProvinceId     uint32           `json:"province_id"`
	ProvinceNameTh string           `json:"province_name_th"`
	ProvinceNameEn string           `json:"province_name_en"`
	AmphureId      uint32           `json:"amphure_id"`
	AmphureNameTh  string           `json:"amphure_name_th"`
	AmphureNameEn  string           `json:"amphure_name_en"`
	Tambons        []*common.Tambon `json:"tambons"`
}
