package model

import "time"

type Round struct {
	RoundId            *uint64    `gorm:"primaryKey"`
	Name               *string    `gorm:"not null"`
	Year               *string    `gorm:"not null"`
	StartDate          *time.Time `gorm:"not null"`
	OfferAnnounced     *bool      `gorm:"not null, default:false"`
	InterviewAnnounced *bool      `gorm:"not null, default:false"`
	Closed             *bool      `gorm:"not null, default:false"`
	CreatedAt          *time.Time `gorm:"not null"` // Embedded field
	UpdatedAt          *time.Time `gorm:"not null"` // Embedded field
}
