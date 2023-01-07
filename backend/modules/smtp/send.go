package smtp

import (
	"bytes"
	"html/template"
	"net/smtp"

	"backend/modules/config"
	"backend/types/response"
	"backend/utils/text"
)

func SendEmail(name string, email string, subject string, template *template.Template, data map[string]any) *response.ErrorInstance {
	var body bytes.Buffer
	body.Write([]byte("Subject: " + subject +
		"\nFrom: \"SIT Admission\" <" + config.C.SmtpUser + "@sit.kmutt.ac.th>" +
		"\nTo: \"" + name + "\" <" + email + ">" +
		"\nMessage-ID: <outbound_admission_" + *text.Random(text.RandomSet.UpperAlphaNum, 26) + "@sit.kmutt.ac.th>" +
		"\nMIME-Version: 1.0" +
		"\nContent-Type: text/html; charset='UTF-8'\n"))

	if err := template.Execute(&body, data); err != nil {
		return response.Error(true, "Unable to format email content", err)
	}

	if err := smtp.SendMail(config.C.SmtpHost, auth, config.C.SmtpUser, []string{email}, body.Bytes()); err != nil {
		return response.Error(true, "Unable to the send email", err)
	}

	return nil
}
