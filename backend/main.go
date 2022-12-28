package main

import (
	"backend/modules/config"
	"backend/modules/fiber"
	"backend/modules/hub"
	"backend/modules/ldap"
	"backend/modules/mysql"
)

func main() {
	config.Init()
	hub.Init()
	mysql.Init()
	ldap.Init()
	fiber.Init()
}
