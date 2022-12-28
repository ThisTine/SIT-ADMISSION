package mysql

import (
	"log"
	"os"
	"time"

	"github.com/sirupsen/logrus"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"backend/modules/config"
	"backend/types/model"
)

var DB *gorm.DB

func Init() {
	// Initialize GORM instance using previously opened SQL connection
	gormLogLevel := []logger.LogLevel{
		logger.Silent,
		logger.Error,
		logger.Error,
		logger.Warn,
		logger.Info,
		logger.Info,
		logger.Info,
	}

	gormLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             100 * time.Millisecond,
			LogLevel:                  gormLogLevel[config.C.LogLevel],
			IgnoreRecordNotFoundError: true,
			Colorful:                  true,
		},
	)

	// Open SQL connection
	dialector := mysql.New(
		mysql.Config{
			DSN:               config.C.MySqlDsn,
			DefaultStringSize: 255,
		},
	)

	if db, err := gorm.Open(dialector, &gorm.Config{
		Logger: gormLogger,
	}); err != nil {
		logrus.Fatal("UNABLE TO LOAD GORM MYSQL DATABASE")
	} else {
		DB = db
	}

	// Initialize model migrations
	if config.C.MySqlMigrate {
		if err := migrate(); err != nil {
			logrus.Fatal("UNABLE TO MIGRATE GORM MODEL")
		}
	}

	logrus.Debug("INITIALIZED MYSQL CONNECTION")
}

func migrate() error {
	// * Migrate model
	if err := DB.AutoMigrate(
		new(model.Admin),
		new(model.Round),
		new(model.Student),
		new(model.StudentToken),
		new(model.StudentProfile),
		new(model.StudentScore),
		new(model.StudentOffer),
		new(model.Submission),
	); err != nil {
		return err
	}

	return nil
}
