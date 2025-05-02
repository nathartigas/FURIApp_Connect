"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ShoppingCart, Star, Filter, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LojaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("todos")

  const produtos = [
    {
      id: 1,
      name: "Camisa Oficial FURIA 2025",
      image: "/placeholder.svg",
      price: 299.9,
      rating: 4.8,
      category: "camisetas",
      tags: ["Oficial", "2025", "Preto"],
      bestseller: true,
    },
    {
      id: 2,
      name: "Moletom FURIA Esports",
      image: "/placeholder.svg",
      price: 349.9,
      rating: 4.7,
      category: "moletons",
      tags: ["Moletom", "Preto", "Logo"],
      bestseller: true,
    },
    {
      id: 3,
      name: "Boné FURIA Snapback",
      image: "/placeholder.svg",
      price: 129.9,
      rating: 4.5,
      category: "acessorios",
      tags: ["Boné", "Ajustável", "Preto"],
      bestseller: false,
    },
    {
      id: 4,
      name: "Mousepad FURIA XL",
      image: "/placeholder.svg",
      price: 149.9,
      rating: 4.9,
      category: "acessorios",
      tags: ["Mousepad", "XL", "Gaming"],
      bestseller: true,
    },
    {
      id: 5,
      name: "Camisa Casual FURIA",
      image: "/placeholder.svg",
      price: 199.9,
      rating: 4.6,
      category: "camisetas",
      tags: ["Casual", "Preta", "Logo"],
      bestseller: false,
    },
    {
      id: 6,
      name: "Jaqueta FURIA Windbreaker",
      image: "/placeholder.svg",
      price: 399.9,
      rating: 4.8,
      category: "moletons",
      tags: ["Jaqueta", "Impermeável", "Preta"],
      bestseller: false,
    },
    {
      id: 7,
      name: "Caneca FURIA 500ml",
      image: "/placeholder.svg",
      price: 79.9,
      rating: 4.7,
      category: "acessorios",
      tags: ["Caneca", "Cerâmica", "Logo"],
      bestseller: false,
    },
    {
      id: 8,
      name: "Máscara FURIA",
      image: "/placeholder.svg",
      price: 49.9,
      rating: 4.5,
      category: "acessorios",
      tags: ["Máscara", "Preta", "Logo"],
      bestseller: false,
    },
    {
      id: 9,
      name: "Bermuda FURIA Esports",
      image: "/placeholder.svg",
      price: 179.9,
      rating: 4.6,
      category: "roupas",
      tags: ["Bermuda", "Preta", "Conforto"],
      bestseller: false,
    },
  ]

  const filteredProdutos = produtos.filter((produto) => {
    // Filter by search query
    if (searchQuery && !produto.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Filter by tab
    if (activeTab !== "todos" && produto.category !== activeTab) {
      return false
    }

    return true
  })

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 filter blur-[100px]"></div>
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
              <span className="gold-text">Loja</span> FURIA
            </h1>
            <p className="text-gray-300">Produtos oficiais para os verdadeiros fãs</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar produtos..."
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
              <TabsList className="grid w-full grid-cols-5 bg-black/60 border border-gold/20">
                <TabsTrigger value="todos" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="camisetas" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Camisetas
                </TabsTrigger>
                <TabsTrigger value="moletons" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Moletons
                </TabsTrigger>
                <TabsTrigger
                  value="acessorios"
                  className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold"
                >
                  Acessórios
                </TabsTrigger>
                <TabsTrigger value="roupas" className="data-[state=active]:bg-gold/20 data-[state=active]:text-gold">
                  Outras Roupas
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {filteredProdutos.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProdutos.map((produto, index) => (
                <motion.div
                  key={produto.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg bg-black/60 backdrop-blur-md border-gold/30 hover:border-gold/50 transition-all h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={produto.image || "/placeholder.svg"}
                        alt={produto.name}
                        fill
                        className="object-contain p-4"
                      />
                      {produto.bestseller && (
                        <Badge className="absolute top-2 right-2 bg-gold text-black border-0">Mais Vendido</Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="px-2 py-0.5 text-xs font-medium border-gold/50 bg-gold/10">
                          {produto.category}
                        </Badge>
                        <div className="flex items-center text-xs">
                          <Star className="w-3 h-3 mr-1 text-gold" />
                          {produto.rating}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold line-clamp-2">{produto.name}</h3>
                    </CardHeader>
                    <CardContent className="pb-4 flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {produto.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center">
                      <div className="text-xl font-bold text-gold">R$ {produto.price.toFixed(2)}</div>
                      <Button className="transition-all border border-gold hover:bg-gold hover:text-black">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg border-gold/20 bg-black/40">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gold/50" />
              <h3 className="mb-2 text-xl font-bold">Nenhum produto encontrado</h3>
              <p className="text-gray-400">Tente ajustar sua busca ou filtros</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
