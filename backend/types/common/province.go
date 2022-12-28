package common

type Province struct {
	Id          uint32     `json:"id"`
	NameTh      string     `json:"name_th"`
	NameEn      string     `json:"name_en"`
	GeographyId uint32     `json:"geography_id"`
	Amphures    []*Amphure `json:"amphures"`
}

type Amphure struct {
	Id         uint32    `json:"id"`
	NameTh     string    `json:"name_th"`
	NameEn     string    `json:"name_en"`
	ProvinceId uint32    `json:"province_id"`
	Province   *Province `json:"province"`
	Tambons    []*Tambon `json:"tambons"`
}

type Tambon struct {
	Id        uint32   `json:"id"`
	ZipCode   uint32   `json:"zip_code"`
	NameTh    string   `json:"name_th"`
	NameEn    string   `json:"name_en"`
	AmphureId uint32   `json:"amphure_id"`
	Amphure   *Amphure `json:"amphure"`
}
