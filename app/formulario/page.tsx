"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Check } from "lucide-react"
import { motion } from "framer-motion"
import "@/app/globals.css";

export default function FormularioPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

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
          className="w-full max-w-2xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              <span className="gold-text">Formulário</span> do Fã
            </h1>
            <p className="text-gray-300">Responda as perguntas para descobrir seu perfil FURIOSO</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm">
              <span>Progresso</span>
              <span className="text-gold">
                {step}/{totalSteps}
              </span>
            </div>
            <Progress value={(step / totalSteps) * 100} className="h-2 bg-gray-800">
              <div
                className="h-full bg-gold transition-all"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </Progress>
          </div>

          <div className="relative">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Jogador Favorito</CardTitle>
                    <CardDescription>Quem é seu jogador favorito da FURIA?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {["KSCERATO", "yuurih", "arT", "chelo"].map((player) => (
                        <div
                          key={player}
                          className="relative overflow-hidden transition-all border rounded-xl border-gold/30 hover:border-gold group"
                        >
                          <input
                            type="radio"
                            name="player"
                            id={player}
                            className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                          />
                          <label
                            htmlFor={player}
                            className="flex flex-col items-center justify-center p-4 cursor-pointer"
                          >
                            <div className="flex items-center justify-center w-16 h-16 mb-3 overflow-hidden text-2xl bg-black rounded-full border-2 border-gold/50 group-hover:border-gold">
                              {player.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-lg font-medium group-hover:text-gold">{player}</span>
                            <div className="absolute inset-0 transition-opacity bg-gold/10 opacity-0 group-hover:opacity-100"></div>
                            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black border border-gold/50 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Check className="w-3 h-3 text-gold" />
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button
                      onClick={nextStep}
                      className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                    >
                      Próximo
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 2 && (
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Mapa Favorito</CardTitle>
                    <CardDescription>Qual seu mapa favorito do CS?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <Tabs defaultValue="popular" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-black/60 border border-gold/20">
                          <TabsTrigger
                            value="popular"
                            className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                          >
                            Populares
                          </TabsTrigger>
                          <TabsTrigger
                            value="all"
                            className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                          >
                            Todos
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="popular" className="mt-4">
                          <div className="grid grid-cols-2 gap-3">
                            {["Mirage", "Inferno", "Dust 2", "Nuke"].map((map) => (
                              <div
                                key={map}
                                className="relative overflow-hidden transition-all border rounded-lg border-gold/30 hover:border-gold group"
                              >
                                <input
                                  type="radio"
                                  name="map"
                                  id={map}
                                  className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                                />
                                <label htmlFor={map} className="flex items-center p-3 cursor-pointer">
                                  <div className="w-3 h-3 mr-3 rounded-full border border-gold/50 group-hover:bg-gold"></div>
                                  <span className="group-hover:text-gold">{map}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="all" className="mt-4">
                          <Select>
                            <SelectTrigger className="border-gold/50 focus:ring-gold">
                              <SelectValue placeholder="Selecione um mapa" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border border-gold/30">
                              <SelectItem value="mirage">Mirage</SelectItem>
                              <SelectItem value="inferno">Inferno</SelectItem>
                              <SelectItem value="dust2">Dust 2</SelectItem>
                              <SelectItem value="nuke">Nuke</SelectItem>
                              <SelectItem value="overpass">Overpass</SelectItem>
                              <SelectItem value="ancient">Ancient</SelectItem>
                              <SelectItem value="vertigo">Vertigo</SelectItem>
                              <SelectItem value="anubis">Anubis</SelectItem>
                            </SelectContent>
                          </Select>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-gold/50 hover:bg-gold/10 hover:text-gold"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                    >
                      Próximo
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 3 && (
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Meme da FURIA</CardTitle>
                    <CardDescription>Qual meme da FURIA mais representa você?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="meme">Descreva o meme</Label>
                        <Input
                          id="meme"
                          placeholder="Ex: arT correndo com a faca"
                          className="border-gold/50 focus-visible:ring-gold bg-black/60"
                        />
                      </div>

                      <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                        <h4 className="mb-2 text-sm font-medium text-gold">Sugestões populares:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="p-2 transition-colors rounded cursor-pointer hover:bg-gold/10 hover:text-gold">
                            arT correndo com a faca
                          </div>
                          <div className="p-2 transition-colors rounded cursor-pointer hover:bg-gold/10 hover:text-gold">
                            KSCERATO clutch impossível
                          </div>
                          <div className="p-2 transition-colors rounded cursor-pointer hover:bg-gold/10 hover:text-gold">
                            yuurih ace na mirage
                          </div>
                          <div className="p-2 transition-colors rounded cursor-pointer hover:bg-gold/10 hover:text-gold">
                            Reação da torcida
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-gold/50 hover:bg-gold/10 hover:text-gold"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black"
                    >
                      Próximo
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 4 && (
                <Card className="border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nível de Fanatismo</CardTitle>
                    <CardDescription>Quão fã da FURIA você é?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Slider defaultValue={[50]} max={100} step={1} className="[&>span]:bg-gold" />
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Casual</span>
                          <span>Moderado</span>
                          <span>FURIOSO</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg border-gold/20 bg-black/40">
                        <h4 className="mb-3 text-sm font-medium text-gold">O que te define como fã?</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="games"
                              className="w-4 h-4 rounded border-gold/50 text-gold focus:ring-gold"
                            />
                            <Label htmlFor="games" className="text-sm">
                              Assisto todos os jogos
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="merch"
                              className="w-4 h-4 rounded border-gold/50 text-gold focus:ring-gold"
                            />
                            <Label htmlFor="merch" className="text-sm">
                              Tenho produtos oficiais
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="social"
                              className="w-4 h-4 rounded border-gold/50 text-gold focus:ring-gold"
                            />
                            <Label htmlFor="social" className="text-sm">
                              Sigo nas redes sociais
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="events"
                              className="w-4 h-4 rounded border-gold/50 text-gold focus:ring-gold"
                            />
                            <Label htmlFor="events" className="text-sm">
                              Já fui em eventos
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-gold/50 hover:bg-gold/10 hover:text-gold"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>
                    <Link href="/perfil">
                      <Button className="px-6 py-2 font-medium transition-all border border-gold hover:bg-gold hover:text-black">
                        Finalizar
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
