import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mutual Tecnologia - Soluções em TI e Desenvolvimento",
  description:
    "Desenvolvimento de aplicativos, websites, design gráfico e assessoria em TI. Mais de 50 clientes satisfeitos.",
  generator: "Mutual Tecnologia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
            {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
