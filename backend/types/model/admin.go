package model

type Admin struct {
	AdminId *uint64 `gorm:"primaryKey"`
	Email   *string `gorm:"uniqueIndex; not null"`
}
