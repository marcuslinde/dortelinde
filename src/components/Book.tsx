import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Star } from "lucide-react";

interface BookProps {
  imageUrl: string;
}

export function Book({ imageUrl }: BookProps) {
  return (
    <section id="book" className="py-20 px-6 bg-secondary relative overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-blob animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-blob-2"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary">Bestseller Bog</span>
            </div>
            <h2>Alle Er Velkomne: Skabelse af Neurodiverse-Venlige Kirker</h2>
            <p className="text-muted-foreground">
              En omfattende guide for kirkeledere, ministerielle frivillige og kristne undervisere, der ønsker at skabe virkelig inkluderende miljøer, hvor neurodivergente børn kan møde Guds kærlighed og vokse i deres tro.
            </p>
            <div className="space-y-3">
              {[
                'Praktiske strategier til tilpasning af pensum, fysiske rum og ministerielle tilgange',
                'Virkelige historier fra familier og kirker, der med succes har skabt inkluderende fællesskaber',
                'Bibelsk fundament for forståelse og fejring af neurodiversitet i Kristi legeme'
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9/5 (500+ anmeldelser)</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="px-8">
                Køb Bogen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const formElement = document.getElementById('quote-form');
                  formElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Tale med Bøger som Materiale
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 tilt-1 hover:scale-105 transition-transform duration-500">
            <ImageWithFallback
              src={imageUrl}
              alt="Alle Er Velkomne bogens forside"
              className="w-full max-w-md mx-auto aspect-square object-cover rounded-blob"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
