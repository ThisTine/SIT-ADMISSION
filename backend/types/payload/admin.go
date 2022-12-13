package payload

type AdminLogin struct {
	Email *string `json:"email" validate:"email"`
}

type AdminRoundQuery struct {
	Year *int32 `json:"year" validate:"gte=2020,lte=2100"`
}
