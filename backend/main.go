package main

import (
	"backend/modules/config"
	"backend/modules/fiber"
	"backend/modules/ldap"
	"backend/modules/mysql"
)

func main() {
	config.Init()
	mysql.Init()
	ldap.Init()
	fiber.Init()
}
