import type { NextApiRequest, NextApiResponse } from 'next'

import ApiResult, { Body } from '@/utils/ApiResult'
import axios from 'axios';
import Cache from "node-cache"


const requestCache = new Cache({ stdTTL: 900 })
const params = {
  fields: "id,caption,media_url,username,timestamp,permalink",
  'access_token': process.env.token || ""
}

const http = axios.create({
	baseURL: 'https://graph.instagram.com',
	headers: { 'Cache-Control': 'max-age=900' },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Body>) {
  const result = new ApiResult("ok", 200)
  console.log("%s - %s", "GET", "recive request!")

  if (requestCache.has("instagram")) {
    const query = requestCache.get("instagram")
    result.setResponse(query)
    result.setMessage("cache")
  } else {
    console.log("[%s] %s", "GET", "getting instagram data!")
    const query = await http.get("/me/media", { params })
    result.setResponse(query.data)
    requestCache.set("instagram", query.data)
  }

  res.status(200)
    .setHeader("Cache-Control", "max-age=900")
    .json(result.response)
}
