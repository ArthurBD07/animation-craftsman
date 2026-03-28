"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-primary"
    >
      {/* Shader Background */}
      <div className="absolute inset-0">
        <MeshGradient
          color1="#210E46"
          color2="#BD3541"
          color3="#3a1a6e"
          color4="#1a0a2e"
          speed={0.15}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-primary/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8"
          >
            <span className="text-accent text-lg">✨</span>
            <span className="text-primary-foreground/80 text-sm font-medium">
              Empresa Júnior PUC Minas Barreiro
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-primary-foreground mb-6 leading-tight">
            Transformamos
            <br />
            <span className="text-accent">ideias</span> em
            <br />
            soluções reais
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Soluções de qualidade com preços acessíveis, unindo aprendizado acadêmico à prática profissional para o seu negócio.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contato"
              className="gradient-cta px-8 py-4 rounded-xl text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Solicitar Projeto
            </a>
            <a
              href="#servicos"
              className="border-2 border-primary-foreground/20 px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
            >
              Nossos Serviços
            </a>
          </motion.div>
        </motion.div>

        {/* Pulsing border decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <div className="relative w-16 h-16">
            <PulsingBorder
              color1="#BD3541"
              color2="#210E46"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <p className="text-primary-foreground/40 text-sm animate-bounce">
            Role para baixo 👇
          </p>
        </motion.div>
      </div>
    </div>
  )
}
