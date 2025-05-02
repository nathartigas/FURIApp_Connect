"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useAccessibility } from "@/components/accessibility-provider"
// Temporarily replacing with a mock implementation
const useAccessibility = () => ({ t: (key: string) => key });
import { FuriaAIChat } from "@/components/furia-ai-chat"
import { MatchAnalysis } from "@/components/match-analysis"
import { PlayerStats } from "@/components/player-stats"
import { CommunityDiscussion } from "@/components/community-discussion"
import { MessageSquare, BarChart3, Users, Brain, ChevronRight, Calendar, Trophy, Target, Flame } from "lucide-react"
import Image from "next/image"

export default function ComunidadeCSPage() {
    const { t } = useAccessibility()
    const [activeTab, setActiveTab] = useState("ia-assistant")

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 grid-pattern opacity-20"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
            </div>

            <div className="relative z-10 container flex flex-col items-center justify-center px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <div className="mb-8 text-center">
                        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
                            <span className="gold-text">Comunidade CS</span> FURIA
                        </h1>
                        <p className="text-gray-300">
                            Conecte-se com outros fãs, obtenha análises de IA e discuta sobre o time de CS da FURIA
                        </p>
                    </div>

                    <Tabs defaultValue="ia-assistant" className="w-full" onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-4 bg-black/60 border border-gold/20">
                            <TabsTrigger
                                value="ia-assistant"
                                className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                            >
                                <Brain className="w-4 h-4 mr-2" />
                                Assistente IA
                            </TabsTrigger>
                            <TabsTrigger value="analises" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                <BarChart3 className="w-4 h-4 mr-2" />
                                Análises
                            </TabsTrigger>
                            <TabsTrigger
                                value="estatisticas"
                                className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                            >
                                <Target className="w-4 h-4 mr-2" />
                                Estatísticas
                            </TabsTrigger>
                            <TabsTrigger value="discussoes" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                                <Users className="w-4 h-4 mr-2" />
                                Discussões
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="ia-assistant" className="mt-6">
                            <motion.div
                                key="ia-assistant"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="md:col-span-2">
                                        <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 h-full">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="flex items-center text-xl">
                                                    <Brain className="w-5 h-5 mr-2 text-gold" />
                                                    Assistente FURIA IA
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="h-[600px] flex flex-col">
                                                <FuriaAIChat />
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div>
                                        <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 mb-6">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="flex items-center text-lg">
                                                    <Flame className="w-5 h-5 mr-2 text-gold" />
                                                    Próximos Jogos
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-4">
                                                    {[
                                                        { opponent: "Natus Vincere", date: "15 Jun 2025", time: "15:00", event: "ESL Pro League" },
                                                        { opponent: "Team Liquid", date: "18 Jun 2025", time: "18:30", event: "BLAST Premier" },
                                                        { opponent: "G2 Esports", date: "22 Jun 2025", time: "14:00", event: "Major Qualifier" },
                                                    ].map((match, index) => (
                                                        <div key={index} className="p-3 border rounded-lg border-gold/20 bg-black/40">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="flex items-center">
                                                                    <Image
                                                                        src="/furia-logo.svg"
                                                                        alt="FURIA Logo"
                                                                        width={24}
                                                                        height={24}
                                                                        className="mr-2"
                                                                    />
                                                                    <span className="font-bold">FURIA</span>
                                                                </div>
                                                                <span className="text-xs text-gold">vs</span>
                                                                <span>{match.opponent}</span>
                                                            </div>
                                                            <div className="flex items-center justify-between text-xs text-gray-400">
                                                                <div className="flex items-center">
                                                                    <Calendar className="w-3 h-3 mr-1" />
                                                                    {match.date}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Trophy className="w-3 h-3 mr-1" />
                                                                    {match.event}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="flex items-center text-lg">
                                                    <MessageSquare className="w-5 h-5 mr-2 text-gold" />
                                                    Perguntas Populares
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    {[
                                                        "Qual é o melhor mapa da FURIA?",
                                                        "Quais são as estatísticas do KSCERATO?",
                                                        "Quando é o próximo Major?",
                                                        "Qual a melhor formação da FURIA?",
                                                        "Quais as chances da FURIA no próximo torneio?",
                                                    ].map((question, index) => (
                                                        <Button
                                                            key={index}
                                                            variant="outline"
                                                            className="w-full justify-start text-left border-gold/20 hover:bg-gold/10 hover:text-gold"
                                                        >
                                                            <ChevronRight className="w-4 h-4 mr-2 text-gold" />
                                                            {question}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="analises" className="mt-6">
                            <motion.div
                                key="analises"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MatchAnalysis />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="estatisticas" className="mt-6">
                            <motion.div
                                key="estatisticas"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PlayerStats />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="discussoes" className="mt-6">
                            <motion.div
                                key="discussoes"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CommunityDiscussion />
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    )
}
