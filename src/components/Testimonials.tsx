const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-12 text-center text-muted-foreground/80 text-sm font-medium">
    {name}
  </div>
);

export function Testimonials() {
  return (
    // Sektionen har stadig den korrekte 'bg-secondary'
    <section id="testimonials" className="py-20 px-6 bg-secondary relative overflow-hidden">
      
      {/* Baggrunds-blob'en er uændret */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#117ABB]/15 rounded-blob animate-float"></div>
      
      <div className="max-w-6xl mx-auto relative">
        
        {/* Headeren er uændret */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">
            Hvad andre siger
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Her er et par af de kirker og netværk, jeg har haft fornøjelsen af at hjælpe.
          </p>
        </div>

        {/* --- RETTELSE 1: DEN HVIDE BOKS ER FJERNET --- */}
        {/* Logoerne "flyder" nu på baggrunden */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-70">
            <LogoPlaceholder name="Mosaik" />
            <LogoPlaceholder name="DanskOase" />
            <LogoPlaceholder name="Apostolsk Kirke" />
            <LogoPlaceholder name="[Kirkenavn Pladsholder]" />
            <LogoPlaceholder name="[Netværk Pladsholder]" />
          </div>
        </div>

        {/* --- RETTELSE 2: IKONET ER UDSKIFTET MED ET STYLET <span> --- */}
        <div className="max-w-3xl mx-auto text-center relative mt-16">
          
          {/* Dette span erstatter <Quote>-ikonet. Det er stabilt. */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-heading text-[#117ABB]/10 -z-10" aria-hidden="true">
            ”
          </span>
          
          {/* Anførselstegnene er fjernet fra selve teksten herunder */}
          <blockquote className="text-2xl font-medium text-foreground relative z-10">
            Mine frivillige fortalte efter vores sommerlejr, at de i høj grad trak på de erfaringer, de tog med fra undervisningen. Dorte skabte rum for, at de frivillige både kunne forstå børnene og rammerne, men i lige så høj grad fik lov til at vokse i egne kompetencer.
          </blockquote>
          
          <p className="text-lg font-medium text-primary mt-6">
            — Mie Nygaard Fris
          </p>
          <p className="text-muted-foreground">
            Børneambassadør
          </p>
        </div>
        
      </div>
    </section>
  );
}