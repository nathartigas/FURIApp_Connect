'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Code, Heart, Cpu, Users, Mail, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SobrePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 diagonal-lines opacity-20"></div>
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
              Sobre o <span className="gold-text">Projeto</span>
            </h1>
            <p className="text-gray-300">
              Conheça mais sobre o FURIApp Connect e como ele foi desenvolvido
            </p>
          </div>

          <Tabs defaultValue="projeto" className="w-full">
            <TabsList className="flex justify-center bg-black/60 border border-gold/20">
              <TabsTrigger value="projeto" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Heart className="w-6 h-4 mr-2" />
                O Projeto
              </TabsTrigger>
              <TabsTrigger value="equipe" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Users className="w-6 h-4 mr-2" />
                Equipe
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projeto" className="mt-6">
              <motion.div
                key="projeto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative w-48 h-48 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl"></div>
                        <Image
                          src="/furia-logo.svg"
                          alt="FURIA Logo"
                          width={200}
                          height={200}
                          className="relative animate-float"
                        />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">FURIApp Connect</h2>
                        <p className="text-gray-300">
                          O FURIApp Connect é uma aplicação web que conecta fãs da FURIA com base em seus perfis e preferências.
                          O objetivo é criar uma comunidade onde os fãs possam compartilhar sua paixão pelo time e encontrar
                          outros torcedores com interesses similares.
                        </p>
                        <p className="text-gray-300">
                          Desenvolvido com as mais modernas tecnologias web, o FURIApp Connect oferece uma experiência
                          imersiva e interativa, permitindo que os fãs criem perfis personalizados, participem de eventos,
                          acompanhem notícias e estatísticas do time, além de conectar-se com outros fãs.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 border rounded-lg border-gold/20 bg-black/40 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Comunidade</h3>
                        <p className="text-sm text-gray-400">
                          Conecte-se com outros fãs da FURIA e compartilhe sua paixão pelo time
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg border-gold/20 bg-black/40 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Personalização</h3>
                        <p className="text-sm text-gray-400">
                          Crie seu perfil único e mostre seu estilo como fã da FURIA
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg border-gold/20 bg-black/40 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                          <Cpu className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Tecnologia</h3>
                        <p className="text-sm text-gray-400">
                          Desenvolvido com as mais modernas tecnologias web para uma experiência fluida
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-gold" />
                        Visão e Missão
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Visão</h3>
                        <p className="text-gray-300">
                          Ser a principal plataforma de conexão entre fãs da FURIA, criando uma comunidade global
                          unida pela paixão pelo time e pelos esports.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Missão</h3>
                        <p className="text-gray-300">
                          Proporcionar aos fãs da FURIA uma experiência única de conexão, compartilhamento e
                          interação, fortalecendo a comunidade e aproximando os torcedores do time.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="equipe" className="mt-6">
              <motion.div
                key="equipe"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2">Desenvolvedora</h2>
                      <p className="text-gray-300 max-w-2xl mx-auto">
                        Conheça quem está por trás do FURIApp Connect — apaixonada por tecnologia e pela FURIA.
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40 text-center w-96 h-auto">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/placeholder.svg"
                            alt="Nathalia Artigas"
                            width={96}
                            height={96}
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Nathalia Artigas</h3>
                        <p className="text-sm text-gold mb-3">Desenvolvedora Full Stack</p>
                        <p className="text-sm text-gray-400 mb-4">
                          Responsável pelo desenvolvimento front-end e back-end do FURIApp Connect.
                        </p>
                        <div className="flex justify-center space-x-3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Twitter className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Github className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 border rounded-lg border-gold/20 bg-black/40 text-center">
                      <h3 className="text-xl font-bold mb-4">Gostou do Projeto?</h3>
                      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Esse projeto é uma demonstração do meu trabalho e da minha paixão por tecnologia.
                        Se você curtiu e quer conversar mais sobre o desenvolvimento ou a possibilidade de
                        colaborar, fique à vontade para me mandar uma mensagem!
                      </p>
                      <Button
                        asChild
                        className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                      >
                        <a href="mailto:nathartigasna@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Entre em contato
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
