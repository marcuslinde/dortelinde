import { Mail, Phone, Facebook, Instagram } from "lucide-react"; // Importeret alle 4 ikoner

interface FooterProps {
  onPrivacyClick?: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* RETTELSE: Skiftet fra 'grid' til 'flex' og 'justify-between' */}
        {/* Dette er nu 'flex-col' (stablet) på mobil, og 'flex-row' (side-om-side) på desktop */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
          
          {/* Kolonne 1: Brand (auto-bredde) */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-heading font-bold tracking-tight mb-2">Dorte Linde</h3>
            <p className="mt-4 opacity-80">
              Specialist i inklusion & Forfatter
            </p>
          </div>

          {/* Kolonne 2: Kontakt (centreret) */}
          <div className="md:w-1/3 md:text-center">
            <h4 className="text-lg font-heading font-semibold tracking-tight mb-2">Kontakt</h4>
            <div className="mt-4 space-y-3 opacity-80 flex flex-col items-start md:items-center">
              <a href="mailto:dortelinde@gmail.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>dortelinde@gmail.com</span>
              </a>
              <a href="tel:+4553552060" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+45 53 55 20 60</span>
              </a>
            </div>
          </div>

          {/* Kolonne 3: Forbind (højrestillet) */}
          <div className="md:w-1/3 md:text-right">
            <h4 className="text-lg font-heading font-semibold tracking-tight mb-2">Forbind</h4>
            <div className="mt-4 space-y-3 opacity-80 flex flex-col items-start md:items-end">
              {/* RETTELSE: Tilføjet Facebook-handle */}
              <a 
                href="#" // <-- UDSKIFT # MED DIT FACEBOOK-LINK
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <span>Dorte Linde</span>
                <Facebook className="w-5 h-5 flex-shrink-0" />
              </a>
              {/* RETTELSE: Tilføjet Instagram-handle */}
              <a 
                href="https://www.instagram.com/lowfodmapdanish" // <-- Har indsat dit link
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <span>lowfodmapdanish</span>
                <Instagram className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Dorte Linde.
            Alle rettigheder forbeholdes.
          </p>
          {onPrivacyClick && (
            <button
              onClick={onPrivacyClick}
              className="mt-2 hover:underline focus:underline outline-none"
            >
              Privatlivspolitik
            </button> 
          )}
        </div>
      </div>
    </footer>
  );
}