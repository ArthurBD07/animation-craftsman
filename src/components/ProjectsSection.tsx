import projectWeb from '@/assets/project-web.jpg';
import projectConsulting from '@/assets/project-consulting.jpg';
import exuberante from '@/assets/exuberante.jpeg';
import lojaGataMineira from '@/assets/lojaGataMineira.jpeg';

const projects = [
  {
    title: 'Exuberante - Lingerie e acessórios',
    client: 'Loja de lingerie e roupas íntimas',
    description: 'Na Exuberante, unimos conforto, elegância e sensualidade para valorizar a beleza única de cada mulher com lingeries e acessórios incríveis.',
    image: exuberante,
    instagramUrl: 'https://www.instagram.com/exuberantelingerieoficial/',
  },
  {
    title: 'Gata Mineira - Jeans Wear',
    client: 'Conforto e Qualidade em Jeans Wear',
    description: 'Sua dose diária de estilo em jeans, com peças modernas e confortáveis feitas para valorizar o seu corpo em qualquer ocasião.',
    image: lojaGataMineira,
    instagramUrl: 'https://www.instagram.com/gatamineira_ofc/',
  },
  /*{
    title: 'Plataforma E-commerce',
    client: 'Moda Barreiro',
    description: 'Loja virtual completa com catálogo de produtos, carrinho de compras e integração de pagamento.',
    image: projectWeb,
  },*/
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Projetos Recentes
          </h2>
        </div>

        {/* Container utilizando Flexbox para garantir a centralização perfeita com 1, 2 ou mais itens */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)] max-w-sm md:max-w-none"
            >
              <div>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">{project.client}</p>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                </div>
              </div>

              {/* Botão do Instagram posicionado de forma fixa na base do card */}
              <div className="px-6 pb-6 mt-auto">
                {project.instagramUrl && (
                  <a 
                    href={project.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#4A148C] text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-200 text-sm"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    Ver no Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;