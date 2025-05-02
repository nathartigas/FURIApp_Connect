"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Crosshair, Shield, Flame, Swords, Award, Trophy } from "lucide-react"
import Image from "next/image"

export function PlayerStats() {
    const [activePlayer, setActivePlayer] = useState("kscerato")

    const players = [
        {
            id: "kscerato",
            name: "KSCERATO",
            role: "Rifler",
            image: "/placeholder.svg?height=200&width=200",
            stats: {
                rating: 1.24,
                kd: 1.35,
                hs: 58.2,
                adr: 85.7,
                kpr: 0.78,
                impact: 1.32,
                clutches: 65,
                openingKills: 0.14,
                utilityDamage: 7.2,
            },
            weapons: [
                { name: "AK-47", kills: 1245, hsPercent: 62, accuracy: 28 },
                { name: "M4A1-S", kills: 985, hsPercent: 58, accuracy: 32 },
                { name: "Desert Eagle", kills: 342, hsPercent: 72, accuracy: 38 },
                { name: "AWP", kills: 156, hsPercent: 0, accuracy: 45 },
            ],
            maps: [
                { name: "Inferno", rating: 1.32, winRate: 68 },
                { name: "Mirage", rating: 1.28, winRate: 72 },
                { name: "Nuke", rating: 1.18, winRate: 65 },
                { name: "Dust 2", rating: 1.22, winRate: 58 },
                { name: "Overpass", rating: 1.3, winRate: 70 },
            ],
            achievements: [
                "MVP da ESL Pro League Season 21",
                "Top 5 jogadores de 2024 pela HLTV",
                "Melhor rating em clutches 1v2 em 2024",
                "Maior número de HS em um Major (2023)",
            ],
        },
        {
            id: "yuurih",
            name: "yuurih",
            role: "Rifler",
            image: "/placeholder.svg?height=200&width=200",
            stats: {
                rating: 1.19,
                kd: 1.28,
                hs: 62.1,
                adr: 82.3,
                kpr: 0.75,
                impact: 1.28,
                clutches: 58,
                openingKills: 0.12,
                utilityDamage: 8.5,
            },
            weapons: [
                { name: "AK-47", kills: 1185, hsPercent: 65, accuracy: 30 },
                { name: "M4A1-S", kills: 945, hsPercent: 62, accuracy: 34 },
                { name: "Desert Eagle", kills: 315, hsPercent: 75, accuracy: 40 },
                { name: "AWP", kills: 98, hsPercent: 0, accuracy: 42 },
            ],
            maps: [
                { name: "Inferno", rating: 1.25, winRate: 65 },
                { name: "Mirage", rating: 1.32, winRate: 75 },
                { name: "Nuke", rating: 1.15, winRate: 62 },
                { name: "Dust 2", rating: 1.18, winRate: 55 },
                { name: "Overpass", rating: 1.22, winRate: 68 },
            ],
            achievements: [
                "MVP da BLAST Premier Spring Finals 2024",
                "Top 10 jogadores de 2024 pela HLTV",
                "Maior número de kills em uma única partida (42 vs Liquid)",
                "Maior ADR em um Major (95.8)",
            ],
        },
        {
            id: "art",
            name: "arT",
            role: "AWPer / IGL",
            image: "/placeholder.svg?height=200&width=200",
            stats: {
                rating: 1.05,
                kd: 1.12,
                hs: 45.8,
                adr: 75.2,
                kpr: 0.68,
                impact: 1.35,
                clutches: 42,
                openingKills: 0.18,
                utilityDamage: 9.8,
            },
            weapons: [
                { name: "AWP", kills: 1485, hsPercent: 0, accuracy: 48 },
                { name: "AK-47", kills: 685, hsPercent: 52, accuracy: 25 },
                { name: "M4A1-S", kills: 545, hsPercent: 48, accuracy: 28 },
                { name: "Desert Eagle", kills: 295, hsPercent: 68, accuracy: 35 },
            ],
            maps: [
                { name: "Inferno", rating: 1.08, winRate: 62 },
                { name: "Mirage", rating: 1.12, winRate: 68 },
                { name: "Nuke", rating: 1.22, winRate: 72 },
                { name: "Dust 2", rating: 1.05, winRate: 58 },
                { name: "Overpass", rating: 1.15, winRate: 65 },
            ],
            achievements: [
                "Melhor IGL da América do Sul em 2024",
                "Maior número de opening kills em 2023",
                "Jogador mais agressivo segundo estatísticas da HLTV",
                "Capitão com maior número de vitórias em 2024",
            ],
        },
        {
            id: "chelo",
            name: "chelo",
            role: "Rifler",
            image: "/placeholder.svg?height=200&width=200",
            stats: {
                rating: 1.15,
                kd: 1.22,
                hs: 55.7,
                adr: 79.8,
                kpr: 0.72,
                impact: 1.18,
                clutches: 52,
                openingKills: 0.11,
                utilityDamage: 6.8,
            },
            weapons: [
                { name: "AK-47", kills: 1125, hsPercent: 58, accuracy: 27 },
                { name: "M4A1-S", kills: 895, hsPercent: 54, accuracy: 30 },
                { name: "Desert Eagle", kills: 285, hsPercent: 70, accuracy: 36 },
                { name: "AWP", kills: 125, hsPercent: 0, accuracy: 40 },
            ],
            maps: [
                { name: "Inferno", rating: 1.18, winRate: 65 },
                { name: "Mirage", rating: 1.22, winRate: 70 },
                { name: "Nuke", rating: 1.1, winRate: 60 },
                { name: "Dust 2", rating: 1.25, winRate: 68 },
                { name: "Overpass", rating: 1.12, winRate: 62 },
            ],
            achievements: [
                "Melhor performance em Dust 2 em 2024",
                "Top 20 jogadores da América do Sul",
                "Maior sequência de rounds com pelo menos 1 kill (8)",
                "Melhor jogador da FURIA em pistol rounds",
            ],
        },
        {
            id: "drop",
            name: "drop",
            role: "Support",
            image: "/placeholder.svg?height=200&width=200",
            stats: {
                rating: 1.08,
                kd: 1.15,
                hs: 53.4,
                adr: 74.6,
                kpr: 0.65,
                impact: 1.12,
                clutches: 48,
                openingKills: 0.09,
                utilityDamage: 10.2,
            },
            weapons: [
                { name: "AK-47", kills: 985, hsPercent: 55, accuracy: 26 },
                { name: "M4A1-S", kills: 875, hsPercent: 52, accuracy: 29 },
                { name: "Desert Eagle", kills: 245, hsPercent: 65, accuracy: 32 },
                { name: "AWP", kills: 85, hsPercent: 0, accuracy: 38 },
            ],
            maps: [
                { name: "Inferno", rating: 1.12, winRate: 64 },
                { name: "Mirage", rating: 1.05, winRate: 62 },
                { name: "Nuke", rating: 1.15, winRate: 68 },
                { name: "Dust 2", rating: 1.02, winRate: 55 },
                { name: "Overpass", rating: 1.18, winRate: 70 },
            ],
            achievements: [
                "Maior utility damage por round em 2024",
                "Melhor jogador de suporte da América do Sul",
                "Maior número de assists em um Major",
                "Melhor taxa de flash assists em 2023",
            ],
        },
    ]

    const currentPlayer = players.find((player) => player.id === activePlayer)

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                            <Target className="w-5 h-5 mr-2 text-gold" />
                            Jogadores
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {players.map((player) => (
                                <div
                                    key={player.id}
                                    className={`p-3 rounded-lg cursor-pointer transition-all ${activePlayer === player.id
                                            ? "bg-gold/20 border border-gold"
                                            : "bg-black/40 border border-gold/20 hover:bg-gold/10 hover:border-gold/40"
                                        }`}
                                    onClick={() => setActivePlayer(player.id)}
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center overflow-hidden mr-3">
                                            <Image
                                                src={player.image || "/placeholder.svg"}
                                                alt={player.name}
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{player.name}</h3>
                                            <p className="text-xs text-gray-400">{player.role}</p>
                                        </div>
                                        <Badge className="ml-auto bg-gold/10 text-gold border-gold/30">{player.stats.rating}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {currentPlayer && (
                <div className="md:col-span-3">
                    <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                        <CardHeader className="pb-2">
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center overflow-hidden mr-4">
                                    <Image
                                        src={currentPlayer.image || "/placeholder.svg"}
                                        alt={currentPlayer.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">{currentPlayer.name}</CardTitle>
                                    <p className="text-gray-400">{currentPlayer.role}</p>
                                </div>
                                <Badge className="ml-auto text-lg bg-gold text-black px-3 py-1">
                                    Rating {currentPlayer.stats.rating}
                                </Badge>
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
                                    <TabsTrigger value="weapons" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                        Armas
                                    </TabsTrigger>
                                    <TabsTrigger value="maps" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                        Mapas
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="achievements"
                                        className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                                    >
                                        Conquistas
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Swords className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">K/D Ratio</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.kd}</p>
                                        </div>
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Crosshair className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">Headshot %</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.hs}%</p>
                                        </div>
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Shield className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">ADR</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.adr}</p>
                                        </div>
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Flame className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">Impact</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.impact}</p>
                                        </div>
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Target className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">Clutches</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.clutches}%</p>
                                        </div>
                                        <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                            <div className="flex items-center mb-2">
                                                <Award className="w-5 h-5 mr-2 text-gold" />
                                                <h3 className="font-medium">Opening Kills</h3>
                                            </div>
                                            <p className="text-2xl font-bold">{currentPlayer.stats.openingKills}</p>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="weapons">
                                    <div className="space-y-4">
                                        {currentPlayer.weapons.map((weapon, index) => (
                                            <div key={index} className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="font-medium text-lg">{weapon.name}</h3>
                                                    <Badge className="bg-gold/10 text-gold border-gold/30">{weapon.kills} kills</Badge>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs text-gray-400">HS%</span>
                                                            <span className="text-xs font-medium">{weapon.hsPercent}%</span>
                                                        </div>
                                                        <Progress
                                                            value={weapon.hsPercent}
                                                            className="h-2 bg-gray-800 [&>div]:bg-gold"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs text-gray-400">Precisão</span>
                                                            <span className="text-xs font-medium">{weapon.accuracy}%</span>
                                                        </div>
                                                        <Progress
                                                            value={weapon.accuracy}
                                                            className="h-2 bg-gray-800 [&>div]:bg-gold"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="maps">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentPlayer.maps.map((map, index) => (
                                            <div key={index} className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="font-medium text-lg">{map.name}</h3>
                                                    <Badge className="bg-gold/10 text-gold border-gold/30">Rating {map.rating}</Badge>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs text-gray-400">Win Rate</span>
                                                        <span className="text-xs font-medium">{map.winRate}%</span>
                                                    </div>
                                                    <Progress value={map.winRate} className="h-2 bg-gray-800 [&>div]:bg-gold" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="achievements">
                                    <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                                        <h3 className="text-lg font-medium mb-4 flex items-center">
                                            <Trophy className="w-5 h-5 mr-2 text-gold" />
                                            Conquistas e Destaques
                                        </h3>
                                        <ul className="space-y-3">
                                            {currentPlayer.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                                                    <span className="text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
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
