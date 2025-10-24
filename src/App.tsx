import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PresentationTopics } from "./components/PresentationTopics";
import { Book } from "./components/Book";
import { Pricing } from "./components/Pricing";
import { QuoteRequestForm } from "./components/QuoteRequestForm";
import { Footer } from "./components/Footer";
import { Privacy } from "./components/Privacy";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return (
      <>
        <Privacy onBack={() => setShowPrivacy(false)} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PresentationTopics />
      <Pricing />
      <Book imageUrl="https://images.unsplash.com/photo-1747210044397-9f2d19ccf096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTk3MzUzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      <QuoteRequestForm />
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
      <Toaster />
    </div>
  );
}