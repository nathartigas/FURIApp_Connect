"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp, MessageCircle, Share2, Calendar, Users, Flame } from "lucide-react"

export function CommunityDiscussion() {
    const [activeTab, setActiveTab] = useState("populares")
    const [commentText, setCommentText] = useState("")

    const discussions = [
        {
            id: 1,
            title: "O que acharam da performance da FURIA contra a Na'Vi?",
            author: "FuriaFan99",
            date: "2 dias atrás",
            content:
                "Acabei de assistir a partida contra a Na'Vi e fiquei impressionado com a performance do KSCERATO. Aquele clutch no round 24 foi simplesmente incrível! O que vocês acharam do jogo como um todo?",
            likes: 48,
            comments: 15,
            tags: ["Discussão", "Na'Vi", "KSCERATO"],
            category: "populares",
        },
        {
            id: 2,
            title: "Análise tática: Como a FURIA dominou a Inferno contra a Liquid",
            author: "TaticoCS",
            date: "5 dias atrás",
            content:
                "Fiz uma análise detalhada de como a FURIA dominou a Inferno contra a Liquid. O controle do meio do mapa e as execuções no bombsite B foram perfeitas. Alguém mais notou como o arT mudou seu estilo de jogo nesse mapa?",
            likes: 72,
            comments: 23,
            tags: ["Análise", "Tática", "Inferno"],
            category: "populares",
        },
        {
            id: 3,
            title: "Previsões para o próximo Major: FURIA tem chances?",
            author: "CSAnalyst",
            date: "1 semana atrás",
            content:
                "Com o próximo Major se aproximando, quais são as chances da FURIA? Considerando a forma atual do time e os adversários, acredito que podemos chegar pelo menos nas semifinais. O que vocês acham?",
            likes: 35,
            comments: 42,
            tags: ["Major", "Previsões", "Torneio"],
            category: "discussoes",
        },
        {
            id: 4,
            title: "yuurih está subestimado no cenário mundial?",
            author: "BRpower",
            date: "3 dias atrás",
            content:
                "Tenho acompanhado as estatísticas do yuurih e ele está consistentemente entre os melhores jogadores do mundo, mas raramente é mencionado nas discussões sobre top players. Vocês acham que ele está subestimado?",
            likes: 63,
            comments: 28,
            tags: ["yuurih", "Top Players", "Estatísticas"],
            category: "recentes",
        },
        {
            id: 5,
            title: "Compilação: Melhores jogadas da FURIA em 2025",
            author: "HighlightMaker",
            date: "12 horas atrás",
            content:
                "Criei uma compilação com as melhores jogadas da FURIA em 2025 até agora. Tem clutches do KSCERATO, jogadas agressivas do arT, sprays perfeitos do yuurih e muito mais. O que vocês acham que deveria entrar na próxima compilação?",
            likes: 29,
            comments: 8,
            tags: ["Highlights", "Compilação", "2025"],
            category: "recentes",
        },
        {
            id: 6,
            title: "Discussão: Melhor formação da FURIA de todos os tempos",
            author: "HistoriaCS",
            date: "4 dias atrás",
            content:
                "Pensando em todas as formações da FURIA desde sua criação, qual vocês consideram a melhor? A atual está mostrando resultados impressionantes, mas tivemos outras formações muito fortes também.",
            likes: 54,
            comments: 37,
            tags: ["História", "Formação", "Discussão"],
            category: "discussoes",
        },
    ]

    const filteredDiscussions = discussions.filter((discussion) => {
        if (activeTab === "todos") return true
        return discussion.category === activeTab
    })

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 mb-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-xl">
                            <Flame className="w-5 h-5 mr-2 text-gold" />
                            Discussões da Comunidade
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-gold/20">
                                <TabsTrigger value="todos" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                    Todos
                                </TabsTrigger>
                                <TabsTrigger value="populares" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                    Populares
                                </TabsTrigger>
                                <TabsTrigger value="recentes" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                    Recentes
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    {filteredDiscussions.map((discussion) => (
                        <Card key={discussion.id} className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Avatar className="h-10 w-10 mr-3">
                                        <AvatarFallback className="bg-gold/20">{discussion.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold">{discussion.author}</h3>
                                        <div className="flex items-center text-xs text-gray-400">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {discussion.date}
                                        </div>
                                    </div>
                                    <div className="ml-auto flex space-x-2">
                                        {discussion.tags.map((tag, index) => (
                                            <Badge key={index} className="bg-gold/10 text-gold border-gold/30">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-3">{discussion.title}</h2>
                                <p className="text-gray-300 mb-4">{discussion.content}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-4">
                                        <Button variant="ghost" size="sm" className="flex items-center text-gray-400 hover:text-gold">
                                            <ThumbsUp className="w-4 h-4 mr-1" />
                                            <span>{discussion.likes}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="flex items-center text-gray-400 hover:text-gold">
                                            <MessageCircle className="w-4 h-4 mr-1" />
                                            <span>{discussion.comments}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="flex items-center text-gray-400 hover:text-gold">
                                            <Share2 className="w-4 h-4 mr-1" />
                                            <span>Compartilhar</span>
                                        </Button>
                                    </div>
                                    <Button variant="outline" size="sm" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                                        Ver discussão
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 mt-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <MessageCircle className="w-5 h-5 mr-2 text-gold" />
                            Iniciar Nova Discussão
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Input
                                    placeholder="Título da discussão"
                                    className="bg-black/40 border-gold/30 focus-visible:ring-gold"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Compartilhe seus pensamentos, análises ou perguntas sobre a FURIA..."
                                    className="min-h-[120px] bg-black/40 border-gold/30 focus-visible:ring-gold"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                                        Adicionar Tag
                                    </Button>
                                    <Button variant="outline" size="sm" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                                        Anexar Mídia
                                    </Button>
                                </div>
                                <Button className="bg-gold hover:bg-gold/80 text-black">Publicar</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 mb-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <Flame className="w-5 h-5 mr-2 text-gold" />
                            Tópicos em Alta
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { tag: "Major Berlim", count: 128 },
                                { tag: "KSCERATO", count: 95 },
                                { tag: "Tática Inferno", count: 87 },
                                { tag: "Na'Vi vs FURIA", count: 76 },
                                { tag: "arT AWP", count: 64 },
                            ].map((topic, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 border rounded-lg border-gold/20 bg-black/40 hover:bg-gold/10 hover:border-gold/40 cursor-pointer transition-all"
                                >
                                    <span className="font-medium">#{topic.tag}</span>
                                    <Badge className="bg-gold/10 text-gold border-gold/30">{topic.count}</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 mb-6">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <Users className="w-5 h-5 mr-2 text-gold" />
                            Membros Ativos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { name: "FuriaFan99", posts: 42, rank: "Veterano" },
                                { name: "TaticoCS", posts: 38, rank: "Analista" },
                                { name: "BRpower", posts: 35, rank: "Moderador" },
                                { name: "CSAnalyst", posts: 29, rank: "Contribuidor" },
                                { name: "HighlightMaker", posts: 24, rank: "Criador" },
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-3 border rounded-lg border-gold/20 bg-black/40 hover:bg-gold/10 hover:border-gold/40 cursor-pointer transition-all"
                                >
                                    <Avatar className="h-8 w-8 mr-3">
                                        <AvatarFallback className="bg-gold/20">{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-medium">{member.name}</h3>
                                        <div className="flex items-center text-xs text-gray-400">
                                            <span>{member.posts} posts</span>
                                        </div>
                                    </div>
                                    <Badge className="ml-auto bg-gold/10 text-gold border-gold/30">{member.rank}</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <Calendar className="w-5 h-5 mr-2 text-gold" />
                            Próximos Eventos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { name: "FURIA Fan Meeting", date: "10 Jun 2025", type: "Presencial" },
                                { name: "Watch Party: FURIA vs Na'Vi", date: "15 Jun 2025", type: "Online" },
                                { name: "Debate: Táticas no Major", date: "20 Jun 2025", type: "Online" },
                            ].map((event, index) => (
                                <div
                                    key={index}
                                    className="p-3 border rounded-lg border-gold/20 bg-black/40 hover:bg-gold/10 hover:border-gold/40 cursor-pointer transition-all"
                                >
                                    <h3 className="font-medium">{event.name}</h3>
                                    <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {event.date}
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={`${event.type === "Online"
                                                    ? "border-blue-500/50 text-blue-500"
                                                    : "border-green-500/50 text-green-500"
                                                }`}
                                        >
                                            {event.type}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
