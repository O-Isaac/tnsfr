import path from "path"
import { readFileSync } from "fs"

export default class EmailTemplates {
    private dir: string

    constructor(name: string) {
        this.dir = path.resolve(process.cwd(), "emails", `${name}.html`)
    }

    get html () {
        const templateHtml = readFileSync(this.dir, { encoding: "utf-8" })
        return templateHtml
    }
}