import { Target, Eye, Heart } from 'lucide-react';

const values = [
  { icon: Target, title: 'Missão', text: 'Formar empreendedores por meio de projetos reais que geram impacto na comunidade do Barreiro e região.' },
  { icon: Eye, title: 'Visão', text: 'Ser referência como empresa júnior na PUC Minas, reconhecida pela qualidade e inovação de seus projetos.' },
  { icon: Heart, title: 'Valores', text: 'Ética, comprometimento, inovação, trabalho em equipe e responsabilidade social.' },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Quem somos</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Empresa Júnior PUC Minas Barreiro
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa júnior formada por estudantes da PUC Minas campus Barreiro. 
            Oferecemos soluções de qualidade com preços acessíveis, unindo aprendizado acadêmico à prática profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div key={item.title} className="text-center p-8 rounded-xl border border-border hover:border-accent/30 transition-colors">
              <div className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
