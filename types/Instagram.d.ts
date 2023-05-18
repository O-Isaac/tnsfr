import type { Body } from "@/utils/ApiResult"

interface EntryPost {
    id: string
    capiton: string
    media_url: string
    username: string
    timestamp: string
}

export interface ResponseInstagram extends Body {
    response: { data: EntryPost[] }
}