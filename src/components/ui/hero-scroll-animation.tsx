'use client';

import { useScroll, useTransform, motion, type MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import heroCampus from '@/assets/hero-campus.jpg';
import heroAbstract from '@/assets/hero-abstract.jpg';
import { InfiniteGrid } from '@/components/ui/the-infinite-grid';
import projectWeb from '@/assets/project-web.jpg';
import projectConsulting from '@/assets/project-consulting.jpg';
import exuberante from '@/assets/exuberante.jpeg';
import lojaGataMineira from '@/assets/lojaGataMineira.jpeg';
import geralEJ from '@/assets/geralEJ.jpeg';
import pessoalEJ from '@/assets/pessoalEJ.png';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

interface Feedback {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        src={heroAbstract}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <InfiniteGrid className="z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-primary-foreground mb-6 leading-tight">
          Empresa Júnior
          <br />
          <span className="text-accent">PUC Minas Barreiro</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-body">
          Transformamos ideias em soluções reais para o seu negócio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contato" className="gradient-cta px-8 py-4 rounded-lg text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
            Solicitar Projeto
          </a>
          <a href="#servicos" className="border-2 border-primary-foreground/30 px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
            Nossos Serviços
          </a>
        </div>
        <p className="text-primary-foreground/50 mt-12 text-sm animate-bounce">Role para baixo 👇</p>
      </div>
    </motion.div>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const feedbacks: Feedback[] = [
    {
      name: "Noemia",
      role: "Proprietária",
      company: "Exuberante Lingerie",
      text: "A Exuberante Lingerie foi o primeiro projeto da Integração Júnior da PUC Barreiro. É um orgulho imenso participar dos passos iniciais e acompanhar a evolução profissional que está sendo construída. O desenvolvimento apresentado até aqui evidencia o potencial da equipe e reforça a confiança em resultados cada vez mais expressivos. Um grande abraço!",
      rating: 5,
    },
    {
      name: "Rafael Campos",
      role: "Diretor de E-commerce",
      company: "Instituição Privada",
      text: "Trabalhar com a EJ foi uma experiência incrível. Conseguiram entender a dor do nosso negócio e modelar um sistema sob medida. Recomendo fortemente a consultoria deles!",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Fundadora",
      company: "Studio F",
      text: "A parceria com a Integração Júnior da PUC Barreiro foi fundamental para o nosso posicionamento de mercado. Ficamos extremamente satisfeitos com o comprometimento e a maturidade técnica que os consultores demonstraram ao longo de todo o projeto. É nítido o preparo dessa nova geração de profissionais. Desejamos muito sucesso a toda a equipe!",
      rating: 5,
    },
  ];

  return (
    <motion.div
      style={{ scale, rotate }}
      // FIXADO: Voltamos a travar rigidamente em h-screen e overflow-hidden para não quebrar a animação
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={pessoalEJ}
        alt="Equipe"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col justify-center h-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-bold font-heading text-primary-foreground mb-3">
            Soluções que <span className="text-accent">impactam</span>
          </h2>
          <p className="text-base md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </div>

        {/* CONTAINER DO CARROSSEL: No mobile vira scroll horizontal perfeito, no desktop vira o grid original */}
        <div className="flex overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 scrollbar-none style-scroll">
          {feedbacks.map((item, i) => (
            <div 
              key={i} 
              // snap-center faz o card travar centralizado ao arrastar o dedo no celular
              className="min-w-[85vw] sm:min-w-[initial] snap-center bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex gap-1 mb-3 text-accent">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <svg key={starIndex} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-primary-foreground/90 italic font-body text-xs md:text-base leading-relaxed mb-4 md:mb-6 max-h-[160px] md:max-h-none overflow-y-auto">
                  "{item.text}"
                </p>
              </div>

              <div className="border-t border-primary-foreground/20 pt-3 mt-auto">
                <h4 className="text-primary-foreground font-semibold text-sm md:text-lg font-heading">
                  {item.name}
                </h4>
                <p className="text-accent text-[11px] md:text-sm font-medium mt-0.5">
                  {item.role} — <span className="text-primary-foreground/60">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicador visual discreto de arrastar exclusivo para Mobile */}
        <p className="text-primary-foreground/40 text-center text-xs mt-2 md:hidden animate-pulse">
          Arraste para o lado para ver mais ➔
        </p>
      </div>
    </motion.div>
  );
};

const HeroScrollAnimation = forwardRef<HTMLDivElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="h-[200vh] relative bg-primary">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
});

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;