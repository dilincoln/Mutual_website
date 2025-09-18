"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Smartphone, Palette, Server, Printer, Monitor } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: "Desenvolvimento", icon: Code, href: "#services" },
    { name: "Apps Mobile", icon: Smartphone, href: "#services" },
    { name: "Design Gráfico", icon: Palette, href: "#services" },
    { name: "Assessoria TI", icon: Server, href: "#services" },
    { name: "Impressoras", icon: Printer, href: "#services" },
    { name: "Mídia Digital", icon: Monitor, href: "#services" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 w-[200px]">
              <Image src="/logo.png" alt="Mutual Tecnologia" width={200} height={64} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center mx-auto space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">
              Parceiros
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex w-[200px] justify-end">
            <Button asChild>
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#partners"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Parceiros
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button asChild className="w-fit">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
