"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Target, Laugh, MessageSquare, Search, Filter, Users, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function MatchesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  const matchCards = [
    {
      id: 1,
      name: "FuriaLover99",
      location: "São Paulo, BR",
      icon: <Flame className="w-6 h-6 text-gold" />,
      tags: ["Sniper", "Tryhard"],
      bio: "Fã da FURIA desde 2019. Nunca perco uma partida e sempre defendo o time nas redes sociais!",
      compatibility: 95,
      category: "recentes",
    },
    {
      id: 2,
      name: "CS_Panther",
      location: "Rio de Janeiro, BR",
      icon: <Target className="w-6 h-6 text-gold" />,
      tags: ["Estrategista", "Memeiro"],
      bio: "Adoro analisar as táticas da FURIA e criar memes depois das vitórias. Meu mapa favorito é Inferno!",
      compatibility: 87,
      category: "populares",
    },
    {
      id: 3,
      name: "FuriaQueen",
      location: "Belo Horizonte, BR",
      icon: <Laugh className="w-6 h-6 text-gold" />,
      tags: ["Colecionadora", "Tryhard"],
      bio: "Tenho todas as camisetas da FURIA e já fui em 3 eventos para ver o time jogar ao vivo. KSCERATO é meu ídolo!",
      compatibility: 92,
      category: "recentes",
    },
    {
      id: 4,
      name: "AWP_Master",
      location: "Curitiba, BR",
      icon: <Target className="w-6 h-6 text-gold" />,
      tags: ["Sniper", "Analista"],
      bio: "Jogo CS há 10 anos e sou fã da FURIA desde a formação. Adoro analisar as jogadas do arT e aprender com ele.",
      compatibility: 84,
      category: "populares",
    },
    {
      id: 5,
      name: "FuriaFanatic",
      location: "Brasília, BR",
      icon: <Flame className="w-6 h-6 text-gold" />,
      tags: ["Colecionador", "Memeiro"],
      bio: "Coleciono todos os itens da FURIA e crio os melhores memes depois das partidas. Dust2 é meu mapa favorito!",
      compatibility: 88,
      category: "populares",
    },
    {
      id: 6,
      name: "FURIA_Forever",
      location: "Porto Alegre, BR",
      icon: <Laugh className="w-6 h-6 text-gold" />,
      tags: ["Estrategista", "Tryhard"],
      bio: "Acompanho todas as partidas e estudo as táticas da FURIA. Já joguei com o yuurih em uma partida casual!",
      compatibility: 90,
      category: "recentes",
    },
  ]

  const filteredMatches = matchCards.filter((match) => {
    // Filter by search query
    if (
      searchQuery &&
      !match.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !match.bio.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by tab
    if (activeTab !== "todos" && match.category !== activeTab) {
      return false
    }

    return true
  })

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 diagonal-lines opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              Seus <span className="gold-text">Matches</span> FURIOSOS
            </h1>
            <p className="text-gray-300">Encontramos outros fãs com perfil similar ao seu</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar matches..."
                  className="pl-9 border-gold/30 bg-black/60 backdrop-blur-md focus-visible:ring-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>

            <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-gold/20">
                <TabsTrigger value="todos" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="recentes" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Recentes
                </TabsTrigger>
                <TabsTrigger value="populares" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Populares
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: match.id * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 hover:border-gold/50 transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-4">
                        <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden text-xl bg-black rounded-full border-2 border-gold">
                          {match.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{match.name}</h3>
                          <div className="flex items-center text-xs text-gray-400">
                            <MapPin className="w-3 h-3 mr-1" />
                            {match.location}
                          </div>
                        </div>
                        <div className="ml-auto">
                          <div className="flex flex-col items-center">
                            <span className="text-xs text-gray-400">Match</span>
                            <span className="text-lg font-bold text-gold">{match.compatibility}%</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="px-2 py-0.5 text-xs font-medium border-gold/50 bg-gold/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-300">{match.bio}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        className="w-full font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                        size="sm"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Mandar um GG
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full p-8 text-center border rounded-lg border-gold/20 bg-black/40">
                <Users className="w-12 h-12 mx-auto mb-4 text-gold/50" />
                <h3 className="mb-2 text-xl font-bold">Nenhum match encontrado</h3>
                <p className="text-gray-400">Tente ajustar seus filtros ou buscar por outros termos</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
