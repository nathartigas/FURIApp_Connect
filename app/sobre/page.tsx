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
            <TabsList className="grid w-full grid-cols-3 bg-black/60 border border-gold/20">
              <TabsTrigger value="projeto" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Heart className="w-4 h-4 mr-2" />
                O Projeto
              </TabsTrigger>
              <TabsTrigger value="equipe" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Users className="w-4 h-4 mr-2" />
                Equipe
              </TabsTrigger>
              <TabsTrigger value="tecnologias" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                <Code className="w-4 h-4 mr-2" />
                Tecnologias
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
                      <h2 className="text-2xl font-bold mb-2">Nossa Equipe</h2>
                      <p className="text-gray-300 max-w-2xl mx-auto">
                        Conheça as pessoas por trás do FURIApp Connect, apaixonadas por tecnologia e pela FURIA.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40 text-center">
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
                      
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
                          <Image 
                            src="/placeholder.svg" 
                            alt="Carlos Silva" 
                            width={96} 
                            height={96} 
                            className="object-cover" 
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Carlos Silva</h3>
                        <p className="text-sm text-gold mb-3">UI/UX Designer</p>
                        <p className="text-sm text-gray-400 mb-4">
                          Responsável pelo design de interface e experiência do usuário.
                        </p>
                        <div className="flex justify-center space-x-3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Twitter className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Instagram className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
                          <Image 
                            src="/placeholder.svg" 
                            alt="Rafael Mendes" 
                            width={96} 
                            height={96} 
                            className="object-cover" 
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Rafael Mendes</h3>
                        <p className="text-sm text-gold mb-3">Product Manager</p>
                        <p className="text-sm text-gray-400 mb-4">
                          Responsável pela gestão do produto e estratégia de desenvolvimento.
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
                      <h3 className="text-xl font-bold mb-4">Quer fazer parte da equipe?</h3>
                      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Estamos sempre em busca de talentos apaixonados por tecnologia e pela FURIA.
                        Se você quer fazer parte deste projeto incrível, entre em contato conosco!
                      </p>
                      <Button className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black">
                        <Mail className="w-4 h-4 mr-2" />
                        Entre em contato
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="tecnologias" className="mt-6">
              <motion.div
                key="tecnologias"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2">Stack Tecnológica</h2>
                      <p className="text-gray-300 max-w-2xl mx-auto">
                        O FURIApp Connect foi desenvolvido com as mais modernas tecnologias web,
                        garantindo performance, escalabilidade e uma experiência de usuário excepcional.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-gold" />
                          Front-end
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-blue-500 text-white border-0">React</Badge>
                            <span className="text-sm">Framework JavaScript</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-black text-white border-0">Next.js</Badge>
                            <span className="text-sm">Framework React</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-cyan-500 text-white border-0">Tailwind</Badge>
                            <span className="text-sm">Framework CSS</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-purple-500 text-white border-0">Framer</Badge>
                            <span className="text-sm">Animações</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-blue-600 text-white border-0">TypeScript</Badge>
                            <span className="text-sm">Linguagem</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-gray-700 text-white border-0">shadcn/ui</Badge>
                            <span className="text-sm">Componentes</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 border rounded-lg border-gold/20 bg-black/40">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Cpu className="w-5 h-5 mr-2 text-gold" />
                          Back-end
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-green-600 text-white border-0">Node.js</Badge>
                            <span className="text-sm">Runtime JavaScript</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-orange-500 text-white border-0">Supabase</Badge>
                            <span className="text-sm">Banco de Dados</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-red-500 text-white border-0">Redis</Badge>
                            <span className="text-sm">Cache</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-purple-700 text-white border-0">GraphQL</Badge>
                            <span className="text-sm">API</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-blue-700 text-white border-0">Auth.js</Badge>
                            <span className="text-sm">Autenticação</span>
                          </div>
                          <div className="flex items-center p-3 rounded-lg bg-black/40">
                            <Badge className="mr-3 bg-gray-600 text-white border-0">Vercel</Badge>
                            <span className="text-sm">Hospedagem</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 border rounded-lg border-gold/20 bg-black/40">
                    </div>
                      <h3 className="text-xl font-bold mb-4">Recursos e Ferramentas</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-gold">Desenvolvimento</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Git e GitHub para controle de versão</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>ESLint e Prettier para padronização de código</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Jest e React Testing Library para testes</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>CI/CD com GitHub Actions</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-gold">Design</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Figma para prototipagem e design</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Lucide React para ícones</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Space Grotesk e Inter como fontes principais</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gold mr-2"></div>
                              <span>Paleta de cores: preto, dourado e branco</span>
                            </li>
                          </ul>
                        \/div
                      </div>
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
