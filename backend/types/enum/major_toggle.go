package enum

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
	"sort"
)

type MajorToggle []string

func (r *MajorToggle) UnmarshalJSON(data []byte) error {
	var v []string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}

	for _, val := range v {
		if val != "cs" &&
			val != "it" &&
			val != "dsi" {
			return fmt.Errorf("%s is not a valid MajorToggle value", val)
		}
	}

	sort.SliceStable(v, func(i, j int) bool {
		return v[i] < v[j]
	})

	*r = v

	return nil
}

func (r *MajorToggle) Value() (driver.Value, error) {
	return json.Marshal(r)
}

func (r *MajorToggle) Scan(v any) error {
	switch tv := v.(type) {
	case []uint8:
		return json.Unmarshal(tv, &r)
	}
	return errors.New("unable to scan MajorToggle")
}
