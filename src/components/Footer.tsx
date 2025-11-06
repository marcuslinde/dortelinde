import { Mail, Facebook, Instagram } from "lucide-react";

interface FooterProps {
  onPrivacyClick?: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold tracking-tight mb-2">Dorte Linde</h3>
            <p className="mt-4 opacity-80">
              Neurodiverse Specialist & Forfatter
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold tracking-tight mb-2">Kontakt</h4>
            <div className="mt-4 space-y-2 opacity-80">
              <p>Email: dorte@allevelkomne.dk</p>
              <p>Telefon: +45 12 34 56 78</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold tracking-tight mb-2">Forbind</h4>
            <div className="mt-4 flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Mail, label: 'Email' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
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