const CTASection = () => {
  return (
    <section id="contato" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-foreground blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-foreground mb-6">
          Pronto para transformar sua ideia em realidade?
        </h2>
        <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
          Entre em contato conosco e solicite uma consultoria gratuita. 
          Vamos entender suas necessidades e propor a melhor solução.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5531996701752"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta px-10 py-4 rounded-xl text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Fale pelo WhatsApp
          </a>
          <a
            href="mailto:integracao.jr.puc@gmail.com"
            className="border-2 border-primary-foreground/30 px-10 py-4 rounded-xl text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
