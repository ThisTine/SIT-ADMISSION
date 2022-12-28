package hub

import (
	"encoding/json"
	"os"

	"github.com/sirupsen/logrus"

	"backend/types/common"
)

var Hub = &hub{
	Provinces:  nil,
	ZipCodeMap: map[uint32][]*common.Tambon{},
}

type hub struct {
	Provinces  []*common.Province
	ZipCodeMap map[uint32][]*common.Tambon
}

func Init() {
	// * Load provinces to struct
	provinces, err := os.ReadFile("./resources/provinces.json")
	if err != nil {
		logrus.Fatal("UNABLE TO READ PROVINCES DATASET FILE")
	}
	if err := json.Unmarshal(provinces, &Hub.Provinces); err != nil {
		logrus.Fatal("UNABLE TO PARSE PROVINCES DATASET FILE ", err)
	}

	// * Post process provinces
	for _, province := range Hub.Provinces {
		for _, amphure := range province.Amphures {
			for _, tambon := range amphure.Tambons {
				tambon.Amphure = amphure
				Hub.ZipCodeMap[tambon.ZipCode] = append(Hub.ZipCodeMap[tambon.ZipCode], tambon)
			}
			amphure.Province = province
		}
	}
}
