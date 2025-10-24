import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Enkelt Session",
    price: "10.000 kr",
    description: "Perfekt til at introducere dit samfund til neurodiversitet",
    features: [
      "1-times hovedtale eller prædiken",
      "Spørgsmål & svar session inkluderet",
      "Digital ressourcepakke",
      "Opfølgende konsultationsopkald",
      "Virtuelle eller personlige muligheder"
    ],
    popular: false
  },
  {
    name: "Workshop Dag",
    price: "24.000 kr",
    description: "Omfattende træning for din ledelse og frivillige",
    features: [
      "Halv eller hel dags workshop",
      "Interaktive træningssessioner",
      "Skræddersyede materialer til dit ministerium",
      "Vurderingsværktøjer & tjeklister",
      "30-dages email support",
      "Massebøger til nedsat pris",
      "Gennemførelsescertifikat"
    ],
    popular: true
  },
  {
    name: "Kirke Partnerskab",
    price: "50.000+ kr",
    description: "Langsigtet vejledning til omfattende inklusion",
    features: [
      "Flere sessioner over 3-6 måneder",
      "Tilpasset pensum udvikling",
      "På-stedet ministeriel evaluering",
      "Personale & frivillig træningsprogram",
      "Forældrenes support workshops",
      "Løbende konsultation & support",
      "Årligt opfølgende besøg",
      "Prioriteret planlægning"
    ],
    popular: false
  }
];

export function Pricing() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-background overflow-hidden relative">
      {/* Playful background blobs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent rounded-blob-2 wobble opacity-60"></div>
      <div className="absolute bottom-10 -left-32 w-[400px] h-[400px] bg-primary/20 rounded-blob float opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2>Tale & Træningspakker</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hver kirkes rejse mod inklusion er unik. Vælg den pakke, der passer til dit samfunds behov og budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`relative h-full hover:scale-105 transition-all duration-300 ${tier.popular ? 'border-primary border-2' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full">
                  Mest Populær
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToForm}
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  Anmod om Tilbud
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Alle pakker inkluderer rejse inden for 400 km. Tilpassede pakker tilgængelige for multi-kirke events eller denominationskonferencer.
          </p>
        </div>
      </div>
    </section>
  );
}
