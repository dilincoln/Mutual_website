"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
                }}
              >
                <Zap className="w-4 h-4 mr-2" />
                Mais de 50 clientes satisfeitos
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Soluções em{" "}
                <span
                  className="font-bold"
                  style={{
                    background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tecnologia
                </span>{" "}
                para o seu negócio
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Desenvolvimento de aplicativos, websites e assessoria completa em TI. Transformamos suas
                ideias em soluções digitais inovadoras.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
                  }}
                >
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Desenvolvimento de Sistemas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
                  }}
                >
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">Suporte Técnico Especializado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="border-0 text-white shadow-lg hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
                }}
              >
                <a href="#services" className="group text-white">
                  Nossos Serviços
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 text-[#e8482c] hover:text-white bg-transparent"
                style={{
                  borderColor: "#e8482c",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e8482c 0%, #da196e 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                }}
              >
                <a href="#contact">Fale Conosco</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div
              className="aspect-square rounded-2xl p-8 opacity-90"
              style={{
                background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
              }}
            >
              <img
                src="/modern-tech-workspace-with-multiple-screens.jpg"
                alt="Ambiente de desenvolvimento moderno"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
              }}
            >
              <Code className="w-12 h-12 text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg opacity-80"
              style={{
                background: "linear-gradient(135deg, #e8482c 0%, #da196e 100%)",
              }}
            >
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
