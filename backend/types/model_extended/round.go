package extendedModel

import "backend/types/model"

type RoundSubmission struct {
	model.Round
	SubmissionCount *int64 `json:"submission_count"`
}
