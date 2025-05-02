"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, BarChart3, Shield, Flame } from "lucide-react"
import Image from "next/image"

export function MatchAnalysis() {
    const [activeMatch, setActiveMatch] = useState("match1")

    const matches = [
        {
            id: "match1",
            opponent: "Natus Vincere",
            date: "05 Mai 2025",
            result: "16-14",
            map: "Inferno",
            win: true,
            analysis: {
                overview:
                    "Uma vitória apertada contra a Na'Vi, onde nossa defesa CT foi o diferencial. KSCERATO liderou com 25 frags e arT fez jogadas decisivas nos rounds finais.",
                strengths: [
                    "Controle do meio do mapa",
                    "Retakes eficientes no bombsite B",
                    "Economia bem gerenciada",
                    "Clutches decisivos de KSCERATO",
                ],
                weaknesses: ["Dificuldade nos pistol rounds", "Execuções no bombsite A", "Defesa do apartamentos"],
                keyMoments: [
                    {
                        round: 24,
                        description: "1v3 clutch de KSCERATO garantiu o match point",
                        impact: 95,
                    },
                    {
                        round: 18,
                        description: "Eco round vencido com apenas pistols",
                        impact: 85,
                    },
                    {
                        round: 29,
                        description: "Fake execute no B seguido de rápida rotação para A",
                        impact: 90,
                    },
                ],
                playerPerformance: [
                    { player: "KSCERATO", rating: 1.35, hs: 68, adr: 95.7 },
                    { player: "yuurih", rating: 1.22, hs: 62, adr: 85.3 },
                    { player: "arT", rating: 1.15, hs: 55, adr: 78.2 },
                    { player: "chelo", rating: 1.08, hs: 59, adr: 72.6 },
                    { player: "drop", rating: 1.02, hs: 51, adr: 68.4 },
                ],
            },
        },
        {
            id: "match2",
            opponent: "Team Liquid",
            date: "28 Abr 2025",
            result: "13-16",
            map: "Mirage",
            win: false,
            analysis: {
                overview:
                    "Uma derrota apertada contra a Liquid, onde nosso lado T não conseguiu quebrar a defesa deles no meio. yuurih teve uma performance excepcional apesar da derrota.",
                strengths: ["Controle do meio como CT", "Adaptações táticas no segundo tempo", "Duelos individuais vencidos"],
                weaknesses: ["Execuções no bombsite A", "Controle do palace", "Defesa do bombsite B", "Pistol rounds"],
                keyMoments: [
                    {
                        round: 21,
                        description: "Falha na defesa do B custou um round econômico crucial",
                        impact: 85,
                    },
                    {
                        round: 15,
                        description: "Ace de yuurih no último round do primeiro tempo",
                        impact: 95,
                    },
                    {
                        round: 26,
                        description: "Timeout tático que mudou o ritmo do jogo",
                        impact: 80,
                    },
                ],
                playerPerformance: [
                    { player: "yuurih", rating: 1.38, hs: 72, adr: 98.3 },
                    { player: "KSCERATO", rating: 1.15, hs: 65, adr: 82.7 },
                    { player: "chelo", rating: 1.05, hs: 58, adr: 75.2 },
                    { player: "arT", rating: 0.95, hs: 48, adr: 68.9 },
                    { player: "drop", rating: 0.92, hs: 52, adr: 65.4 },
                ],
            },
        },
        {
            id: "match3",
            opponent: "G2 Esports",
            date: "15 Abr 2025",
            result: "16-10",
            map: "Nuke",
            win: true,
            analysis: {
                overview:
                    "Vitória convincente contra a G2, onde nosso controle da rampa e do yard foi impecável. arT liderou com jogadas agressivas que desestabilizaram a G2.",
                strengths: ["Controle da rampa", "Rotações rápidas", "Adaptações mid-round", "Uso eficiente de utilitários"],
                weaknesses: ["Defesa do bombsite A", "Retakes no bombsite exterior"],
                keyMoments: [
                    {
                        round: 12,
                        description: "Rush agressivo de arT pelo yard quebrou a economia da G2",
                        impact: 90,
                    },
                    {
                        round: 19,
                        description: "Clutch 1v2 de KSCERATO no bombsite secreto",
                        impact: 85,
                    },
                    {
                        round: 23,
                        description: "Fake execute que confundiu completamente a defesa da G2",
                        impact: 88,
                    },
                ],
                playerPerformance: [
                    { player: "arT", rating: 1.42, hs: 58, adr: 95.8 },
                    { player: "KSCERATO", rating: 1.28, hs: 67, adr: 88.5 },
                    { player: "yuurih", rating: 1.18, hs: 63, adr: 82.3 },
                    { player: "drop", rating: 1.12, hs: 55, adr: 76.9 },
                    { player: "chelo", rating: 1.05, hs: 61, adr: 72.4 },
                ],
            },
        },
    ]

    const currentMatch = matches.find((match) => match.id === activeMatch)

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <BarChart3 className="w-5 h-5 mr-2 text-gold" />
                            Partidas Recentes
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {matches.map((match) => (
                                <Button
                                    key={match.id}
                                    variant={activeMatch === match.id ? "default" : "outline"}
                                    className={`w-full justify-start text-left ${activeMatch === match.id
                                            ? "bg-gold/20 text-gold border-gold"
                                            : "border-gold/20 hover:bg-gold/10 hover:text-gold"
                                        }`}
                                    onClick={() => setActiveMatch(match.id)}
                                >
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center w-full justify-between">
                                            <span>vs {match.opponent}</span>
                                            <Badge
                                                variant={match.win ? "default" : "destructive"}
                                                className={match.win ? "bg-green-600" : ""}
                                            >
                                                {match.result}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 mt-1">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {match.date}
                                            <MapPin className="w-3 h-3 ml-2 mr-1" />
                                            {match.map}
                                        </div>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {currentMatch && (
                <div className="md:col-span-3">
                    <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-xl">
                                    <div className="flex items-center">
                                        <Image src="/furia-logo.svg" alt="FURIA Logo" width={24} height={24} className="mr-2" />
                                        <span>FURIA</span>
                                    </div>
                                    <span className="mx-2 text-gold">vs</span>
                                    <span>{currentMatch.opponent}</span>
                                </CardTitle>
                                <Badge
                                    variant={currentMatch.win ? "default" : "destructive"}
                                    className={currentMatch.win ? "bg-green-600" : ""}
                                >
                                    {currentMatch.result}
                                </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                                <Calendar className="w-4 h-4 mr-1" />
                                {currentMatch.date}
                                <MapPin className="w-4 h-4 ml-3 mr-1" />
                                {currentMatch.map}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="overview">
                                <TabsList className="bg-black/60 border border-gold/20 mb-4">
                                    <TabsTrigger
                                        value="overview"
                                        className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                                    >
                                        Visão Geral
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="key-moments"
                                        className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                                    >
                                        Momentos-Chave
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="performance"
                                        className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                                    >
                                        Performance
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview">
                                    <div className="space-y-4">
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <h3 className="text-lg font-medium mb-2">Análise da Partida</h3>
                                            <p className="text-gray-300">{currentMatch.analysis.overview}</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <h3 className="text-lg font-medium mb-2 flex items-center">
                                                    <Flame className="w-4 h-4 mr-2 text-green-500" />
                                                    Pontos Fortes
                                                </h3>
                                                <ul className="space-y-2">
                                                    {currentMatch.analysis.strengths.map((strength, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                                                            <span className="text-gray-300">{strength}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <h3 className="text-lg font-medium mb-2 flex items-center">
                                                    <Shield className="w-4 h-4 mr-2 text-red-500" />
                                                    Pontos Fracos
                                                </h3>
                                                <ul className="space-y-2">
                                                    {currentMatch.analysis.weaknesses.map((weakness, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></div>
                                                            <span className="text-gray-300">{weakness}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="key-moments">
                                    <div className="space-y-4">
                                        {currentMatch.analysis.keyMoments.map((moment, index) => (
                                            <div key={index} className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-medium flex items-center">
                                                        <Badge className="mr-2 bg-gold text-black">Round {moment.round}</Badge>
                                                        {moment.description}
                                                    </h3>
                                                    <span className="text-sm text-gold">{moment.impact}% impacto</span>
                                                </div>
                                                <Progress value={moment.impact} className="h-2 bg-gray-800 [&>div]:bg-gold" />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="performance">
                                    <div className="space-y-4">
                                        {currentMatch.analysis.playerPerformance.map((player, index) => (
                                            <div key={index} className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="font-medium text-lg">{player.player}</h3>
                                                    <Badge className="bg-gold text-black">Rating {player.rating}</Badge>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs text-gray-400">ADR</span>
                                                            <span className="text-xs font-medium">{player.adr}</span>
                                                        </div>
                                                        <Progress
                                                            value={(player.adr / 100) * 100}
                                                            className="h-2 bg-gray-800 bg-gold"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs text-gray-400">HS%</span>
                                                            <span className="text-xs font-medium">{player.hs}%</span>
                                                        </div>
                                                        <Progress value={player.hs} className="h-2 bg-gray-800">
                                                            <div className="h-2 bg-gold" style={{ width: `${player.hs}%` }} />
                                                        </Progress>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}

