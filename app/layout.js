import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
// Global styles first, so component CSS modules can override them.
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { SITE } from "@/data/site";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-bricolage", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Fjerdingby Pizza & Grill – Pizza, kebab og burger i Rælingen",
    template: "%s – Fjerdingby Pizza & Grill",
  },
  description:
    "Pizza, kebab, smashburgere og middagstallerkener på Øvre Rælingsveg 194 i Fjerdingby. Åpent alle dager 14–22. Ring 92 97 60 00 og hent hos oss.",
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: SITE.name,
  },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: "#222222",
};

// One Restaurant entity for the whole site; the pages reference it by @id.
const restaurant = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE.url}/#restaurant`,
  name: SITE.name,
  url: `${SITE.url}/`,
  telephone: "+47 92 97 60 00",
  email: SITE.email,
  image: `${SITE.url}/opengraph-image.jpg`,
  logo: `${SITE.url}/images/logo.png`,
  hasMap: SITE.mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    postalCode: SITE.postalCode,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "NO",
  },
  servesCuisine: ["Pizza", "Kebab", "Burger"],
  priceRange: "kr 25–250",
  menu: `${SITE.url}/meny`,
  acceptsReservations: false,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
  ],
  sameAs: [SITE.tiktok.url],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb" className={`${bricolage.variable} ${dm.variable}`}>
      <body>
        <a className="skip-link" href="#innhold">
          Hopp til innholdet
        </a>
        <Header />
        <main id="innhold">{children}</main>
        <Footer />
        <MobileBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }} />
      </body>
    </html>
  );
}
