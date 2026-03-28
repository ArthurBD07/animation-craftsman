import { Globe, BarChart3, Megaphone, Code2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, landing pages e plataformas web sob medida para o seu negócio.',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Empresarial',
    description: 'Diagnóstico organizacional, planejamento estratégico e gestão de processos.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias de redes sociais, identidade visual e campanhas de divulgação.',
  },
  {
    icon: Code2,
    title: 'Soluções em Tecnologia',
    description: 'Automação, sistemas e aplicações personalizadas para otimizar resultados.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">O que fazemos</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
