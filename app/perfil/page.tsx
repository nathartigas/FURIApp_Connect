"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Target, Laugh, ChevronRight, Trophy, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("perfil")

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              Seu <span className="gold-text">Perfil</span> FURIOSO
            </h1>
            <p className="text-gray-300">Baseado nas suas respostas, este é seu perfil de fã</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl bg-black/60 backdrop-blur-md">
            <div className="h-32 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 relative">
              <div className="absolute inset-0 diagonal-lines opacity-30"></div>
            </div>

            <CardHeader className="relative pb-0">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden text-5xl bg-black rounded-full border-4 border-gold">
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-gold/20"></div>
                  <Flame className="relative z-10 w-16 h-16 text-gold" />
                </div>
              </div>

              <div className="pt-20 text-center">
                <CardTitle className="text-3xl font-bold">FuriaFan_BR</CardTitle>
                <div className="flex items-center justify-center mt-2 space-x-2 text-sm text-gray-400">
                  <span>Membro desde 2023</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-gold" />
                    <span>Nível Ouro</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <Tabs defaultValue="perfil" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-gold/20">
                  <TabsTrigger value="perfil" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                    Perfil
                  </TabsTrigger>
                  <TabsTrigger
                    value="estatisticas"
                    className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                  >
                    Estatísticas
                  </TabsTrigger>
                  <TabsTrigger
                    value="conquistas"
                    className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                  >
                    Conquistas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="perfil" className="mt-6">
                  <motion.div
                    key="perfil"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-gold/50 bg-gold/10">
                        <Target className="w-3 h-3 mr-1" />
                        Sniper
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-gold/50 bg-gold/10">
                        <Flame className="w-3 h-3 mr-1" />
                        Tryhard
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 text-sm font-medium border-gold/50 bg-gold/10">
                        <Laugh className="w-3 h-3 mr-1" />
                        Memeiro
                      </Badge>
                    </div>

                    <div className="p-5 text-sm border rounded-lg border-gold/20 bg-black/40">
                      <p>
                        Você é um fã apaixonado que não perde uma partida da FURIA. Seu conhecimento sobre táticas é
                        impressionante e você sempre defende o time nas redes sociais. Você provavelmente tem pelo menos
                        3 camisetas do time e sonha em conhecer os jogadores pessoalmente.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-semibold gold-text text-center">Compatibilidade</h3>
                      <div className="flex justify-center gap-1">
                        <div className="w-8 h-2 rounded-full bg-gold"></div>
                        <div className="w-8 h-2 rounded-full bg-gold"></div>
                        <div className="w-8 h-2 rounded-full bg-gold"></div>
                        <div className="w-8 h-2 rounded-full bg-gold/50"></div>
                        <div className="w-8 h-2 rounded-full bg-gold/30"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <h4 className="mb-2 text-sm font-medium text-gold">Jogador Favorito</h4>
                        <p className="text-lg">KSCERATO</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <h4 className="mb-2 text-sm font-medium text-gold">Mapa Favorito</h4>
                        <p className="text-lg">Inferno</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="mb-4 text-xl font-bold">Pronto para conhecer outros como você?</h3>
                      <Link href="/matches">
                        <Button className="px-6 py-2 font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black">
                          Ver matches
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="estatisticas" className="mt-6">
                  <motion.div
                    key="estatisticas"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <Users className="w-6 h-6 mx-auto mb-2 text-gold" />
                        <h4 className="mb-1 text-sm font-medium text-gold">Matches</h4>
                        <p className="text-2xl font-bold">24</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-gold" />
                        <h4 className="mb-1 text-sm font-medium text-gold">Eventos</h4>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <Trophy className="w-6 h-6 mx-auto mb-2 text-gold" />
                        <h4 className="mb-1 text-sm font-medium text-gold">Conquistas</h4>
                        <p className="text-2xl font-bold">7</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <Flame className="w-6 h-6 mx-auto mb-2 text-gold" />
                        <h4 className="mb-1 text-sm font-medium text-gold">Nível de Fã</h4>
                        <p className="text-2xl font-bold">85%</p>
                      </div>
                    </div>

                    <div className="p-5 border rounded-lg border-gold/20 bg-black/40">
                      <h4 className="mb-3 text-sm font-medium text-gold">Atividade Recente</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-2 h-2 mr-3 rounded-full bg-gold"></div>
                            <span className="text-sm">Match com FuriaLover99</span>
                          </div>
                          <span className="text-xs text-gray-400">2 dias atrás</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-2 h-2 mr-3 rounded-full bg-gold"></div>
                            <span className="text-sm">Participou do evento online</span>
                          </div>
                          <span className="text-xs text-gray-400">1 semana atrás</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-2 h-2 mr-3 rounded-full bg-gold"></div>
                            <span className="text-sm">Atualizou o perfil</span>
                          </div>
                          <span className="text-xs text-gray-400">2 semanas atrás</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="conquistas" className="mt-6">
                  <motion.div
                    key="conquistas"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gold/20">
                          <Trophy className="w-6 h-6 text-gold" />
                        </div>
                        <h4 className="mb-1 text-sm font-medium">Fã Dedicado</h4>
                        <p className="text-xs text-gray-400">Completou o perfil</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gold/20">
                          <Users className="w-6 h-6 text-gold" />
                        </div>
                        <h4 className="mb-1 text-sm font-medium">Sociável</h4>
                        <p className="text-xs text-gray-400">Fez 10+ matches</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gold/20">
                          <Calendar className="w-6 h-6 text-gold" />
                        </div>
                        <h4 className="mb-1 text-sm font-medium">Participativo</h4>
                        <p className="text-xs text-gray-400">Participou de um evento</p>
                      </div>
                      <div className="p-4 text-center border rounded-lg border-gold/20 bg-black/40 opacity-50">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gold/10">
                          <Flame className="w-6 h-6 text-gold/50" />
                        </div>
                        <h4 className="mb-1 text-sm font-medium">Super Fã</h4>
                        <p className="text-xs text-gray-400">Bloqueado</p>
                      </div>
                    </div>

                    <div className="p-5 border rounded-lg border-gold/20 bg-black/40">
                      <h4 className="mb-3 text-sm font-medium text-gold">Próximas Conquistas</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Colecionador</span>
                            <span className="text-xs text-gold">2/3</span>
                          </div>
                          <div className="w-full h-2 overflow-hidden bg-gray-800 rounded-full">
                            <div className="h-full bg-gold" style={{ width: "66%" }}></div>
                          </div>
                          <p className="mt-1 text-xs text-gray-400">Adquira 3 itens da loja</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm">Estrategista</span>
                            <span className="text-xs text-gold">4/5</span>
                          </div>
                          <div className="w-full h-2 overflow-hidden bg-gray-800 rounded-full">
                            <div className="h-full bg-gold" style={{ width: "80%" }}></div>
                          </div>
                          <p className="mt-1 text-xs text-gray-400">Participe de 5 discussões táticas</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
