// pages/api/ollama.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    try {
        const { prompt } = req.body

        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3.2",
                prompt,
                stream: false,
            }),
        })

        const data = await response.json()
        res.status(200).json({ response: data.response })
    } catch (error: any) {
        res.status(500).json({ response: "Erro interno: " + error.message })
    }
}
