import { PHONE_NB, SITE } from "./site";

// Shown on the front page and marked up as FAQPage. Only facts the restaurant has confirmed.
export const FAQ = [
  { q: "Når har dere åpent?", a: "Vi har åpent alle dager fra kl. 14:00 til 22:00." },
  {
    q: "Hvor ligger Fjerdingby Pizza & Grill?",
    a: `Vi holder til på ${SITE.street}, ${SITE.postalCode} ${SITE.city} i Rælingen kommune.`,
  },
  {
    q: "Leverer dere mat hjem?",
    a: `Nei, vi har ikke levering. Ring ${PHONE_NB} og bestill, så kan du hente maten hos oss.`,
  },
  { q: "Kan jeg bestille på telefon?", a: `Ja, ring ${PHONE_NB} og hent maten hos oss når den er klar.` },
];
