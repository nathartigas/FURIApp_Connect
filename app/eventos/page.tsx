"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users, CalendarDays, CalendarCheck, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EventosPage() {
  const [activeTab, setActiveTab] = useState("proximos")

  const eventos = [
    {
      id: 1,
      title: "FURIA Fan Meeting",
      image: "/placeholder.svg",
      date: "10 Jun 2025",
      time: "14:00 - 18:00",
      location: "São Paulo, SP",
      description: "Encontro oficial de fãs da FURIA com presença dos jogadores para sessão de autógrafos e fotos.",
      attendees: 120,
      category: "proximos",
      featured: true,
    },
    {
      id: 2,
      title: "Watch Party - FURIA vs Liquid",
      image: "/placeholder.svg",
      date: "15 Jun 2025",
      time: "19:30 - 23:00",
      location: "Rio de Janeiro, RJ",
      description: "Assista ao vivo a partida da FURIA contra a Team Liquid com outros fãs em um ambiente especial.",
      attendees: 85,
      category: "proximos",
    },
    {
      id: 3,
      title: "Workshop Tático com arT",
      image: "/placeholder.svg",
      date: "22 Jun 2025",
      time: "15:00 - 17:30",
      location: "Online",
      description:
        "Workshop online exclusivo com arT ensinando táticas e estratégias usadas pela FURIA nos campeonatos.",
      attendees: 250,
      category: "proximos",
    },
    {
      id: 4,
      title: "FURIA Experience Day",
      image: "/placeholder.svg",
      date: "05 Mai 2025",
      time: "10:00 - 18:00",
      location: "São Paulo, SP",
      description: "Um dia inteiro de experiências com a FURIA, incluindo tour pelo gaming house, jogos e muito mais.",
      attendees: 75,
      category: "passados",
    },
    {
      id: 5,
      title: "Torneio Amador FURIA",
      image: "/placeholder.svg",
      date: "20 Abr 2025",
      time: "09:00 - 20:00",
      location: "Belo Horizonte, MG",
      description: "Torneio amador organizado pela FURIA para descobrir novos talentos e aproximar a comunidade.",
      attendees: 180,
      category: "passados",
    },
    {
      id: 6,
      title: "Lançamento Nova Camisa",
      image: "/placeholder.svg",
      date: "10 Abr 2025",
      time: "19:00 - 21:00",
      location: "Online",
      description: "Evento online de lançamento da nova camisa oficial da FURIA para a temporada 2025.",
      attendees: 320,
      category: "passados",
    },
  ]

  const filteredEventos = eventos.filter((evento) => evento.category === activeTab)

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
          className="w-full max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="gold-text">Eventos</span> FURIA
            </h1>
            <p className="text-gray-300">Participe de eventos exclusivos e conheça outros fãs</p>
          </div>

          {eventos.filter((e) => e.featured).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <Card className="overflow-hidden border-0 shadow-xl bg-black/60 backdrop-blur-md">
                <div className="relative h-48 md:h-64">
                  <Image src="/placeholder.svg" alt="Evento em destaque" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-gold text-black border-0">Em Destaque</Badge>
                </div>
                <CardContent className="relative -mt-20 p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">FURIA Fan Meeting</h2>
                    <p className="text-gray-300">
                      Encontro oficial de fãs da FURIA com presença dos jogadores para sessão de autógrafos e fotos.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-gold" />
                      <span className="text-sm">10 Jun 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-gold" />
                      <span className="text-sm">14:00 - 18:00</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-gold" />
                      <span className="text-sm">São Paulo, SP</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-gold" />
                      <span className="text-sm">120 participantes</span>
                    </div>
                    <Button className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black">
                      Participar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <div className="mb-8">
            <Tabs defaultValue="proximos" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 bg-black/60 border border-gold/20">
                <TabsTrigger value="proximos" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  Próximos Eventos
                </TabsTrigger>
                <TabsTrigger value="passados" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Eventos Passados
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEventos.map((evento, index) => (
              <motion.div
                key={evento.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 hover:border-gold/50 transition-all h-full flex flex-col">
                  <div className="relative h-40">
                    <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{evento.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 flex-1">
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-gold" />
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-gold" />
                        <span>{evento.time}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <MapPin className="w-4 h-4 mr-1 text-gold" />
                        <span>{evento.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-3">{evento.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    {activeTab === "proximos" ? (
                      <Button
                        className="w-full font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                        size="sm"
                      >
                        Participar
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full font-medium border-gold/50 hover:bg-gold/10 hover:text-gold"
                        size="sm"
                      >
                        <Star className="w-4 h-4 mr-2" />
                        Ver Fotos
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
