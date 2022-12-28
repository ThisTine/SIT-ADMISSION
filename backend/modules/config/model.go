package config

type Model struct {
	Environment uint8  `yaml:"environment" validate:"gte=1,lte=2"`
	LogLevel    uint32 `yaml:"log_level" validate:"required"`

	Address     string   `yaml:"address" validate:"required"`
	FrontendUrl string   `yaml:"frontend_url" validate:"required"`
	Cors        []string `yaml:"cors" validate:"required"`

	MySqlDsn     string `yaml:"mysql_dsn" validate:"required"`
	MySqlMigrate bool   `yaml:"mysql_migrate"`

	SmtpHost string `yaml:"smtp_host" validate:"required"`
	SmtpUser string `yaml:"smtp_user" validate:"required"`
	SmtpPass string `yaml:"smtp_pass" validate:"required"`

	LdapAddress string `yaml:"ldap_address" validate:"required"`
	LdapBaseDn  string `yaml:"ldap_base_dn" validate:"required"`
	LdapCert    string `yaml:"ldap_cert" validate:"required"`

	JwtSecret string `yaml:"jwt_secret" validate:"required"`
}
