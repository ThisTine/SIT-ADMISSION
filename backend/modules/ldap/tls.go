package ldap

import (
	"crypto/tls"
	"crypto/x509"

	"github.com/sirupsen/logrus"

	"backend/modules/config"
)

func GetTlsConfig() *tls.Config {
	pool := x509.NewCertPool()
	if ok := pool.AppendCertsFromPEM([]byte(config.C.LdapCert)); !ok {
		logrus.Fatal("Unable to parse LDAP certificate")
	}

	return &tls.Config{
		InsecureSkipVerify: true,
		RootCAs:            pool,
		MinVersion:         tls.VersionTLS10,
	}
}
