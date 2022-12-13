package config

type Model struct {
	Environment uint8  `yaml:"environment" validate:"gte=1,lte=2"`
	LogLevel    uint32 `yaml:"log_level" validate:"required"`

	Address string   `yaml:"address" validate:"required"`
	Cors    []string `yaml:"cors" validate:"required"`

	MySqlDsn     string `yaml:"mysql_dsn" validate:"required"`
	MySqlMigrate bool   `yaml:"mysql_migrate"`

	JwtSecret string `yaml:"jwt_secret" validate:"required"`
}
