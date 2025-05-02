"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Trophy,
  Users,
  Target,
  ArrowUp,
  ArrowDown,
  Crosshair,
  Flame,
  Shield,
  Swords,
  Map,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EstatisticasPage() {
  const [activeTab, setActiveTab] = useState("jogadores")

  const jogadores = [
    {
      id: 1,
      name: "KSCERATO",
      role: "Rifler",
      image: "/placeholder.svg",
      stats: {
        rating: 1.24,
        kd: 1.35,
        hs: 58.2,
        adr: 85.7,
        kpr: 0.78,
      },
      trend: "up",
    },
    {
      id: 2,
      name: "yuurih",
      role: "Rifler",
      image: "/placeholder.svg",
      stats: {
        rating: 1.19,
        kd: 1.28,
        hs: 62.1,
        adr: 82.3,
        kpr: 0.75,
      },
      trend: "stable",
    },
    {
      id: 3,
      name: "arT",
      role: "AWPer / IGL",
      image: "/placeholder.svg",
      stats: {
        rating: 1.05,
        kd: 1.12,
        hs: 45.8,
        adr: 75.2,
        kpr: 0.68,
      },
      trend: "up",
    },
    {
      id: 4,
      name: "chelo",
      role: "Rifler",
      image: "/placeholder.svg",
      stats: {
        rating: 1.15,
        kd: 1.22,
        hs: 55.7,
        adr: 79.8,
        kpr: 0.72,
      },
      trend: "down",
    },
    {
      id: 5,
      name: "drop",
      role: "Support",
      image: "/placeholder.svg",
      stats: {
        rating: 1.08,
        kd: 1.15,
        hs: 53.4,
        adr: 74.6,
        kpr: 0.65,
      },
      trend: "stable",
    },
  ]

  const mapas = [
    {
      id: 1,
      name: "Mirage",
      image: "/placeholder.svg",
      winRate: 68,
      totalMatches: 25,
      ctWinRate: 72,
      tWinRate: 64,
      bestPlayer: "KSCERATO",
    },
    {
      id: 2,
      name: "Inferno",
      image: "/placeholder.svg",
      winRate: 72,
      totalMatches: 32,
      ctWinRate: 75,
      tWinRate: 69,
      bestPlayer: "yuurih",
    },
    {
      id: 3,
      name: "Nuke",
      image: "/placeholder.svg",
      winRate: 65,
      totalMatches: 20,
      ctWinRate: 78,
      tWinRate: 52,
      bestPlayer: "arT",
    },
    {
      id: 4,
      name: "Dust 2",
      image: "/placeholder.svg",
      winRate: 58,
      totalMatches: 24,
      ctWinRate: 62,
      tWinRate: 54,
      bestPlayer: "chelo",
    },
    {
      id: 5,
      name: "Overpass",
      image: "/placeholder.svg",
      winRate: 70,
      totalMatches: 18,
      ctWinRate: 74,
      tWinRate: 66,
      bestPlayer: "KSCERATO",
    },
    {
      id: 6,
      name: "Ancient",
      image: "/placeholder.svg",
      winRate: 62,
      totalMatches: 16,
      ctWinRate: 68,
      tWinRate: 56,
      bestPlayer: "drop",
    },
  ]

  const torneios = [
    {
      id: 1,
      name: "Major de Berlim 2025",
      date: "Jul 2025",
      placement: "2º lugar",
      prize: "$250,000",
      status: "upcoming",
    },
    {
      id: 2,
      name: "ESL Pro League Season 21",
      date: "Mai 2025",
      placement: "1º lugar",
      prize: "$200,000",
      status: "completed",
    },
    {
      id: 3,
      name: "BLAST Premier Spring Finals",
      date: "Abr 2025",
      placement: "3-4º lugar",
      prize: "$40,000",
      status: "completed",
    },
    {
      id: 4,
      name: "IEM Katowice 2025",
      date: "Fev 2025",
      placement: "5-6º lugar",
      prize: "$20,000",
      status: "completed",
    },
    {
      id: 5,
      name: "BLAST Premier World Final",
      date: "Dez 2024",
      placement: "1º lugar",
      prize: "$500,000",
      status: "completed",
    },
  ]

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
              <span className="gold-text">Estatísticas</span> FURIA
            </h1>
            <p className="text-gray-300">Dados e números do seu time favorito</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-gold" />
                  Ranking Mundial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-gold">#3</span>
                  <Badge
                    variant="outline"
                    className="flex items-center border-green-500/50 bg-green-500/10 text-green-500"
                  >
                    <ArrowUp className="w-3 h-3 mr-1" />
                    +2
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Flame className="w-5 h-5 mr-2 text-gold" />
                  Sequência Atual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-gold">7W</span>
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold mr-1">
                      W
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold mr-1">
                      W
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold mr-1">
                      W
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold mr-1">
                      W
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
                      W
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2 text-gold" />
                  Win Rate 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-gold">68%</span>
                  <Badge
                    variant="outline"
                    className="flex items-center border-green-500/50 bg-green-500/10 text-green-500"
                  >
                    <ArrowUp className="w-3 h-3 mr-1" />
                    +5%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="jogadores" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-gold/20">
              <TabsTrigger value="jogadores" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Users className="w-4 h-4 mr-2" />
                Jogadores
              </TabsTrigger>
              <TabsTrigger value="mapas" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Map className="w-4 h-4 mr-2" />
                Mapas
              </TabsTrigger>
              <TabsTrigger value="torneios" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Trophy className="w-4 h-4 mr-2" />
                Torneios
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jogadores" className="mt-6">
              <motion.div
                key="jogadores"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {jogadores.map((jogador) => (
                    <Card key={jogador.id} className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                      <CardHeader className="pb-2">
                        <div className="flex items-center space-x-4">
                          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-gold">
                            <Image
                              src={jogador.image || "/placeholder.svg"}
                              alt={jogador.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{jogador.name}</CardTitle>
                            <p className="text-xs text-gray-400">{jogador.role}</p>
                          </div>
                          {jogador.trend === "up" && (
                            <Badge
                              variant="outline"
                              className="ml-auto flex items-center border-green-500/50 bg-green-500/10 text-green-500"
                            >
                              <ArrowUp className="w-3 h-3 mr-1" />
                              Em alta
                            </Badge>
                          )}
                          {jogador.trend === "down" && (
                            <Badge
                              variant="outline"
                              className="ml-auto flex items-center border-red-500/50 bg-red-500/10 text-red-500"
                            >
                              <ArrowDown className="w-3 h-3 mr-1" />
                              Em baixa
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-lg bg-black/40">
                            <div className="flex items-center justify-center mb-1">
                              <Target className="w-3 h-3 mr-1 text-gold" />
                              <span className="text-xs text-gray-400">Rating</span>
                            </div>
                            <p className="text-lg font-bold">{jogador.stats.rating}</p>
                          </div>
                          <div className="p-2 rounded-lg bg-black/40">
                            <div className="flex items-center justify-center mb-1">
                              <Swords className="w-3 h-3 mr-1 text-gold" />
                              <span className="text-xs text-gray-400">K/D</span>
                            </div>
                            <p className="text-lg font-bold">{jogador.stats.kd}</p>
                          </div>
                          <div className="p-2 rounded-lg bg-black/40">
                            <div className="flex items-center justify-center mb-1">
                              <Crosshair className="w-3 h-3 mr-1 text-gold" />
                              <span className="text-xs text-gray-400">HS%</span>
                            </div>
                            <p className="text-lg font-bold">{jogador.stats.hs}%</p>
                          </div>
                          <div className="p-2 rounded-lg bg-black/40 col-span-3/2">
                            <div className="flex items-center justify-center mb-1">
                              <Shield className="w-3 h-3 mr-1 text-gold" />
                              <span className="text-xs text-gray-400">ADR</span>
                            </div>
                            <p className="text-lg font-bold">{jogador.stats.adr}</p>
                          </div>
                          <div className="p-2 rounded-lg bg-black/40 col-span-3/2">
                            <div className="flex items-center justify-center mb-1">
                              <Flame className="w-3 h-3 mr-1 text-gold" />
                              <span className="text-xs text-gray-400">KPR</span>
                            </div>
                            <p className="text-lg font-bold">{jogador.stats.kpr}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="mapas" className="mt-6">
              <motion.div
                key="mapas"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mapas.map((mapa) => (
                    <Card key={mapa.id} className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                      <div className="relative h-32">
                        <Image
                          src={mapa.image || "/placeholder.svg"}
                          alt={mapa.name}
                          fill
                          className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <h3 className="text-xl font-bold">{mapa.name}</h3>
                        </div>
                      </div>
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-400">Win Rate</span>
                              <span className="text-xs font-medium">{mapa.winRate}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gold" style={{ width: `${mapa.winRate}%` }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-400">Partidas</span>
                              <span className="text-xs font-medium">{mapa.totalMatches}</span>
                            </div>
                            <div className="flex items-center justify-center p-1 rounded bg-black/40">
                              <span className="text-sm font-medium">{mapa.totalMatches}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-400">CT Win</span>
                              <span className="text-xs font-medium">{mapa.ctWinRate}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: `${mapa.ctWinRate}%` }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-400">T Win</span>
                              <span className="text-xs font-medium">{mapa.tWinRate}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500" style={{ width: `${mapa.tWinRate}%` }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gold/20">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">Melhor Jogador</span>
                            <span className="text-sm font-medium text-gold">{mapa.bestPlayer}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="torneios" className="mt-6">
              <motion.div
                key="torneios"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden border rounded-lg border-gold/30 bg-black/60 backdrop-blur-md">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gold/20">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gold">Torneio</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gold">Data</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gold">Colocação</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gold">Premiação</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gold/10">
                        {torneios.map((torneio) => (
                          <tr key={torneio.id} className="hover:bg-gold/5">
                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">{torneio.name}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gold" />
                                {torneio.date}
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{torneio.placement}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">{torneio.prize}</td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              {torneio.status === "upcoming" ? (
                                <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">Próximo</Badge>
                              ) : (
                                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Concluído</Badge>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-gold" />
                        Títulos em 2025
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-gold mb-2">3</div>
                          <div className="text-sm text-gray-400">Campeonatos</div>
                        </div>
                        <div className="h-16 w-px bg-gold/20 mx-8"></div>
                        <div className="text-center">
                          <div className="text-5xl font-bold text-gold mb-2">$750k</div>
                          <div className="text-sm text-gray-400">Em premiações</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-gold" />
                        Desempenho em Torneios
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-400">Top 1</span>
                            <span className="text-xs font-medium">35%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gold" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-400">Top 3</span>
                            <span className="text-xs font-medium">65%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gold" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-400">Top 5</span>
                            <span className="text-xs font-medium">85%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gold" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
