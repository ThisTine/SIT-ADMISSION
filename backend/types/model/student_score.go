package model

import "time"

type StudentScore struct {
	// Identifier
	StudentId *uint64  `gorm:"uniqueIndex; not null"`
	Student   *Student `gorm:"foreignKey:StudentId"`

	// School score
	OverallGpax *float32 `gorm:"null"`
	MathGpa     *float32 `gorm:"null"`
	SciGpa      *float32 `gorm:"null"`
	LngGpa      *float32 `gorm:"null"`

	// Embedded field
	CreatedAt *time.Time `gorm:"not null"`
	UpdatedAt *time.Time `gorm:"not null"`
}
