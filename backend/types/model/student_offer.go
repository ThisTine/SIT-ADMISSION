package model

import "time"

type StudentOffer struct {
	// Identifier
	StudentId *uint64  `gorm:"primaryKey"`
	Student   *Student `gorm:"foreignKey:StudentId"`
	RoundId   *uint64  `gorm:"primaryKey"`
	Round     *Round   `gorm:"foreignKey:RoundId"`

	// Information
	PortfolioLink  *string `gorm:"null"`
	TranscriptLink *string `gorm:"null"`
	DocumentsLink  *string `gorm:"null"`
	LanguageLink   *string `gorm:"null"`

	// Embedded field
	CreatedAt *time.Time `gorm:"not null"`
	UpdatedAt *time.Time `gorm:"not null"`
}
