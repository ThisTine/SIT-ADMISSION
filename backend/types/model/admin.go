package model

type Admin struct {
	AdminId *uint64 `gorm:"primaryKey"`
	Uid     *string `gorm:"uniqueIndex; not null"`
}
