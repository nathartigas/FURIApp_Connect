"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ChevronRight,
  Users,
  Calendar,
  Trophy,
  Star,
  Download,
  ArrowRight,
  Mail,
  Instagram,
  Twitter,
  FlashlightOff,
  Gem,
} from "lucide-react"
import { Flame } from "lucide-react"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl"></div>
            <Image
              src="/furia-logo.svg"
              alt="FURIA Logo"
              width={150}
              height={150}
              className="relative mx-auto animate-float"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="gold-text">FURI</span>App Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 text-xl text-gray-300 md:text-2xl"
          >
            Descubra sua alma gêmea <span className="gold-text font-bold">FURIOSA</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/formulario">
              <Button className="px-8 py-7 text-lg font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black animate-pulse-gold">
                Começar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3"
          >
            <div className="p-6 transition-all rounded-xl bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40">
              <Flame className="w-10 h-10 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold">Encontre Fãs</h3>
              <p className="text-gray-400">Conecte-se com outros fãs da FURIA que compartilham suas paixões</p>
            </div>

            <div className="p-6 transition-all rounded-xl bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40">
              <Image src="/furia-logo.svg" alt="FURIA Logo" width={40} height={40} className="mb-4" />
              <h3 className="mb-2 text-xl font-bold">Eventos Exclusivos</h3>
              <p className="text-gray-400">Acesse informações sobre eventos e encontros da comunidade FURIA</p>
            </div>

            <div className="p-6 transition-all rounded-xl bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40">
            <Gem className="w-10 h-10 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-bold">Conteúdo Premium</h3>
              <p className="text-gray-400">Desfrute de conteúdo exclusivo e interações com outros fãs</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <Link href="/noticias" className="inline-flex items-center text-gold hover:underline">
              <span>Ver últimas notícias</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Section: Sobre a FURIA */}
      <section className="relative z-20 py-24 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-8 gold-text"
          >
            Sobre a FURIA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg mb-12"
          >
            A FURIA é uma organização brasileira de esports que transcende o jogo. Somos uma família, uma comunidade e
            uma força imparável no cenário global.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <Card className="w-full max-w-sm bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Comunidade Engajada</h3>
                <p className="text-gray-400 text-center">
                  Milhares de fãs apaixonados que apoiam a FURIA em cada partida.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full max-w-sm bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Eventos e Encontros</h3>
                <p className="text-gray-400 text-center">
                  Participe de eventos exclusivos e encontre outros membros da comunidade.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full max-w-sm bg-black/60 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Conquistas e Vitórias</h3>
                <p className="text-gray-400 text-center">
                  Celebre nossas conquistas e vitórias nos maiores campeonatos de esports.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section: Funcionalidades */}
      <section className="relative z-20 py-24 bg-black">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-8 text-center gold-text"
          >
            Funcionalidades
          </motion.h2>

          <Tabs defaultValue="comunidade" className="w-full max-w-3xl mx-auto">
            <TabsList className="bg-black/60 backdrop-blur-md border border-gold/20 rounded-md">
              <TabsTrigger value="comunidade" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Comunidade
              </TabsTrigger>
              <TabsTrigger value="eventos" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Eventos
              </TabsTrigger>
              <TabsTrigger value="conteudo" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Conteúdo
              </TabsTrigger>
            </TabsList>
            <TabsContent value="comunidade" className="mt-6">
              <Card className="bg-black/60 backdrop-blur-md border border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-bold">Conecte-se com outros Fãs</h3>
                  </div>
                  <p className="text-gray-400">
                    Encontre outros fãs da FURIA, compartilhe suas experiências e faça novos amigos.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="eventos" className="mt-6">
              <Card className="bg-black/60 backdrop-blur-md border border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Calendar className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-bold">Fique por dentro dos Eventos</h3>
                  </div>
                  <p className="text-gray-400">
                    Acesse informações sobre os próximos eventos, encontros e campeonatos da FURIA.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="conteudo" className="mt-6">
              <Card className="bg-black/60 backdrop-blur-md border border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Star className="w-6 h-6 text-gold" />
                    <h3 className="text-xl font-bold">Conteúdo Exclusivo</h3>
                  </div>
                  <p className="text-gray-400">
                    Desfrute de conteúdo exclusivo, entrevistas com jogadores e bastidores da FURIA.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section: Perguntas Frequentes */}
      <section className="relative z-20 py-24 bg-black">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-8 text-center gold-text"
          >
            Perguntas Frequentes
          </motion.h2>
      
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem className="border-b border-gold/20" value="faq-1">
              <AccordionTrigger className="py-4 font-bold text-left hover:no-underline">
                Como faço para me conectar com outros fãs da FURIA?
              </AccordionTrigger>
              <AccordionContent className="py-2 text-sm text-gold">
                Você pode se conectar com outros fãs da FURIA através da nossa comunidade online, eventos e encontros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-gold/20" value="faq-2">
              <AccordionTrigger className="py-4 font-bold text-left hover:no-underline">
                Como posso participar de eventos exclusivos da FURIA?
              </AccordionTrigger>
              <AccordionContent className="py-2 text-sm text-gold">
                Fique de olho na nossa página de eventos e nas redes sociais para saber mais sobre os próximos eventos
                exclusivos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-gold/20" value="faq-3">
              <AccordionTrigger className="py-4 font-bold text-left hover:no-underline">
                Onde posso encontrar conteúdo exclusivo sobre a FURIA?
              </AccordionTrigger>
              <AccordionContent className="py-2 text-sm text-gold">
                Você pode encontrar conteúdo exclusivo na nossa seção de conteúdo premium e nas nossas redes sociais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section: Download App */}
      <section className="relative z-20 py-24 bg-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-8 gold-text"
          >
            Baixe o App
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg mb-12"
          >
            Aproveite ao máximo a comunidade FURIA baixando nosso app exclusivo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="px-8 py-7 text-lg font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black animate-pulse-gold">
              Download
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-12 bg-black border-t border-gold/20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-gray-500">&copy; 2024 FURIApp Connect. Todos os direitos reservados.</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gold transition">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
