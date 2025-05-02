"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, ArrowRight, Trophy, Gamepad2, Users, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NoticiasPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("todas")

  const noticias = [
    {
      id: 1,
      title: "FURIA vence torneio internacional em grande estilo",
      image: "/placeholder.svg",
      date: "02 Jun 2025",
      excerpt:
        "A equipe brasileira FURIA conquistou mais um título internacional após uma final emocionante contra a Navi.",
      category: "campeonatos",
      tags: ["Vitória", "Internacional", "CS2"],
    },
    {
      id: 2,
      title: "KSCERATO é eleito o melhor jogador do mês",
      image: "/placeholder.svg",
      date: "28 Mai 2025",
      excerpt: "O jogador brasileiro da FURIA, KSCERATO, foi eleito o melhor jogador do mês de maio pela HLTV.",
      category: "jogadores",
      tags: ["KSCERATO", "Premiação", "Destaque"],
    },
    {
      id: 3,
      title: "FURIA anuncia nova gaming house em São Paulo",
      image: "/placeholder.svg",
      date: "20 Mai 2025",
      excerpt:
        "A organização FURIA anunciou sua nova gaming house localizada em São Paulo, com estrutura de ponta para os jogadores.",
      category: "equipe",
      tags: ["Gaming House", "Estrutura", "São Paulo"],
    },
    {
      id: 4,
      title: "Próximos desafios da FURIA no Major de Berlim",
      image: "/placeholder.svg",
      date: "15 Mai 2025",
      excerpt: "Confira a análise dos próximos confrontos da FURIA no Major de Berlim e as chances de título.",
      category: "campeonatos",
      tags: ["Major", "Berlim", "Análise"],
    },
    {
      id: 5,
      title: "FURIA lança nova linha de produtos oficiais",
      image: "/placeholder.svg",
      date: "10 Mai 2025",
      excerpt:
        "A FURIA acaba de lançar sua nova linha de produtos oficiais, incluindo camisetas, moletons e acessórios.",
      category: "equipe",
      tags: ["Produtos", "Camisetas", "Lançamento"],
    },
    {
      id: 6,
      title: "arT revela estratégias em entrevista exclusiva",
      image: "/placeholder.svg",
      date: "05 Mai 2025",
      excerpt:
        "Em entrevista exclusiva, o capitão da FURIA, arT, revelou algumas das estratégias que utiliza para liderar a equipe.",
      category: "jogadores",
      tags: ["arT", "Entrevista", "Estratégias"],
    },
  ]

  const filteredNoticias = noticias.filter((noticia) => {
    // Filter by search query
    if (
      searchQuery &&
      !noticia.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !noticia.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by tab
    if (activeTab !== "todas" && noticia.category !== activeTab) {
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
              <span className="gold-text">Notícias</span> FURIA
            </h1>
            <p className="text-gray-300">Fique por dentro das últimas novidades do seu time</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar notícias..."
                className="pl-9 border-gold/30 bg-black/60 backdrop-blur-md focus-visible:ring-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs defaultValue="todas" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 bg-black/60 border border-gold/20">
                <TabsTrigger value="todas" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Todas
                </TabsTrigger>
                <TabsTrigger
                  value="campeonatos"
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                >
                  <Trophy className="w-4 h-4 mr-2 hidden sm:inline" />
                  Campeonatos
                </TabsTrigger>
                <TabsTrigger value="jogadores" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  <Gamepad2 className="w-4 h-4 mr-2 hidden sm:inline" />
                  Jogadores
                </TabsTrigger>
                <TabsTrigger value="equipe" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  <Users className="w-4 h-4 mr-2 hidden sm:inline" />
                  Equipe
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {filteredNoticias.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNoticias.map((noticia, index) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 hover:border-gold/50 transition-all h-full flex flex-col">
                    <div className="relative h-40">
                      <Image
                        src={noticia.image || "/placeholder.svg"}
                        alt={noticia.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-xs text-gray-400">
                          <Calendar className="w-3 h-3 mr-1" />
                          {noticia.date}
                        </div>
                        <Badge variant="outline" className="px-2 py-0.5 text-xs font-medium border-gold/50 bg-gold/10">
                          {noticia.category === "campeonatos" && <Trophy className="w-3 h-3 mr-1" />}
                          {noticia.category === "jogadores" && <Gamepad2 className="w-3 h-3 mr-1" />}
                          {noticia.category === "equipe" && <Users className="w-3 h-3 mr-1" />}
                          {noticia.category.charAt(0).toUpperCase() + noticia.category.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold line-clamp-2">{noticia.title}</h3>
                    </CardHeader>
                    <CardContent className="pb-4 flex-1">
                      <p className="text-sm text-gray-300 line-clamp-3">{noticia.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {noticia.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold/80">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between">
                      <Link href={`/noticias/${noticia.id}`}>
                        <Button variant="link" className="p-0 text-gold hover:text-gold/80">
                          Ler mais
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg border-gold/20 bg-black/40">
              <Search className="w-12 h-12 mx-auto mb-4 text-gold/50" />
              <h3 className="mb-2 text-xl font-bold">Nenhuma notícia encontrada</h3>
              <p className="text-gray-400">Tente ajustar sua busca ou filtros</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
