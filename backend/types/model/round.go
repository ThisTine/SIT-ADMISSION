package model

import (
	"time"

	"backend/types/enum"
)

type Round struct {
	RoundId               *uint64           `gorm:"primaryKey"`
	Name                  *string           `gorm:"not null"`
	Detail                *string           `gorm:"type:TEXT; not null"`
	Majors                *enum.MajorToggle `gorm:"type:TEXT; not null"`
	Year                  *int32            `gorm:"not null"`
	StartDate             *time.Time        `gorm:"not null"`
	SubmissionEndDate     *time.Time        `gorm:"not null"`
	InterviewAnnounceDate *time.Time        `gorm:"not null"`
	FinalistAnnounceDate  *time.Time        `gorm:"not null"`
	Status                *enum.RoundStatus `gorm:"type:ENUM('draft', 'submission_opening', 'submission_closed', 'interview_announced', 'finalist_announced'); not null"`
	CreatedAt             *time.Time        `gorm:"not null"` // Embedded field
	UpdatedAt             *time.Time        `gorm:"not null"` // Embedded field
}
