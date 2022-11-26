package model

import (
	"time"

	"gorm.io/gorm"
)

type StudentToken struct {
	StudentId *uint64         `gorm:"not null"`
	Student   *Student        `gorm:"foreignKey:StudentId"`
	Token     *string         `gorm:"not null"`
	CreatedAt *time.Time      `gorm:"not null"` // Embedded field
	UpdatedAt *time.Time      `gorm:"not null"` // Embedded field
	DeletedAt *gorm.DeletedAt `gorm:"null"`     // Embedded field
}
