import { Transporter, createTransport } from "nodemailer"

interface MailOptions {
    from: string,
    to: string,
    subject: string,
}


interface MailOptionText extends MailOptions {
    text: string
}

interface MailOptionHTML extends MailOptions {
    html: string
}

export class Mail {
    private transporte: Transporter

    constructor (user: string, pass: string) {
        this.transporte = createTransport({
            service: "gmail",
            auth: { user, pass }
        })
    }


    sendText = (options: MailOptionText) => new Promise((resolve, reject) => {
        this.transporte.sendMail(options, function (err, info) {
            if (err) reject(err)
            resolve(info)
        })
    })

    sendHtml = (options: MailOptionHTML) => new Promise((resolve, reject) => {
        this.transporte.sendMail(options, function (err, info) {
            if (err) reject(err)
            resolve(info)
        })
    })
}