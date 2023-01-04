package adminFunc

import (
	"strings"

	"github.com/davecgh/go-spew/spew"
)

func GetUsername(name string) string {
	name = strings.ToLower(name)
	afterSplit := strings.Split(name, ".")
	var afterSplit2 []string
	if len(afterSplit) > 1 {
		afterSplit2 = strings.Split(afterSplit[1], " ")
	} else {
		afterSplit2 = strings.Split(afterSplit[0], " ")
	}
	spew.Dump(afterSplit2)
	return afterSplit2[0] + "." + afterSplit2[1][:1]
}
