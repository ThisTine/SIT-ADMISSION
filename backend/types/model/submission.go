package model

import "time"

type Submission struct {
	StudentId       *uint64    `gorm:"primaryKey"`
	Student         *Student   `gorm:"foreignKey:StudentId"`
	RoundId         *uint64    `gorm:"primaryKey"`
	Round           *Round     `gorm:"foreignKey:RoundId"`
	OfferPassed     *bool      `gorm:"not null"`
	InterviewPassed *bool      `gorm:"not null"`
	Confirmed       *bool      `gorm:"not null"`
	CreatedAt       *time.Time `gorm:"not null"` // Embedded field
	UpdatedAt       *time.Time `gorm:"not null"` // Embedded field
}
