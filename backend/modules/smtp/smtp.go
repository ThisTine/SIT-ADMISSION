package smtp

import (
	"html/template"
	"net/smtp"
	"os"
	"strings"

	"github.com/sirupsen/logrus"

	"backend/modules/config"
	"backend/utils/text"
)

var auth smtp.Auth

var RegisteredTemplate *template.Template

func Init() {
	auth = smtp.PlainAuth("", config.C.SmtpUser, config.C.SmtpPass, strings.Split(config.C.SmtpHost, ":")[0])
	loadTemplate("./resources/mail_registered.html", "email_verification", &RegisteredTemplate)
}

func loadTemplate(filename string, name string, t **template.Template) {
	if bytes, err := os.ReadFile(filename); err != nil {
		logrus.Fatal("UNABLE TO READ MAIL FILE: " + err.Error())
	} else {
		*t = template.Must(template.New(name).Parse(text.RemoveWhitespace(string(bytes))))
	}
}
