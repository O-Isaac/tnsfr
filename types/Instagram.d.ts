import type { Body } from "@/utils/ApiResult"

interface EntryPost {
    id: string
    caption: string
    media_url: string
    username: string
    timestamp: string
    permalink: string
}

export interface ResponseInstagram extends Body {
    response: { data: EntryPost[] }
}