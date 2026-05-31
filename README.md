# LUMINA Landingpage

## Projektbeskrivelse

LUMINA er en responsiv landingpage udviklet som en del af mit eksamensprojekt på Multimediedesigneruddannelsen.

Formålet med projektet var at forbedre brugeroplevelsen gennem interaktive funktioner, tydeligere navigation og forbedret visuel feedback ved hjælp af HTML, CSS og JavaScript.

---

## Teknologier

- HTML5
- CSS3
- JavaScript
- Figma

---

## Implementerede forbedringer

### Smooth Scrolling

Jeg implementerede smooth scrolling ved hjælp af JavaScript og `scrollIntoView()`.

Når brugeren klikker på knapperne **"Læs mere"** eller **"Køb nu"**, scroller siden automatisk ned til produktsektionen med en smooth animation.

Dette skaber en mere intuitiv navigation og forbedrer brugeroplevelsen.

### Optimering af button-ID'er

Jeg ændrede button-ID'erne til mere beskrivende navne for at gøre JavaScript-koden mere overskuelig og lettere at vedligeholde.

Eksempel:

- `topButtonGreen` → `buyBtn`
- `topButtonWhite` → `readMoreBtn`

### Produktsektion med navigation

Jeg tilføjede ID'et `produktinfo` til produktsektionen.

Dette gør det muligt for JavaScript at navigere direkte til produktområdet, når brugeren klikker på navigationsknapperne.

### Interaktivt farvevalg

Jeg implementerede et interaktivt farvevalg ved hjælp af JavaScript.

Når brugeren vælger en farvevariant:

- Markeres den valgte farve
- Andre farver fravælges automatisk
- Den valgte farve gemmes i JavaScript

### Active States og visuel feedback

Jeg implementerede active states ved hjælp af CSS.

Den valgte farve får:

- Border
- Shadow-effekt
- Scaling-animation

Derudover blev der tilføjet cursor- og transition-effekter for at skabe en mere smooth og intuitiv brugeroplevelse.

### Dynamisk valg og fravalg af farver

Farvevalgene blev gjort dynamiske.

Hvis brugeren klikker på den samme farve igen:

- Fjernes markeringen
- Valget nulstilles

Hvis brugeren vælger en anden farve:

- Fjernes active state fra den tidligere valgte farve
- Den nye farve markeres automatisk

### Køb nu-funktionalitet

Jeg implementerede JavaScript-funktionalitet på **"Køb nu"**-knappen.

Hvis brugeren ikke har valgt en farve:

- Vises en advarselsbesked

Hvis en farve er valgt:

- Vises en bekræftelsesbesked med den valgte farve

Dette giver brugeren tydelig feedback på handlingen.

### Trustpilot-sektion

Jeg gjorde Trustpilot-knappen interaktiv ved hjælp af JavaScript.

Når brugeren klikker på knappen, modtager brugeren feedback, hvilket gør anmeldelsessektionen mere levende og interaktiv.

### Layoutforbedringer

Jeg reducerede afstanden mellem inspirationsbillederne og tekstsektionen ved at justere `margin-top` i CSS.

Dette skaber:

- Bedre visuel balance
- Mere sammenhængende layout
- Forbedret brugeroplevelse

---

## Designproces

Projektet blev først designet og prototypet i Figma.

Efterfølgende blev designet implementeret i HTML, CSS og JavaScript, hvor der løbende blev arbejdet med forbedringer af både funktionalitet og brugeroplevelse.

---

## Refleksion

Gennem projektet har jeg opnået en bedre forståelse for samspillet mellem UX-design, UI-design og frontend-udvikling.

Jeg har arbejdet med at omsætte designbeslutninger til funktionel kode og fået erfaring med JavaScript-interaktioner, visuel feedback, brugercentreret design og optimering af brugeroplevelsen.

---

## Links

### GitHub Repository

Indsæt link her

### GitHub Pages

Indsæt link her

### Figma Design

Indsæt link her

### Figma Prototype

Indsæt link her
