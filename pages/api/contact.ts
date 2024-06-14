import type { NextApiRequest, NextApiResponse } from 'next'
import ApiResult, { Body } from '@/utils/ApiResult'
import EmailTemplates from '@/utils/Templates'
import { Mail } from '@/utils/Mail'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Body>) {
    const result = new ApiResult("ok", 200)
    const template = new EmailTemplates("notification")
    const email = new Mail(process.env.userEmail || "", process.env.userPass || "")
    const body = JSON.parse(req.body)


    const keys = Object.values(body)
    const hasVoidValue = keys.some((value) => !value)
    
    if (hasVoidValue) {
        const entries = Object.entries(body)
        const voidValues = entries
            .filter(([_, value]) => !value)
            .map(([key]) => key)

        result.setMessage("Forbidden")
        result.setStatus(403)
        result.setResponse({ values: voidValues, message: "This values is null" })

        return res.status(200)
            .setHeader("Cache-Control", "max-age=900")
            .json(result.response)
    }

    try {
        const emailResult = await email.sendHtml({
            from: process.env.emailFrom || "",
            to: process.env.emailTo || "",
            subject: `[TNFSR] Contact Notification - ${body.email}`,
            html: template.html
                .replace("{{email}}", body.email)
                .replace("{{subject}}", body.subject)
                .replace("{{message}}", body.message)
        })

        result.setResponse(emailResult)
    } catch (error) {
        result.setMessage("Internal Server Error")
        result.setStatus(500)
    }
    


    res.status(200)
        .setHeader("Cache-Control", "max-age=900")
        .json(result.response)
}
