"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Loader2, Send, Brain } from "lucide-react"

type Message = {
    role: "user" | "assistant"
    content: string
}

export function FuriaAIChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Olá! Sou o assistente IA da FURIA. Posso responder perguntas sobre o time de CS, jogadores, estatísticas, torneios e muito mais. Como posso ajudar você hoje?",
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollAreaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Scroll para o final quando novas mensagens são adicionadas
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        // Adiciona a mensagem do usuário
        const userMessage: Message = { role: "user", content: input }
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        function formatBold(text: string): string {
            return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        }


        try {
            // Prepara o contexto para a IA
            const prompt = `
Você é um assistente apaixonado pela FURIA Esports, especializado em Counter-Strike 2, e responde como um torcedor vibrante que conhece o time de ponta a ponta.

### CONTEXTO (abril de 2025):

Time: FURIA Esports  
Técnico: Sid "sidde" Macedo  
Estilo de jogo: Agressivo e imprevisível  
Pontos fortes: Táticas rápidas, pressão constante, clutchs decisivos  
Pontos fracos: Instabilidade no elenco, inconsistência em playoffs

Elenco atual:
- Gabriel "FalleN" Toledo – Capitão / IGL  
- Yuri "yuurih" Santos – Rifler  
- Kaike "KSCERATO" Cerato – Rifler  
- Danil "molodoy" Golubenko – AWPer  
- Mareks "YEKINDAR" Gaļinskis – Stand-in / Rifler

Mudanças recentes:
- 11/04/2025 – Chegada de molodoy (AWPer), saída de chelo (banco)  
- 22/04/2025 – skullz afastado, YEKINDAR entra como stand-in

Conquistas:
- Esports World Cup 2024 – Semifinais – $160.000  
- PGL CS2 Major Copenhagen 2024 – 15º-16º – $20.000  
- IEM Rio Major 2022 – Semifinal  
- ESL Pro League S12 NA – Campeã

### INSTRUÇÕES:

Responda à pergunta abaixo com empolgação, paixão e tom de torcedor. Use gírias e expressões comuns no cenário CS2 (como “mandou clutch”, “limpou bomb”, “joga fino”, etc.). Sempre use termos como “nosso time”, “vamos pra cima”, “a gente”, “a FURIA”.

Seja:
- Direto (máximo 3 parágrafos curtos)
- Informativo, mas sem enrolar
- Empolgado e positivo sobre a FURIA

Regras:
1. **Nunca mencione jogadores que não estejam no elenco atual ou nas mudanças recentes.**
2. Se o nome citado estiver fora da lista, diga:
    - “Não faz mais parte do nosso time” (se for ex-jogador da FURIA)
    - “Nunca fez parte da FURIA” (se nunca atuou pela organização)
3. Se a pergunta citar alguém do elenco atual ou mudanças recentes, responda com detalhes e entusiasmo sobre o jogador.

Pergunta do fã:
"${input}"

`



            // Gera a resposta usando a AI SDK do Ollama
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            })
            const data = await res.json()
            const text = data.response


            // Adiciona a resposta da IA
            const assistantMessage: Message = { role: "assistant", content: text }
            setMessages((prev) => [...prev, assistantMessage])
        } catch (error) {
            console.error("Erro ao gerar resposta:", error)
            // Adiciona mensagem de erro
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Desculpe, tive um problema ao processar sua pergunta. Pode tentar novamente?",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    function formatBold(content: string): string {
        return content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    }
    return (
        <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                <div className="space-y-4 mb-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-start gap-2`}
                        >
                            {message.role === "assistant" && (
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/furia-logo.svg" alt="FURIA AI" />
                                    <AvatarFallback className="bg-gold/20">
                                        <Brain className="h-4 w-4 text-gold" />
                                    </AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={`p-3 rounded-lg max-w-[80%] ${message.role === "user"
                                    ? "bg-gold/20 text-white ml-auto"
                                    : "bg-black/40 border border-gold/20 text-white"
                                    }`}
                            >
                                <p
                                    className="text-sm whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: formatBold(message.content) }}
                                ></p>

                            </div>
                            {message.role === "user" && (
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-gold/20">U</AvatarFallback>
                                </Avatar>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start items-start gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/furia-logo.svg" alt="FURIA AI" />
                                <AvatarFallback className="bg-gold/20">
                                    <Brain className="h-4 w-4 text-gold" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="p-3 rounded-lg max-w-[80%] bg-black/40 border border-gold/20 text-white">
                                <Loader2 className="h-4 w-4 animate-spin text-gold" />
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>

            <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
                <Input
                    placeholder="Pergunte algo sobre a FURIA..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-black/40 border-gold/30 focus-visible:ring-gold"
                    disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !input.trim()} className="bg-gold hover:bg-gold/80 text-black">
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
            </form>
        </div>
    )
}
