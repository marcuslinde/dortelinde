import { ImageWithFallback } from "./figma/ImageWithFallback";

// compute a runtime-safe URL for the image in the public folder
const imageSrc = "/images/billede1.jpg";

export function About() {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/30 rounded-blob-2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/40 rounded-blob animate-float"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block tilt-2 hover:scale-105 transition-transform duration-500">
            <ImageWithFallback
              src={imageSrc}
              alt="Dorte Linde portræt"
              className="w-full h-[500px] object-cover rounded-blob"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">Om Mig</h2>
            <p className="text-muted-foreground">
              Som mor til tre neurodivergente børn og tidligere børneministerleder forstår jeg både udfordringerne og de utrolige velsignelser, der kommer med at skabe inkluderende trossamfund. I over et årti har jeg hjulpet kirker, kristne skoler og trosbaserede organisationer med at omfavne neurodiversitet med nåde og praktisk visdom.
            </p>
            <p className="text-muted-foreground">
              Min rejse begyndte, da jeg indså, at vores kirke utilsigtet ekskluderede børn som mine. Dette førte til mange års forskning, træning og samarbejde med neurodivergente familier og ministerledere. Jeg tror, at hvert barn er skabt i Guds billede med unikke gaver at tilbyde Kristi legeme.
            </p>
            <p className="text-muted-foreground">
              Jeg har en kandidatgrad i Specialpædagogik og har omfattende træning i autismespektrumforstyrrelser, ADHD, sensorisk processing og børneudvikling. Min tilgang kombinerer evidensbaserede strategier med bibelske principper for at hjælpe dit samfund med virkelig at blive et sted, hvor alle børn hører til.
            </p>
            <div className="pt-4 space-y-2">
              {[
                'Uddannet 150+ kirker og kristne skoler',
                'Forfatter til "Alle Er Velkomne: Skabelse af Neurodiverse-Venlige Kirker"',
                'Fremhævet i førende kristne publikationer'
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}