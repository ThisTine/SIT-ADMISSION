package common

import "time"

type AdminClaims struct {
	Id  *uint64    `json:"id"`
	Exp *time.Time `json:"exp"`
}

func (r *AdminClaims) Valid() error {
	return nil
}
