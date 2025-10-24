import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface PrivacyProps {
  onBack: () => void;
}

export function Privacy({ onBack }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button 
          onClick={onBack} 
          variant="ghost" 
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Forsiden
        </Button>

        <div className="space-y-8">
          <div>
            <h1>Privatlivspolitik</h1>
            <p className="text-muted-foreground mt-2">
              Sidst opdateret: {new Date().toLocaleDateString('da-DK', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2>Hvilke Data Vi Indsamler</h2>
              <p className="text-muted-foreground mt-2">
                Når du bruger vores tilbudsanmodningsformular, indsamler vi følgende oplysninger:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Dit navn og kontaktoplysninger (email, telefon)</li>
                <li>Organisations- eller kirkenavn</li>
                <li>Event detaljer og foretrukne datoer</li>
                <li>Eventuelle yderligere oplysninger, du vælger at dele i din besked</li>
              </ul>
            </section>

            <section>
              <h2>Hvordan Vi Indsamler Dine Data</h2>
              <p className="text-muted-foreground mt-2">
                Vi indsamler data direkte fra dig, når du:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Udfylder og indsender tilbudsanmodningsformularen på vores hjemmeside</li>
                <li>Kontakter os via email eller telefon</li>
                <li>Engagerer dig med os på sociale medieplatforme</li>
              </ul>
            </section>

            <section>
              <h2>Hvordan Vi Bruger Dine Data</h2>
              <p className="text-muted-foreground mt-2">
                Vi bruger de oplysninger, du giver, til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Svare på dine forespørgsler om tale-engagementer</li>
                <li>Kommunikere om event detaljer, planlægning og logistik</li>
                <li>Sende dig relevant information om præsentationer, workshops og ressourcer</li>
                <li>Forbedre vores tjenester og bedre forstå vores publikums behov</li>
              </ul>
            </section>

            <section>
              <h2>Datasikkerhed</h2>
              <p className="text-muted-foreground mt-2">
                Vi er forpligtede til at beskytte dine personlige oplysninger. Vi implementerer passende sikkerhedsforanstaltninger for at forhindre uautoriseret adgang, ændring, videregivelse eller ødelæggelse af dine data. Dog er ingen overførselsmetode over internettet 100% sikker.
              </p>
            </section>

            <section>
              <h2>Deling af Data</h2>
              <p className="text-muted-foreground mt-2">
                Vi sælger, handler eller udlejer ikke dine personlige oplysninger til tredjeparter. Vi kan kun dele dine oplysninger:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Med tjenesteudbydere, der hjælper os med at drive vores hjemmeside og udføre vores forretning</li>
                <li>Når det kræves ved lov eller for at beskytte vores rettigheder</li>
                <li>Med dit udtrykkelige samtykke</li>
              </ul>
            </section>

            <section>
              <h2>Dine Rettigheder</h2>
              <p className="text-muted-foreground mt-2">
                Du har ret til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Anmode om adgang til de personlige data, vi har om dig</li>
                <li>Anmode om korrektion af unøjagtige data</li>
                <li>Anmode om sletning af dine data</li>
                <li>Framelde dig at modtage kommunikation fra os</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For at udøve nogen af disse rettigheder, kontakt os venligst på dorte@allevelkomne.dk
              </p>
            </section>

            <section>
              <h2>Cookies og Sporing</h2>
              <p className="text-muted-foreground mt-2">
                Denne hjemmeside bruger i øjeblikket ikke cookies eller sporingsteknologier. Hvis dette ændrer sig i fremtiden, vil vi opdatere denne politik i overensstemmelse hermed.
              </p>
            </section>

            <section>
              <h2>Børns Privatliv</h2>
              <p className="text-muted-foreground mt-2">
                Vores tjenester er rettet mod voksne og organisationer. Vi indsamler ikke bevidst personlige oplysninger fra børn under 13 år. Hvis du tror, vi har indsamlet oplysninger fra et barn, kontakt os venligst øjeblikkeligt.
              </p>
            </section>

            <section>
              <h2>Ændringer til Denne Politik</h2>
              <p className="text-muted-foreground mt-2">
                Vi kan opdatere denne privatlivspolitik fra tid til anden. Vi vil underrette dig om eventuelle ændringer ved at offentliggøre den nye politik på denne side og opdatere "Sidst opdateret" datoen.
              </p>
            </section>

            <section>
              <h2>Kontakt Os</h2>
              <p className="text-muted-foreground mt-2">
                Hvis du har spørgsmål om denne Privatlivspolitik, kontakt os venligst:
              </p>
              <ul className="list-none mt-2 text-muted-foreground space-y-1">
                <li>Email: dorte@allevelkomne.dk</li>
                <li>Telefon: +45 12 34 56 78</li>
              </ul>
            </section>
          </div>

          <div className="pt-8">
            <Button onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbage til Forsiden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
