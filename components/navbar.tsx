"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
// Primeiro, adicione o import para o ícone Brain
import { Home, User, Users, Info, Menu, X, ShoppingBag, Calendar, Newspaper, BarChart3, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
  icon: React.ReactNode
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Depois, adicione o novo item de navegação na array navItems
  const navItems: NavItem[] = [
    { name: "Início", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Formulário", href: "/formulario", icon: <User className="w-5 h-5" /> },
    { name: "Perfil", href: "/perfil", icon: <User className="w-5 h-5" /> },
    { name: "Matches", href: "/matches", icon: <Users className="w-5 h-5" /> },
    { name: "Eventos", href: "/eventos", icon: <Calendar className="w-5 h-5" /> },
    { name: "Notícias", href: "/noticias", icon: <Newspaper className="w-5 h-5" /> },
    { name: "Loja", href: "/loja", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Estatísticas", href: "/estatisticas", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Comunidade", href: "/comunidade-cs", icon: <Brain className="w-5 h-5" /> },
    { name: "Sobre", href: "/sobre", icon: <Info className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div
          className={cn(
            "flex items-center justify-around h-16 px-2 backdrop-blur-lg border-t transition-all duration-300",
            isScrolled ? "border-gold/30 bg-black/80" : "border-gold/10 bg-black/60",
          )}
        >
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xs transition-colors",
                pathname === item.href ? "text-gold" : "text-gray-400 hover:text-gold",
              )}
            >
              {item.icon}
              <span className="mt-1">{item.name}</span>
            </Link>
          ))}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gold">
                <Menu className="w-5 h-5" />
                <span className="mt-1 text-xs">Mais</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[70vh] rounded-t-3xl bg-black border-gold/20">
              <div className="flex items-center justify-between mb-8 mt-2">
                <div className="flex items-center">
                  <Image src="/furia-logo.svg" alt="FURIA Logo" width={30} height={30} className="mr-2" />
                  <span className="text-xl font-bold gold-text">FURIApp Connect</span>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                </Sheet>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl transition-all",
                      pathname === item.href
                        ? "bg-gold/10 text-gold border border-gold/30"
                        : "hover:bg-gold/5 text-gray-300 border border-transparent",
                    )}
                  >
                    {item.icon}
                    <span className="mt-2 text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300",
          isScrolled ? "h-16 backdrop-blur-lg bg-black/80 border-b border-gold/30" : "h-20 bg-transparent",
        )}
      >
        <div className="container flex items-center justify-between h-full px-2 mx-auto">
          <Link href="/" className="flex items-center space-x-1">
            <div
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                isScrolled ? "w-8 h-8" : "w-10 h-10",
              )}
            >
              <Image src="/furia-logo.svg" alt="FURIA Logo" fill className="object-contain" />
            </div>
            <span
              className={cn(
                "font-bold gold-text transition-all duration-300 whitespace-nowrap",
                isScrolled ? "text-lg" : "text-xl"
              )}
            >
              FURIApp Connect
            </span>
          </Link>

          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors flex items-center",
                  pathname === item.href ? "text-gold bg-gold/10" : "text-gray-300 hover:text-gold hover:bg-gold/5",
                )}
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
