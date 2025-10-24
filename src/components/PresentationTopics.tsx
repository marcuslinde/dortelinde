import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Church } from "lucide-react";

const topics = [
  {
    Icon: Heart,
    title: "Forståelse af Neurodiversitet Gennem en Bibelsk Linse",
    description: "Udforsk hvad Skriften lærer om hvordan Gud skaber og værdsætter hvert barn, og hvorfor neurodiversitet beriger vores trossamfund.",
    duration: "45-60 min hovedtale",
  },
  {
    Icon: Users,
    title: "Praktiske Inklusionsstrategier for Børneministeret",
    description: "Praktisk workshop der udstyrer frivillige med værktøjer til at skabe imødekommende, tilgængelige miljøer for alle børn.",
    duration: "90 min - Halv dags workshop",
  },
  {
    Icon: Church,
    title: "Opbygning af en Neurodiverse-Venlig Kirkekultur",
    description: "Ledelsesuddannelse for pastorer og ministerteams om at skabe systemiske ændringer der byder neurodivergente familier velkommen.",
    duration: "Halv dags eller hel dags workshop",
  }
];

export function PresentationTopics() {
  return (
    <section id="topics" className="py-20 px-6 bg-secondary relative overflow-hidden">
      {/* Playful background blob */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/15 rounded-blob animate-float"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2>Præsentationer & Workshops</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hver præsentation er skræddersyet til din kirkes eller organisations unikke kontekst og behov. Her er nogle af mine mest efterspurgte emner:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map(({ Icon, title, description, duration }, index) => (
            <Card key={index} className="group hover:-translate-y-2 h-full hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className={`w-14 h-14 ${index % 2 === 0 ? 'rounded-blob' : 'rounded-blob-2'} bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
