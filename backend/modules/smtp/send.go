package smtp

import (
	"bytes"
	"fmt"
	"net/smtp"

	"backend/modules/config"
	"backend/types/response"
	"backend/utils/text"
)

func SendSRegistered(email string, token string) *response.ErrorInstance {
	var body bytes.Buffer
	body.Write([]byte("Subject: Admission session created" +
		"\nFrom: \"SIT Admission\" <" + config.C.SmtpUser + "@sit.kmutt.ac.th>" +
		"\nTo: Admission Student <" + email + ">" +
		"\nMessage-ID: <sitams_outbound_" + *text.Random(text.RandomSet.UpperAlphaNum, 16) + "@sit.kmutt.ac.th>" +
		"\nMIME-Version: 1.0" +
		"\nContent-Type: text/plain; charset='UTF-8'\n"))

	if err := RegisteredTemplate.Execute(&body, map[string]any{
		"email":       email,
		"restore_url": fmt.Sprintf("%s/restore?token=%s", config.C.FrontendUrl, token),
	}); err != nil {
		return response.Error(true, "Unable to format email content", err)
	}

	if err := smtp.SendMail(config.C.SmtpHost, auth, config.C.SmtpUser+"@sit.kmutt.ac.th", []string{email}, body.Bytes()); err != nil {
		return response.Error(true, "Unable to the send email", err)
	}

	return nil
}
