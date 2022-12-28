package ldap

import (
	"github.com/sirupsen/logrus"
	"gopkg.in/ldap.v2"

	"backend/modules/config"
)

var L *ldap.Conn

func Init() {
	if l, err := ldap.DialTLS("tcp", config.C.LdapAddress, GetTlsConfig()); err != nil {
		logrus.Fatal("Unable to connect to LDAP server ", err)
	} else {
		L = l
	}
}
