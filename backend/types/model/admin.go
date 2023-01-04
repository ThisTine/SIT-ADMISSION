package model

type Admin struct {
	AdminId *uint64 `gorm:"primaryKey"`
	Uid     *string `gorm:"uniqueIndex; not null"`
	Email   *string `gorm:"type:VARCHAR(255); null"`
	Name    *string `gorm:"type:VARCHAR(255); null"`
}
