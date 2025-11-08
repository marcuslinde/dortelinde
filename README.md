# DorteLinde.dk (Live) Landing Page

Dette repository indeholder koden til en "single-page" landing page, bygget til en specialist i inklusion af børn med særlige behov.

Projektets formål var at bygge en moderne og responsiv hjemmeside fra bunden, baseret på et designudkast fra Figma, og håndtere hele processen fra udvikling til en fungerende "live" side.
**Personligt Mål:** Jeg valgte bevidst et **Vite + React + TypeScript** setup for at få mere eksponering til React. Derudover opsatte jeg også en review "pipeline" i **Docker** for at få mere erfaring. Jeg fokuserede på *implementering og refaktorering* af et Figma-design, ikke design fra bunden.

<br>

> **Status:** Bygget og lanceret.
> **Kunde:** Dorte Linde (min mor)

<br>

## 🎨 Fra Udkast til Live Site

Processen involverede en signifikant refaktorering og justering af det oprindelige Figma-udkast for at forbedre brugerflow, rette designfejl og implementere autentisk indhold.

### 1\. Oprindeligt Figma-udkast

*Dette var det autogenererede udgangspunkt, som primært fungerede som en design-retning.*
<img width="2783" height="1602" alt="Figma Udkast" src="https://github.com/user-attachments/assets/e532ae0d-b78a-48a5-8ebf-6f7967aa321d" />

### 2\. Min Endelige, Implementerede Version

*Den færdige side, bygget i React, med justeret layout, nyt indhold og forbedret sektions-flow.*
<img width="2782" height="1602" alt="Endelig version 1" src="https://github.com/user-attachments/assets/99e822e0-fdb3-4b67-ad60-e419b0eb5e07" />
<img width="2782" height="1602" alt="Endelig version 2" src="https://github.com/user-attachments/assets/ab3b4586-5956-45a0-98f4-caebf9ee8d90" />

<br>
---
## 🎯 Formål & Læringsmål

Jeg valgte bevidst dette projekt for at styrke mine praktiske kompetencer inden for et moderne frontend-setup. Mine primære læringsmål var:

1.  **Frontend Workflow:** At få hands-on erfaring med **Vite, React og TypeScript** til at bygge en komplet, type-sikker applikation.
2.  **Kode-refaktorering:** Projektets fokus var *implementering* og *refaktorering*. Jeg har arbejdet ud fra et Figma-udkast, som jeg efterfølgende har justeret, simplificeret og refaktoreret (især i `Navbar.tsx` og `Hero.tsx`) for at forbedre læsbarhed og vedligeholdelse.
3.  **DevOps (Docker):** At opsætte en praktisk, **Docker-baseret review-pipeline** for at løse et reelt problem for en ikke-teknisk kunde.

<br>

## 🧑‍💻 Tech Stack

  * **Frontend:** React (med Vite)
  * **Sprog:** TypeScript
  * **Styling:** Tailwind CSS
  * **UI Komponenter:** shadcn/ui
  * **Formular-håndtering:** Formspree (Serverless "form-til-email")
  * **Review-miljø:** Docker / Docker Hub (Containeriseret Vite Dev Server)
  * **Hosting (Prod):** Nordicway (cPanel/Apache)

<br>

## 🧭 Min Proces & Højdepunkter

Min rolle i projektet dækkede hele processen:

### 1\. Design, Indhold & Refaktorering

I tæt dialog med kunden har jeg justeret og forbedret det oprindelige udkast markant:

  * **Sektions-flow:** Ændret rækkefølgen og logikken (f.eks. adskilt "Emner" fra "Priser") for at skabe et mere logisk brugerflow.
  * **Asset-håndtering:** Implementeret en `public`-mappe til billeder, som komponenterne selv refererer til, frem for hardcodede URL's.
  * **Design-fejlfinding:** Identificeret og rettet adskillige design- og layout-fejl (f.eks. elementer, der "wrappede" akavet på tablets).
  * **Tekst & Tone:** Omskrevet alt "autogenereret" tekst til autentisk indhold, der matcher kundens stemme.

### 2\. Docker Review-Pipeline

For at give min ikke-tekniske kunde en nem måde at se og godkende siden på, valgte jeg at **containerisere selve Vite-udviklingsmiljøet**.

> **Min Løsning:**
>
> 1.  Skrev et `Dockerfile` (baseret på `node:18-alpine`) der installerer dependencies og kører `npm run dev` på en fast port (`5523`).
> 2.  Pushede dette dev-image til Docker Hub (`marcuslinde/dortelinde-demo`).
> 3.  Gav min kunde én simpel `docker run -p 5523:5523 ...`-kommando.
>
> **Resultat:** Hun kunne se siden live på `http://localhost:5523` og se mine ændringer, hver gang jeg pushede et nyt image, *uden* at hun selv skulle installere Node, NPM eller køre `npm install`.

### 3\. Teknisk Fejlfinding

Jeg stødte på og løste flere konkrete bugs:

  * **Tailwind Opacity Bug:** Fandt og fiksede en fejl, hvor opacity-klasser (`bg-primary/15`) var usynlige. Fejlen skyldtes, at CSS-variablerne var defineret som HEX. Løste det ved at bruge "arbitrary values" (f.eks. `bg-[#117A8B]/15`) som en bevidst afvejning (tid vs. output).
  * **Build-fejl:** Debuggede og løste en række TypeScript-fejl (ubrugte `index`-variable og manglende `outline`-varianter i `shadcn/ui`), hvilket resulterede i et succesfuldt `npm run build`.

### 4\. Deployment til Shared Hosting

Jeg håndterede det fulde deployment til et traditionelt cPanel-miljø (Nordicway):

  * Købte domæne og opsatte alt praktisk.
  * Byggede projektet til statiske filer (`npm run build`).
  * Overførte filerne og konfigurerede serveren til at pege på den korrekte `index.html`.
