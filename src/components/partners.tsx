"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Meteors } from "./ui/meteors"
import { useLayoutEffect, useRef } from "react"

const partners = [
  { name: "Renovar Engenharia" },
  { name: "Franchi & Franchi Advogados" },
  { name: "EducarInvest" },
  { name: "VOKSE Investimentos" },
  { name: "Aeropark" },
  { name: "Padokinha" },
  { name: "PLAN Empreendimentos" },
  { name: "Bistro 19" },
  { name: "ACRI" },
  { name: "Plural Empreendimentos" },
  { name: "Sui Restaurante" },
  { name: "Plural Box" },
  { name: "Plural Mídias" },
  { name: "iNorte" },
  { name: "Armazém Convention" },
]

export function Partners() {
  const partnersContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (partnersContainerRef.current) {
      document.documentElement.style.setProperty(
        "--meteor-container-height",
        `-${partnersContainerRef.current.clientHeight * 2}px`
      )
    }
  }, [])

  return (
    <section
      ref={partnersContainerRef}
      id="partners"
      className="py-20 bg-foreground relative overflow-hidden w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-background text-balance">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-background text-pretty max-w-3xl mx-auto">
            Empresas que confiam em nossas soluções para impulsionar seus
            negócios.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group transition-all flex items-center justify-center h-36 duration-300 border-border/50 bg-transparent backdrop-blur-3xl"
            >
              <CardContent className="h-full hover:h-36 transition-all duration-300">
                <img
                  src={`/customer${index + 1}.png` || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-background">
            Quer fazer parte desta lista?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>

      <Meteors number={50} />
    </section>
  )
}
