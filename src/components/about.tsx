import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Server, Code, HardDrive, Network } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Soluções em nuvem",
    description: "Infraestrutura moderna e escalável",
  },
  {
    icon: Server,
    title: "Virtualização de servidores",
    description: "Otimização de recursos e performance",
  },
  {
    icon: Code,
    title: "Desenvolvimento de sistemas",
    description: "Soluções personalizadas para seu negócio",
  },
  {
    icon: HardDrive,
    title: "Manutenção de hardware",
    description: "Suporte técnico especializado",
  },
  {
    icon: Network,
    title: "Rede Estruturada",
    description: "Conectividade confiável e segura",
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">
                Por que escolher a Mutual?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                A Mutual proporciona todo o gerenciamento e administração de T.I. à sua empresa. As atividades vão desde
                o gerenciamento remoto de servidores à manutenção física e lógica dos ativos computacionais.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Por um custo acessível, sua empresa terá uma equipe de profissionais altamente capacitados e
                qualificados à disposição.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/about2.jpg"
                  alt="Ambiente de desenvolvimento com duas telas"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-xl opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-lg opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
