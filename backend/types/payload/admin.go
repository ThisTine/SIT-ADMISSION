package payload

import (
	"time"

	"backend/types/enum"
)

type AdminLogin struct {
	Uid      *string `json:"uid" validate:"required"`
	Password *string `json:"password" validate:"required"`
}

type AdminRoundQuery struct {
	Year *int32 `json:"year" validate:"gte=2020,lte=2100"`
}

type AdminRoundRecord struct {
	RoundId               *uint64           `json:"round_id" validate:"omitempty"`
	Name                  *string           `json:"name" validate:"required"`
	Detail                *string           `json:"detail" validate:"html"`
	Majors                *enum.MajorToggle `json:"majors" validate:"required"`
	Year                  *int32            `json:"year" validate:"gte=2020,lte=2100"`
	StartDate             *time.Time        `json:"start_date" validate:"required"`
	SubmissionEndDate     *time.Time        `json:"submission_end_date" validate:"required"`
	InterviewAnnounceDate *time.Time        `json:"interview_announce_date" validate:"required"`
	FinalistAnnounceDate  *time.Time        `json:"finalist_announce_date" validate:"required"`
}
