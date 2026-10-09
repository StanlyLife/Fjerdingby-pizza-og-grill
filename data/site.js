// Contact details and opening hours. Keep these identical to the Google Business Profile (NAP).
export const SITE = {
  name: "Fjerdingby Pizza & Grill",
  url: "https://www.fjerdingbypizzaoggrill.no",
  phone: "92 97 60 00",
  phoneHref: "tel:+4792976000",
  email: "hei@fjerdingbypizzagrill.no",
  street: "Øvre Rælingsveg 194",
  postalCode: "2008",
  city: "Fjerdingby",
  region: "Akershus",
  // Opening hours, one row per group of days. `schema` uses schema.org day names.
  hours: [
    { days: "Mandag–fredag", opens: "12:00", closes: "22:00", schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { days: "Lørdag", opens: "14:00", closes: "22:00", schema: ["Saturday"] },
    { days: "Søndag", opens: "12:00", closes: "22:00", schema: ["Sunday"] },
  ],
  hoursShort: "Åpent 12–22 · lørdag 14–22",
  mapUrl: "https://g.co/kgs/JSRqE5f",
  tiktok: { url: "https://www.tiktok.com/@fjerdingby.grill", handle: "@fjerdingby.grill" },
};

// Same phone number with non-breaking spaces, so it never wraps.
export const PHONE_NB = SITE.phone.replace(/ /g, " ");
