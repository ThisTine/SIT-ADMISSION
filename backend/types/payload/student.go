package payload

type StudentCreate struct {
	Email string `json:"email" validate:"email"`
}
