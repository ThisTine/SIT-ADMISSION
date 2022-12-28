package model

import "time"

type StudentProfile struct {
	// Identifier
	StudentId *uint64  `gorm:"uniqueIndex; not null"`
	Student   *Student `gorm:"foreignKey:StudentId"`

	// Basic profile
	PrefixEn    *string `gorm:"null"`
	FirstnameEn *string `gorm:"null"`
	LastnameEn  *string `gorm:"null"`
	PrefixTh    *string `gorm:"null"`
	FirstnameTh *string `gorm:"null"`

	// Contact information
	LastnameTh *string `gorm:"null"`
	AddressLn1 *string `gorm:"null"`
	AddressLn2 *string `gorm:"null"`
	Email      *string `gorm:"null"`
	Phone      *string `gorm:"null"`
	Facebook   *string `gorm:"null"`
	Line       *string `gorm:"null"`
	Telegram   *string `gorm:"null"`

	// Embedded field
	CreatedAt *time.Time `gorm:"not null"`
	UpdatedAt *time.Time `gorm:"not null"`
}
