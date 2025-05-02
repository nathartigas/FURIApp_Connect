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
  CheckCircle2,
  Download,
  ArrowRight,
  Mail,
  Instagram,
  Twitter,
  Heart,
} from "lucide-react"

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

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between w-full px-6 py-6 md:px-12">
        <div className="flex items-center">
          <Image src="/furia-logo.svg" alt="FURIA Logo" width={40} height={40} className="mr-3" />
          <span className="text-xl font-bold gold-text">FURIApp Connect</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#recursos" className="text-sm text-gray-300 hover:text-gold">
            Recursos
          </Link>
          <Link href="#depoimentos" className="text-sm text-gray-300 hover:text-gold">
            Depoimentos
          </Link>
          <Link href="#faq" className="text-sm text-gray-300 hover:text-gold">
            FAQ
          </Link>
          <Link href="#contato" className="text-sm text-gray-300 hover:text-gold">
            Contato
          </Link>
          <Link href="/">
            <Button className="px-4 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black">
              Acessar App
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div className="w-full mb-10 text-center md:text-left md:w-1/2 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              >
                Conecte-se com outros <span className="gold-text">fãs da FURIA</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8 text-lg text-gray-300 md:text-xl"
              >
                O FURIApp Connect é a plataforma definitiva para fãs da FURIA se conectarem, compartilharem experiências
                e encontrarem sua alma gêmea FURIOSA.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4"
              >
                <Link href="/">
                  <Button className="w-full px-8 py-6 text-lg font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black animate-pulse-gold md:w-auto">
                    Começar agora
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#recursos">
                  <Button
                    variant="outline"
                    className="w-full px-8 py-6 text-lg font-bold transition-all border-2 border-gold/50 hover:border-gold hover:bg-gold/10 md:w-auto"
                  >
                    Saiba mais
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center justify-center mt-8 md:justify-start"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 overflow-hidden border-2 rounded-full border-gold/50 bg-black/60">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4 text-sm text-gray-300">
                  <span className="font-bold text-gold">1,000+</span> fãs já conectados
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full md:w-5/12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-xl"></div>
                <div className="relative overflow-hidden border-2 rounded-3xl border-gold/30 bg-black/60 backdrop-blur-md">
                  <div className="p-4">
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      alt="FURIApp Connect App Screenshot"
                      width={300}
                      height={600}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24">
                  <Image src="/furia-logo.svg" alt="FURIA Logo" width={96} height={96} className="animate-float" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="relative z-10 px-6 py-20 md:px-12 bg-black/60">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Recursos <span className="gold-text">Exclusivos</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Descubra tudo o que o FURIApp Connect tem a oferecer para os verdadeiros fãs da FURIA.
            </p>
          </div>

          <Tabs defaultValue="perfil" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/60 border border-gold/20">
              <TabsTrigger value="perfil" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Users className="w-4 h-4 mr-2" />
                Perfil
              </TabsTrigger>
              <TabsTrigger value="matches" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Heart className="w-4 h-4 mr-2" />
                Matches
              </TabsTrigger>
              <TabsTrigger value="eventos" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Calendar className="w-4 h-4 mr-2" />
                Eventos
              </TabsTrigger>
              <TabsTrigger
                value="estatisticas"
                className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Estatísticas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="perfil" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Crie seu perfil personalizado</h3>
                  <p className="mb-6 text-gray-300">
                    Mostre seu estilo único como fã da FURIA. Personalize seu perfil com suas preferências, jogadores
                    favoritos e momentos inesquecíveis.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Escolha seu jogador favorito",
                      "Compartilhe seus memes preferidos",
                      "Exiba seu nível de fanatismo",
                      "Ganhe badges exclusivas",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg"></div>
                  <div className="relative overflow-hidden border rounded-xl border-gold/30 bg-black/60 backdrop-blur-md">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Perfil Screenshot"
                      width={500}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="matches" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Encontre outros fãs</h3>
                  <p className="mb-6 text-gray-300">
                    Conecte-se com outros fãs da FURIA que compartilham suas paixões e interesses. Nosso algoritmo
                    encontra as melhores compatibilidades para você.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Matches baseados em compatibilidade",
                      "Chat privado com outros fãs",
                      "Organize encontros para assistir jogos",
                      "Crie grupos de discussão",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg"></div>
                  <div className="relative overflow-hidden border rounded-xl border-gold/30 bg-black/60 backdrop-blur-md">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Matches Screenshot"
                      width={500}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eventos" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Participe de eventos exclusivos</h3>
                  <p className="mb-6 text-gray-300">
                    Fique por dentro de todos os eventos da FURIA e participe de encontros exclusivos com outros fãs.
                    Nunca perca uma oportunidade de viver a experiência FURIA.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Calendário de eventos oficiais",
                      "Encontros organizados pela comunidade",
                      "Notificações de novos eventos",
                      "Check-in e compartilhamento de fotos",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg"></div>
                  <div className="relative overflow-hidden border rounded-xl border-gold/30 bg-black/60 backdrop-blur-md">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Eventos Screenshot"
                      width={500}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estatisticas" className="mt-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Acompanhe estatísticas em tempo real</h3>
                  <p className="mb-6 text-gray-300">
                    Tenha acesso a estatísticas detalhadas dos jogadores e da equipe FURIA. Acompanhe o desempenho em
                    tempo real e nunca perca uma informação importante.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Estatísticas detalhadas dos jogadores",
                      "Histórico de partidas e resultados",
                      "Análises de desempenho por mapa",
                      "Ranking e comparações",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg"></div>
                  <div className="relative overflow-hidden border rounded-xl border-gold/30 bg-black/60 backdrop-blur-md">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Estatísticas Screenshot"
                      width={500}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="relative z-10 px-6 py-20 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              O que os <span className="gold-text">fãs</span> estão dizendo
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Veja o que outros fãs da FURIA estão falando sobre sua experiência com o FURIApp Connect.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Carlos Silva",
                location: "São Paulo, SP",
                rating: 5,
                text: "Graças ao FURIApp Connect, conheci outros fãs da FURIA e agora assistimos todos os jogos juntos. A melhor comunidade que já participei!",
              },
              {
                name: "Ana Oliveira",
                location: "Rio de Janeiro, RJ",
                rating: 5,
                text: "Finalmente um app que entende a paixão dos fãs! Já participei de 3 eventos que descobri pelo FURIApp e conheci pessoas incríveis.",
                featured: true,
              },
              {
                name: "Rafael Mendes",
                location: "Belo Horizonte, MG",
                rating: 4,
                text: "As estatísticas em tempo real são fantásticas! Consigo acompanhar tudo sobre a FURIA e ainda discutir com outros fãs. Recomendo demais!",
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className={`border-0 shadow-lg ${
                  testimonial.featured
                    ? "bg-gold/10 backdrop-blur-md border-gold/50"
                    : "bg-black/60 backdrop-blur-md border-gold/30"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 overflow-hidden border-2 rounded-full border-gold/50 bg-black/60">
                      <Image
                        src={`/placeholder.svg?height=48&width=48`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-gold" : "text-gray-600"}`}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                  </div>
                  <p className="text-gray-300">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative z-10 px-6 py-20 md:px-12 bg-black/60">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-8 text-center rounded-2xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Pronto para se <span className="gold-text">conectar</span>?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              Junte-se a milhares de fãs da FURIA e comece a viver experiências incríveis. O FURIApp Connect é gratuito
              e está disponível para todos os dispositivos.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <Button className="px-8 py-6 text-lg font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black">
                <Download className="w-5 h-5 mr-2" />
                Download para Android
              </Button>
              <Button className="px-8 py-6 text-lg font-bold transition-all border-2 border-gold hover:bg-gold hover:text-black">
                <Download className="w-5 h-5 mr-2" />
                Download para iOS
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg font-bold transition-all border-2 border-gold/50 hover:border-gold hover:bg-gold/10"
                >
                  Acessar versão web
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 px-6 py-20 md:px-12">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Perguntas <span className="gold-text">Frequentes</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Encontre respostas para as perguntas mais comuns sobre o FURIApp Connect.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "O FURIApp Connect é gratuito?",
                answer:
                  "Sim, o FURIApp Connect é totalmente gratuito para todos os fãs da FURIA. Você pode criar seu perfil, conectar-se com outros fãs e acessar todas as funcionalidades básicas sem nenhum custo.",
              },
              {
                question: "Como funciona o sistema de matches?",
                answer:
                  "Nosso algoritmo analisa seu perfil, preferências e interações para encontrar outros fãs com interesses similares. Quanto mais você utiliza o app, mais precisos serão seus matches.",
              },
              {
                question: "Posso organizar eventos pelo FURIApp Connect?",
                answer:
                  "Sim! Além de participar de eventos oficiais da FURIA, você pode criar e organizar seus próprios eventos para assistir jogos, discutir estratégias ou simplesmente se encontrar com outros fãs.",
              },
              {
                question: "As estatísticas são atualizadas em tempo real?",
                answer:
                  "Sim, todas as estatísticas são atualizadas em tempo real durante as partidas. Você pode acompanhar o desempenho dos jogadores, resultados e rankings enquanto assiste aos jogos.",
              },
              {
                question: "Existe algum plano premium ou assinatura?",
                answer:
                  "Atualmente, todas as funcionalidades principais são gratuitas. No futuro, poderemos oferecer recursos premium adicionais, mas o acesso básico ao app sempre será gratuito para todos os fãs.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gold/20">
                <AccordionTrigger className="text-left hover:text-gold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative z-10 px-6 py-20 md:px-12 bg-black/60">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Entre em <span className="gold-text">Contato</span>
              </h2>
              <p className="mb-6 text-gray-300">
                Tem alguma dúvida, sugestão ou feedback? Estamos sempre à disposição para ajudar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gold" />
                  <span>contato@furiappconnect.com</span>
                </div>
                <div className="flex items-center">
                  <Twitter className="w-5 h-5 mr-3 text-gold" />
                  <span>@FURIAppConnect</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-3 text-gold" />
                  <span>@furiappconnect</span>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-xl border-gold/30 bg-black/60 backdrop-blur-md">
              <h3 className="mb-4 text-xl font-bold">Envie uma mensagem</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black/60 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black/60 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-black/60 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-black/60 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  />
                </div>
                <Button className="w-full px-4 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black">
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 md:px-12 border-t border-gold/20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/furia-logo.svg" alt="FURIA Logo" width={30} height={30} className="mr-2" />
                <span className="text-lg font-bold gold-text">FURIApp Connect</span>
              </div>
              <p className="text-sm text-gray-400">
                A plataforma definitiva para fãs da FURIA se conectarem e compartilharem experiências.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#recursos" className="hover:text-gold">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="hover:text-gold">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-gold">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-gold">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-gold">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gold">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gold">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gold">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gold">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 text-sm text-center text-gray-400 border-t border-gold/10">
            <p>&copy; {new Date().getFullYear()} FURIApp Connect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
