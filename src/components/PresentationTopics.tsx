import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Church } from "lucide-react";

const topics = [
  // ... (din data er uændret)
  {
    Icon: Heart,
    title: "Forstå & Inkludér",
    description: "Et praksisnært oplæg, der giver en grundlæggende forståelse for børn med særlige behov (autisme, ADHD, angst mm.) og konkrete redskaber til at skabe et inkluderende fællesskab.",
    duration: "45-60 min foredrag",
    targetAudience: "Frivillige i børne- og ungdomsarbejde, fx kirker, klubber, foreninger og NGO'er." 
  },
  {
    Icon: Users,
    title: "Trygge Rammer (Hands-on Workshop)",
    description: "Her kombinerer vi teori og praksis. Du lærer, hvorfor børn reagerer som de gør, og får lov at teste teknikker og lave jeres egne 'fidget tools' og sanseredskaber.",
    duration: "2 timers workshop",
    targetAudience: "Frivillige i børnearbejde, spejderledere, klubmedarbejdere m.fl." 
  },
  {
    Icon: Church,
    title: "Ro midt i Kaos (Aktiv Workshop)",
    description: "Hvordan skaber man tryghed i et aktivt og uforudsigeligt miljø? Få redskaber til at skabe ro, struktur og mening, selv når der er fuld fart på i børneklubben eller kirken.",
    duration: "90 min. skræddersyet workshop",
    targetAudience: "Trænere, spejderledere og idrætsfrivillige, der arbejder med børn."
  }
];

export function PresentationTopics() {
  return (
    <section id="topics" className="py-20 px-6 bg-secondary relative overflow-hidden">
      {/* Playful background blob */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#117ABB]/15 rounded-blob animate-float"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">Præsentationer & Workshops</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Intet fællesskab er ens. Derfor skræddersyr jeg altid mine oplæg og workshops til lige præcis jeres behov og kontek. Her er mine mest efterspurgte emner:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map(({ Icon, title, description, duration, targetAudience }, index) => (
            <Card key={index} className="group hover:-translate-y-2 h-full hover:border-primary/30 transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 rounded-blob-2 flex items-center justify-center mb-4 bg-[#EAF7F9] transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{duration}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-6">{description}</p>
                
                <div className="pt-4 mt-auto border-t border-muted"> 
                  <h4 className="font-semibold text-sm text-foreground mb-1">Målgruppe:</h4>
                  <p className="text-muted-foreground text-sm">{targetAudience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}