import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Hjem", id: "hero" },
    { label: "Om Mig", id: "about" },
    { label: "Emner", id: "topics" },
    { label: "Priser", id: "pricing" },
    { label: "Bog", id: "book" },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-primary/20">
      <div className="absolute top-0 right-1/4 w-32 h-full bg-accent/30 rounded-blob -z-10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="relative">
              <span className="block tilt-1 transition-transform group-hover:rotate-0" style={{ 
                fontFamily: 'Rubik, sans-serif',
                fontSize: '1.25rem',
                letterSpacing: '-0.01em',
                fontWeight: '500'
              }}>
                Dorte Linde
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-blob scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-1.5 group"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.01em'
                }}
              >
                <span className="relative z-10 transition-colors group-hover:text-primary">
                  {item.label}
                </span>
                {/* Playful blob hover background with slight variations */}
                <div 
                  className={`absolute inset-0 bg-accent/50 scale-0 group-hover:scale-100 transition-transform ${
                    index % 2 === 0 ? 'rounded-blob' : 'rounded-blob-2'
                  }`}
                ></div>
              </button>
            ))}
            
            {/* CTA Button with sparkle */}
            <button
              onClick={() => scrollToSection("quote-form")}
              className="ml-2 relative px-4 py-1.5 bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 group overflow-hidden rounded-md"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: '500',
                letterSpacing: '0.01em'
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Anmod om Tilbud
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent/50 rounded-blob transition-all hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-primary/10 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 text-left hover:bg-accent/50 transition-colors ${
                    index % 3 === 0 ? 'rounded-blob' : index % 3 === 1 ? 'rounded-blob-2' : 'rounded-lg'
                  }`}
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.01em'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("quote-form")}
                className="mt-2 px-4 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-2 rounded-md"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: '500',
                  letterSpacing: '0.01em'
                }}
              >
                <Sparkles className="w-4 h-4" />
                Anmod om Tilbud
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}