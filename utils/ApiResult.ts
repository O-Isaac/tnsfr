export interface Body {
    message?: string
    status?: number
    response?: {}
}

export default class ApiResult {
    private body: Body = {}

    constructor(message: string, status: number) {
        this.body.message = message
        this.body.status = status
    }

    public setResponse (res: any) {
        this.body.response = res
    }

    public setMessage (message: string) {
        this.body.message = message
    }

    public setStatus (status: number) {
        this.body.status = status
    }

    get response () { return this.body }
}