'use client';

import { useScroll, useTransform, motion, type MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import heroCampus from '@/assets/hero-campus.jpg';
import { InfiniteGrid } from '@/components/ui/the-infinite-grid';
import projectWeb from '@/assets/project-web.jpg';
import projectConsulting from '@/assets/project-consulting.jpg';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
    >
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

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroCampus}
        alt="Equipe"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-primary-foreground mb-4">
            Soluções que <span className="text-accent">impactam</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Conheça alguns dos projetos desenvolvidos pela nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[projectWeb, projectConsulting, projectWeb, projectConsulting].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-elevated hover:scale-105 transition-transform duration-300">
              <img
                src={img}
                alt={`Projeto ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
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
    <div ref={container} className="h-[200vh] relative">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
});

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
