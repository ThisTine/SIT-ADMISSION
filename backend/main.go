package main

import (
	"backend/modules/config"
	"backend/modules/fiber"
	"backend/modules/hub"
	"backend/modules/ldap"
	"backend/modules/mysql"
	"backend/modules/smtp"
)

func main() {
	config.Init()
	hub.Init()
	mysql.Init()
	smtp.Init()
	ldap.Init()
	fiber.Init()
}
