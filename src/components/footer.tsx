import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Image src="/logo-alt.png" alt="Mutual Tecnologia" width={350} height={120} />
            </div>
            <p className="text-background/80 text-sm">
              Soluções completas em tecnologia para impulsionar o seu negócio com qualidade e inovação.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Desenvolvimento de Sistemas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Desenvolvimento de Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Assessoria em T.I.
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#home" className="hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-background transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:71993154491" className="hover:text-background transition-colors">
                  (71) 9 9315-4491
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:diego@mutualtecnologia.com.br" className="hover:text-background transition-colors">
                  diego@mutualtecnologia.com.br
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Salvador, Bahia - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Mutual Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
