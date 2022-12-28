package model

import "time"

type Student struct {
	StudentId  *uint64    `gorm:"primaryKey"`
	NationalNo *string    `gorm:"uniqueIndex; not null"`
	Passed     *bool      `gorm:"not null"`
	CreatedAt  *time.Time `gorm:"not null"` // Embedded field
	UpdatedAt  *time.Time `gorm:"not null"` // Embedded field
}
