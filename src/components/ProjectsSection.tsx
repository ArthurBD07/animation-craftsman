import projectWeb from '@/assets/project-web.jpg';
import projectConsulting from '@/assets/project-consulting.jpg';

const projects = [
  {
    title: 'Site Institucional - Padaria Artesanal',
    client: 'Padaria do Barreiro',
    description: 'Desenvolvimento de site institucional com cardápio digital e sistema de pedidos online.',
    image: projectWeb,
  },
  {
    title: 'Consultoria de Marketing',
    client: 'Salão Beleza & Arte',
    description: 'Planejamento estratégico de marketing digital com foco em redes sociais e captação de clientes.',
    image: projectConsulting,
  },
  {
    title: 'Plataforma E-commerce',
    client: 'Moda Barreiro',
    description: 'Loja virtual completa com catálogo de produtos, carrinho de compras e integração de pagamento.',
    image: projectWeb,
  },
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
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
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
