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
  hours: { days: "Mandag–søndag", short: "Alle dager 14–22", opens: "14:00", closes: "22:00" },
  mapUrl: "https://g.co/kgs/JSRqE5f",
  tiktok: { url: "https://www.tiktok.com/@fjerdingby.grill", handle: "@fjerdingby.grill" },
};

// Same phone number with non-breaking spaces, so it never wraps.
export const PHONE_NB = SITE.phone.replace(/ /g, " ");
