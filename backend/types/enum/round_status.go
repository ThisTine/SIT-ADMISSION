package enum

import (
	"encoding/json"
	"fmt"
)

type RoundStatus string

var (
	RoundStatusSubmissionDraft    RoundStatus = "draft"
	RoundStatusSubmissionOpening  RoundStatus = "submission_opening"
	RoundStatusSubmissionClosed   RoundStatus = "submission_closed"
	RoundStatusInterviewAnnounced RoundStatus = "interview_announced"
	RoundStatusFinalistAnnounced  RoundStatus = "finalist_announced"
)

func (r *RoundStatus) UnmarshalJSON(data []byte) error {
	v := new(string)
	if err := json.Unmarshal(data, v); err != nil {
		return err
	}

	val := RoundStatus(*v)
	if val != RoundStatusSubmissionDraft &&
		val != RoundStatusSubmissionOpening &&
		val != RoundStatusSubmissionClosed &&
		val != RoundStatusInterviewAnnounced &&
		val != RoundStatusFinalistAnnounced {
		return fmt.Errorf("%s is not a valid RoundStatus value", val)
	}

	*r = val
	return nil
}
