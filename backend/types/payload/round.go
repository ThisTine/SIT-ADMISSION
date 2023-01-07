package payload

import (
	"time"

	"backend/types/enum"
)

type RoundInfo struct {
	RoundId           *uint64           `json:"round_id"`
	Name              *string           `json:"name"`
	Year              *int32            `json:"year"`
	StartDate         *time.Time        `json:"start_date"`
	SubmissionEndDate *time.Time        `json:"submission_end_date"`
	Status            *enum.RoundStatus `json:"status"`
	SubmissionCount   *int64            `json:"submission_count"`
	CreatedAt         *time.Time        `json:"created_at"`
	UpdatedAt         *time.Time        `json:"updated_at"`
}
