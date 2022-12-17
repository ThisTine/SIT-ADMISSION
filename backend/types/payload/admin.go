package payload

type AdminLogin struct {
	Uid      *string `json:"uid" validate:"required"`
	Password *string `json:"password" validate:"required"`
}

type AdminRoundQuery struct {
	Year *int32 `json:"year" validate:"gte=2020,lte=2100"`
}
