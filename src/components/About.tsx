import { ImageWithFallback } from "./figma/ImageWithFallback";

// compute a runtime-safe URL for the image in the public folder
const imageSrc = "/images/bogsalg.jpeg";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D7EFF2]/60 rounded-blob -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#D7EFF2]/60 rounded-blob-2 animate-float"></div>
      
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
                <b>Jeg hedder Dorte, og jeg elsker mit arbejde 🩵</b>
                <br />
                I mere end 25 år har jeg hjulpet børn og unge med særlige behov, samt de voksne, der gerne vil gøre en forskel for dem. Jeg er læreruddannet med overbygning i specialpædagogik og tidligere leder af Fyns største børnekirke, hvor jeg opdagede hvor svært det kan være for frivillige at forstå børn, der reagerer anderledes.
            </p>
            <p className="text-muted-foreground">
                Mange vil gerne gøre det rigtige, men ender med at føle sig usikre når et barn trækker sig, får et vredesudbrud eller ikke kan følge med. Jeg kender den følelse. Derfor har jeg gjort det til min mission at give dit fællesskab enkle og brugbare redskaber, så du kan møde børnene med ro, forståelse og tryghed, også når du står midt i kaos.
            </p>
            <p className="text-muted-foreground">
                Jeg tror på at alle børn har noget særligt at bidrage med. Når vi lærer at se bag adfærden og forstår, hvad der ligger bag, bliver arbejdet både lettere og langt mere meningsfuldt, for både børnene og os voksne.
            </p>
            <div className="pt-4 space-y-4">
              {[
                'Førende ekspert med 25 års erfaring i inklusion af børn med særlige behov i kirkeligt regi',
                'Forfatter til bogen “Børn med særlige behov”, brugt i kirker landet over',
                'Kirke-Danmarks foretrukne underviser i inklusion af børn med særlige behov (træner bl.a. Mosaik, DanskOase og Apostolsk)'
              ].map((text) => (
                <div key={text} className="flex items-center gap-4">
                    <span className="
                        flex 
                        items-center 
                        justify-center 
                        w-8 
                        h-8 
                        bg-secondary 
                        text-primary 
                        rounded-blob
                        flex-shrink-0
                        ">
                        ✓
                    </span>
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