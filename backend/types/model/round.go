package model

import (
	"time"

	"backend/types/enum"
)

type Round struct {
	RoundId           *uint64           `gorm:"primaryKey"`
	Name              *string           `gorm:"not null"`
	Year              *int32            `gorm:"not null"`
	StartDate         *time.Time        `gorm:"not null"`
	SubmissionEndDate *time.Time        `gorm:"not null"`
	Status            *enum.RoundStatus `gorm:"type:ENUM('so', 'sc', 'ia', 'ca'); not null"`
	CreatedAt         *time.Time        `gorm:"not null"` // Embedded field
	UpdatedAt         *time.Time        `gorm:"not null"` // Embedded field
}
