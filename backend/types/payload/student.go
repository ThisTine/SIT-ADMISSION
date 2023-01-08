package payload

type StudentCreate struct {
	Name  *string `json:"name" validate:"required"`
	Email *string `json:"email" validate:"email"`
}
