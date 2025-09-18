"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { CheckCircle, ArrowLeft, Home, MessageCircle } from "lucide-react";

const words = "Obrigado por entrar em contato conosco! Sua mensagem foi recebida com sucesso.";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroHighlight>
        <div className="z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-full">
                <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <Highlight className="text-black dark:text-white">
                Mensagem Enviada!
              </Highlight>
            </h1>

            {/* Animated Text */}
            <div className="max-w-2xl mx-auto">
              <TextGenerateEffect 
                words={words}
                className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              <p className="text-base md:text-lg">
                Nossa equipe irá analisar sua mensagem e retornará o contato em breve. 
                Normalmente respondemos em até 24 horas durante dias úteis.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Verifique sua caixa de entrada e spam</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar a página inicial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}
