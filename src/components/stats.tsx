import { Users, FileText, Coffee, Headphones } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Clientes satisfeitos",
    description: "Empresas que confiam em nossos serviços",
  },
  {
    icon: FileText,
    value: "0",
    label: "Folhas impressas",
    description: "Compromisso com sustentabilidade digital",
  },
  {
    icon: Coffee,
    value: "150K",
    label: "Xícaras de café",
    description: "Energia para criar soluções incríveis",
  },
  {
    icon: Headphones,
    value: "10000+",
    label: "Solicitações atendidas",
    description: "Suporte dedicado aos nossos clientes",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Números que falam por si</h2>
          <p className="text-xl text-primary-foreground/80 text-pretty max-w-3xl mx-auto">
            Nossa trajetória de sucesso refletida em dados concretos e relacionamentos duradouros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">{stat.value}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <p className="text-sm text-primary-foreground/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
