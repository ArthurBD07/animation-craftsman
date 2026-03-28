import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">
              EJ <span className="text-accent">PUC Barreiro</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Empresa Júnior da PUC Minas campus Barreiro. Soluções reais feitas por estudantes comprometidos.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Links</h4>
            <div className="space-y-2">
              {['Home', 'Quem Somos', 'Serviços', 'Projetos', 'Contato'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="block text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>PUC Minas - Campus Barreiro, BH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>contato@ejpucbarreiro.com</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={16} className="text-primary-foreground" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={16} className="text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Empresa Júnior PUC Minas Barreiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
