package enum

import (
	"encoding/json"
	"errors"
	"fmt"
)

type RoundStatus string

const (
	RoundStatusSubmissionOpening  RoundStatus = "so"
	RoundStatusSubmissionClosed   RoundStatus = "sc"
	RoundStatusInterviewAnnounced RoundStatus = "ia"
	RoundStatusCandidateAnnounced RoundStatus = "ca"
)

func (r *RoundStatus) UnmarshalJSON(data []byte) error {
	v := new(string)
	if err := json.Unmarshal(data, v); err != nil {
		return err
	}

	val := RoundStatus(*v)
	if val != RoundStatusSubmissionOpening && val != RoundStatusSubmissionClosed && val != RoundStatusInterviewAnnounced && val != RoundStatusCandidateAnnounced {
		return errors.New(fmt.Sprintf("%s is not a valid RoundStatus value", val))
	}

	*r = val
	return nil
}
