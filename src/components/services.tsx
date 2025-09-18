import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Code, Server, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Desenvolvimento de Sistemas",
    description: "Aplicativos Web, Android e iOS",
    features: ["Computação visual", "Integração com IA", "Integração com sistemas", "Gestão de conteúdo"],
  },
  {
    icon: Code,
    title: "Desenvolvimento de Websites",
    description: "Websites para empresas, instituições e pessoas físicas",
    features: ["Design Responsivo", "SEO Otimizado", "Design Personalizado", "Hospedagem de Sites"],
  },
  {
    icon: Server,
    title: "Assessoria em T.I.",
    description: "Manutenção de PCs, Notebooks e Servidores",
    features: ["Suporte Técnico", "Reparo de Hardware", "Manutenção preventiva" ,"Backup em nuvem"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-balance">O que nós oferecemos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Soluções completas em tecnologia para impulsionar o seu negócio com qualidade e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group/btn bg-transparent">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
