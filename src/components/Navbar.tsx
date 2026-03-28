import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl text-primary-foreground">
          EJ <span className="text-accent">PUC Barreiro</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="gradient-cta px-5 py-2 rounded-lg text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Solicitar Consultoria
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="block gradient-cta px-5 py-2 rounded-lg text-accent-foreground text-sm font-semibold text-center">
            Solicitar Consultoria
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
