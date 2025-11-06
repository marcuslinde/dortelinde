import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

export function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    eventDate: "",
    attendees: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    toast.success("Anmodning indsendt med succes! Jeg vender tilbage inden for 24 timer.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      eventType: "",
      eventDate: "",
      attendees: "",
      topic: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="quote-form" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Playful background blob */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-secondary rounded-blob-2 animate-float opacity-80"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">Anmod om Tilbud</h2>
          <p className="text-muted-foreground mt-4">
            Udfyld formularen nedenfor, og jeg vender tilbage inden for 24 timer for at diskutere dine event behov.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Fulde Navn *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Anders Nielsen"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Adresse *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="anders@kirken.dk"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Kirke eller Organisation *</Label>
            <Input
              id="organization"
              required
              value={formData.organization}
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              placeholder="Første Fællesskabskirke"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type *</Label>
              <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))} required>
                <SelectTrigger id="eventType">
                  <SelectValue placeholder="Vælg event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="keynote">Hovedtale/Prædiken</SelectItem>
                  <SelectItem value="workshop">Workshop/Træning</SelectItem>
                  <SelectItem value="conference">Konference</SelectItem>
                  <SelectItem value="staff">Personaleuddannelsesdag</SelectItem>
                  <SelectItem value="virtual">Virtuelt Event</SelectItem>
                  <SelectItem value="other">Andet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eventDate">Foretrukken Event Dato</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attendees">Forventet Antal Deltagere</Label>
            <Input
              id="attendees"
              type="number"
              value={formData.attendees}
              onChange={(e) => setFormData(prev => ({ ...prev, attendees: e.target.value }))}
              placeholder="f.eks. 200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Emne af Interesse</Label>
            <Input
              id="topic"
              value={formData.topic}
              onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
              placeholder="f.eks. Neurodiverse-venlig børneministerium"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Yderligere Detaljer *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Del gerne om dit event, nuværende udfordringer med neurodivergent inklusion, eller specifikke emner du gerne vil have behandlet..."
              rows={6}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Indsender..." : "Indsend Anmodning"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
