# Landing Page Projekt: DorteLinde.dk

Dette repository indeholder koden til en "single-page" landing page, bygget til en specialist i inklusion af børn med særlige behov.

Projektets formål var at bygge en moderne og responsiv hjemmeside fra bunden og håndtere hele processen fra udvikling til en fungerende "live" side.

- **Status:** Bygget og lanceret.
- **Kunde:** Dorte Linde (min mor)


## 🎯 Formål & Læringsmål

Jeg valgte bevidst dette projekt for at styrke mine praktiske kompetencer inden for et moderne frontend-setup. Mine primære læringsmål var:

1.  **Frontend Workflow:** At få hands-on erfaring med **Vite, React og TypeScript** til at bygge en komplet, type-sikker applikation.
2.  **Kode-refaktorering:** Projektets fokus var *implementering* og *refaktorering*, ikke design fra bunden. Jeg har derfor arbejdet ud fra et Figma-udkast, som jeg efterfølgende har justeret, simplificeret og refaktoreret (især i `Navbar.tsx` og `Hero.tsx`) for at forbedre læsbarhed og vedligeholdelse.
3.  **DevOps (Docker):** At opsætte en praktisk, **Docker-baseret review-pipeline** for at få mere erfaring med Docker og løse et reelt problem for en ikke-teknisk kunde.


## 🚀 Teknologi-stak

* **Frontend:** React (med Vite)
* **Sprog:** TypeScript
* **Styling:** Tailwind CSS
* **UI Komponenter:** shadcn/ui
* **Formular-håndtering:** Formspree (Serverless "form-til-email")
* **Review-miljø:** Docker / Docker Hub (Containeriseret Vite Dev Server)
* **Hosting (Prod):** Nordicway (cPanel/Apache)


## 🏃 Min Proces & Højdepunkter

Min rolle i projektet dækkede hele processen:

### 1. Design, Indhold & Refaktorering

I tæt dialog med kunden har jeg justeret og forbedret det oprindelige udkast markant:
* **Sektions-flow:** Ændret rækkefølgen og logikken (f.eks. adskilt "Emner" fra "Priser") for at skabe et mere logisk og mindre forvirrende brugerflow.
* **Asset-håndtering:** Implementeret en `public`-mappe til billeder, som komponenterne selv refererer til, frem for de hardcodede URL's fra Figma-udkastet.
* **Design-fejlfinding:** Identificeret og rettet adskillige design- og layout-fejl (f.eks. elementer, der "wrappede" akavet på tablets, og "spaghetti"-kode fra Figma).
* **Tekst & Tone:** Omskrevet alt "autogenereret" tekst til autentisk indhold, der matcher kundens stemme.

### 2. Docker Review-Pipeline

For at give min ikke-tekniske kunde (min mor) en nem måde at se og godkende siden på, valgte jeg at **containerisere selve Vite-udviklingsmiljøet**.

1.  Skrev et `Dockerfile`, der opsætter et fuldt Node.js-miljø (baseret på `node:18-alpine` for en lightweight-løsning), installerer dependencies og kører `npm run dev` på en fast port (`5523`).
2.  Pushede dette dev-image til Docker Hub (`marcuslinde/dortelinde-demo`).
3.  Gav min kunde én simpel `docker run -p 5523:5523 ...`-kommando. Dette "pullede" og kørte hele udviklingsmiljøet på hendes egen maskine.
4.  **Resultat:** Hun kunne se siden live på `http://localhost:5523` og se mine ændringer, hver gang jeg pushede et nyt image, uden at hun selv skulle installere Node, NPM eller køre `npm install`.

### 3. Teknisk Fejlfinding

Jeg stødte på og løste flere bugs:

* **Tailwind Opacity Bug:** Fandt og fiksede en gennemgående fejl, hvor Tailwinds opacity-klasser (f.eks. `bg-primary/15`) var usynlige. Fejlen skyldtes, at CSS-variablerne var defineret som HEX. Jeg løste det ved at bruge "arbitrary values" (f.eks. `bg-[#117A8B]/15`). Dette var en bevidst afvejning (tid vs. output) frem for at refaktorere alle CSS-variabler til RGB-værdier, da sandsynligheden for fremtidig refaktorering er lav.
* **Build-fejl:** Debuggede og løste en række TypeScript-fejl, der opstod pga. ubrugte `index`-variable og manglende `outline`-varianter i `shadcn/ui`-komponenterne, hvilket resulterede i et succesfuldt `npm run build`.

### 4. Deployment til Shared Hosting

Jeg håndterede det fulde deployment til et traditionelt cPanel-miljø (Nordicway):
* Købte domæne og opsatte alt praktisk.
* Byggede projektet til statiske filer (`npm run build`).
