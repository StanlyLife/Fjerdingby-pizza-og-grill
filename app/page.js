import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { FAQ } from "@/data/faq";
import { PHONE_NB, SITE } from "@/data/site";
import styles from "./home.module.css";

export const metadata = {
  alternates: { canonical: "/" },
};

const CATEGORIES = [
  { title: "Pizza", sub: "14 varianter · fra 189 kr", link: "Se pizzamenyen", href: "/meny#pizza", img: "/images/mat/pizza-eske.webp", alt: "Pepperonipizza i pizzaeske" },
  { title: "Kebab og rull", sub: "Pita og rull · fra 109 kr", link: "Se kebabmenyen", href: "/meny#kebab", img: "/images/mat/kebabrull.webp", alt: "Kebabrull med salat og mais" },
  { title: "Burgere", sub: "Smash, cheese og crispy · fra 109 kr", link: "Se burgermenyen", href: "/meny#smashburger", img: "/images/mat/cheeseburger.webp", alt: "Cheeseburger med pommes frites" },
  { title: "Middagstallerkener", sub: "9 tallerkener · fra 149 kr", link: "Se tallerkenene", href: "/meny#tallerkener", img: "/images/mat/kebabtallerken.webp", alt: "Kebabtallerken med pommes frites og salat" },
];

const FAVORITES = [
  { name: "Kebab pizza", price: "fra 189 kr", text: "Gatekjøkkenklassikeren med kebabkjøtt. Medium 189 kr, stor 249 kr.", img: "/images/mat/pizza-kebab.webp", alt: "Kebab pizza med mye ost og kebabkjøtt", href: "/meny#pizza" },
  { name: "Kebab i pita", price: "fra 109 kr", text: "Klassisk kebab i pitabrød. Medium 109 kr, stor 139 kr.", img: "/images/mat/kebab-i-pita.webp", alt: "Kebab i pita med salat og mais", href: "/meny#kebab" },
  { name: "Kebabtallerken", price: "179 kr", text: "Pakket med ferskt kebabkjøtt.", img: "/images/mat/kebabtallerken.webp", alt: "Kebabtallerken med pommes frites og salat", href: "/meny#tallerkener" },
  { name: "Cheeseburger", price: "fra 109 kr", text: "Fra 100 til 250 gram. Med pommes frites fra 149 kr.", img: "/images/mat/cheeseburger.webp", alt: "Cheeseburger med pommes frites", href: "/meny#burger" },
  { name: "Crispy chicken burger", price: "120 kr", text: "Sprø kyllingburger. Med pommes frites 165 kr.", img: "/images/mat/crispy-chicken.webp", alt: "Crispy chicken burger med salat", href: "/meny#burger" },
  { name: "Løvstektallerken", price: "159 kr", text: "Inkluderer pommes frites.", img: "/images/mat/lovstektallerken.webp", alt: "Løvstektallerken med pommes frites og salat", href: "/meny#tallerkener" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <p className="etikett accent">Pizza · Kebab · Burger · Grill</p>
            <h1 className="h1">
              Pizza, kebab og burger i <span className="accent">Fjerdingby</span>
            </h1>
            <p className={`ingress ${styles.heroLead}`}>
              Din lokale pizza- og grillrestaurant i Rælingen. Ring og bestill, og hent maten hos oss på {SITE.street}.
            </p>
            <div className={styles.heroButtons}>
              <Link className="btn btn-primary" href="/meny">
                <Icon name="bestikk" />
                Se menyen
              </Link>
              <a className="btn btn-outline-light" href={SITE.phoneHref}>
                <Icon name="telefon" />
                Ring {PHONE_NB}
              </a>
            </div>
            <ul className={styles.chips}>
              <li className="chip">
                <Icon name="klokke" />
                {SITE.hoursShort}
              </li>
              <li className="chip">
                <Icon name="kartnal" />
                {SITE.street}, {SITE.city}
              </li>
              <li className="chip">
                <Icon name="pose" />
                Ring, bestill og hent
              </li>
            </ul>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.heroPhoto}>
              <Image
                src="/images/mat/pizza-pepperoni.webp"
                alt="Pepperonipizza sett ovenfra"
                fill
                priority
                sizes="(min-width: 900px) 440px, 256px"
              />
            </div>
            <p className={styles.badge}>
              <strong>14 pizzaer</strong>
              <span>Medium fra 189 kr</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Kategorier ---------- */}
      <section className="section" id="kategorier" aria-labelledby="kategorier-tittel">
        <div className="container">
          <header className="section-head">
            <p className="etikett">Menyen vår</p>
            <h2 className="h2" id="kategorier-tittel">
              Hva har du lyst på i dag?
            </h2>
            <p className="ingress">Velg en kategori og se hele menyen med priser.</p>
          </header>
          <ul className={styles.catGrid}>
            {CATEGORIES.map((c) => (
              <li key={c.title}>
                <Link className={styles.catCard} href={c.href}>
                  <span className={styles.catImg}>
                    <Image src={c.img} alt={c.alt} fill sizes="(min-width: 900px) 282px, 50vw" />
                  </span>
                  <span className={styles.catBody}>
                    <span className={`h3 ${styles.catTitle}`}>{c.title}</span>
                    <span className={`liten ${styles.muted}`}>{c.sub}</span>
                    <span className={styles.catLink}>
                      <span className={styles.catLinkLong}>{c.link}</span>
                      <span className={styles.catLinkShort}>Se meny</span>
                      <Icon name="pil" size={18} />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Favoritter ---------- */}
      <section className="section section-white" aria-labelledby="favoritter-tittel">
        <div className={`container ${styles.favWrap}`}>
          <header className={`section-head ${styles.favHeader}`}>
            <p className="etikett">Favoritter</p>
            <h2 className="h2" id="favoritter-tittel">
              Utvalgte favoritter
            </h2>
            <p className="ingress">Et lite utvalg fra menyen. Alle priser er inkludert mva.</p>
          </header>
          <Link className={`btn btn-outline-dark ${styles.favAll}`} href="/meny">
            <Icon name="bestikk" />
            Se hele menyen
          </Link>
          <ul className={styles.favGrid}>
            {FAVORITES.map((d) => (
              <li key={d.name}>
                <Link className={styles.dish} href={d.href}>
                  <span className={styles.dishImg}>
                    <Image src={d.img} alt={d.alt} fill sizes="(min-width: 900px) 384px, 88px" />
                  </span>
                  <span className={styles.dishBody}>
                    <span className={styles.dishTop}>
                      <span className={`h3 ${styles.dishName}`}>{d.name}</span>
                      <span className={styles.price}>{d.price}</span>
                    </span>
                    <span className={styles.dishText}>{d.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Ring, bestill og hent ---------- */}
      <section className="section section-dark" id="bestill" aria-labelledby="bestill-tittel">
        <div className="container">
          <header className="section-head">
            <p className="etikett">Bestill</p>
            <h2 className="h2" id="bestill-tittel">
              Ring, bestill og hent
            </h2>
            <p className="ingress">Vi har ikke levering. Bestill på telefon og hent maten hos oss i Fjerdingby.</p>
          </header>
          <ul className={styles.orderGrid}>
            <li className={styles.orderCard}>
              <span className={styles.orderIcon}>
                <Icon name="telefon" size={26} />
              </span>
              <h3 className="h3">Ring og bestill</h3>
              <p>Ring oss på {PHONE_NB} og si hva du vil ha.</p>
              <a className="btn btn-primary" href={SITE.phoneHref}>
                <Icon name="telefon" />
                Ring {PHONE_NB}
              </a>
            </li>
            <li className={styles.orderCard}>
              <span className={styles.orderIcon}>
                <Icon name="pose" size={26} />
              </span>
              <h3 className="h3">Hent hos oss</h3>
              <p>Hent maten på {SITE.street}, midt i Fjerdingby.</p>
              <a className="btn btn-primary" href={SITE.mapUrl} target="_blank" rel="noopener">
                <Icon name="veibeskrivelse" />
                Veibeskrivelse
              </a>
            </li>
            <li className={styles.orderCard}>
              <span className={styles.orderIcon}>
                <Icon name="klokke" size={26} />
              </span>
              <h3 className="h3">Åpent hver dag</h3>
              <p>Vi har åpent fra 12:00 til 22:00 alle dager – på lørdag fra 14:00.</p>
              <Link className="btn btn-primary" href="/meny">
                <Icon name="bestikk" />
                Se menyen
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Om oss ---------- */}
      <section className="section" id="om-oss" aria-labelledby="om-oss-tittel">
        <div className={`container ${styles.about}`}>
          <div className={styles.aboutImg}>
            <Image
              src="/images/mat/donertallerken.webp"
              alt="Tallerken med kjøtt, pommes frites og salat"
              fill
              sizes="(min-width: 900px) 560px, 100vw"
            />
          </div>
          <div className={styles.aboutText}>
            <p className={`etikett ${styles.muted}`}>Om oss</p>
            <h2 className="h2" id="om-oss-tittel">
              Din lokale pizza- og grillrestaurant i Rælingen
            </h2>
            <p className={styles.muted}>
              Fjerdingby Pizza &amp; Grill ligger på {SITE.street}, midt i Fjerdingby. Her får du pizza, kebab,
              smashburgere, cheeseburgere og middagstallerkener – ring og bestill, og hent maten hos oss.
            </p>
            <p className={styles.muted}>
              Vi har åpent alle dager fra 12:00 til 22:00 (lørdag fra 14:00), så det er lett å få et godt måltid – enten det er en rask
              middag i uka eller pizzakveld med familien i helgen.
            </p>
            <dl className={styles.stats}>
              <div>
                <dt className="visually-hidden">Pizzaer på menyen</dt>
                <dd>
                  <strong>14</strong>
                  <span>pizzaer på menyen</span>
                </dd>
              </div>
              <div>
                <dt className="visually-hidden">Middagstallerkener</dt>
                <dd>
                  <strong>9</strong>
                  <span>middagstallerkener</span>
                </dd>
              </div>
              <div>
                <dt className="visually-hidden">Åpne dager</dt>
                <dd>
                  <strong>7</strong>
                  <span>dager i uka</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Finn oss ---------- */}
      <section className="section section-white" id="finn-oss" aria-labelledby="finn-oss-tittel">
        <div className={`container ${styles.find}`}>
          <div className={styles.infoCard}>
            <header className={styles.infoHead}>
              <p className={`etikett ${styles.muted}`}>Finn oss</p>
              <h2 className="h2" id="finn-oss-tittel">
                Besøk oss i Fjerdingby
              </h2>
            </header>
            <div className={styles.info}>
              <span className={styles.infoIcon}>
                <Icon name="kartnal" size={22} />
              </span>
              <div>
                <h3 className="h4">Adresse</h3>
                <address className={styles.muted}>
                  {SITE.street}
                  <br />
                  {SITE.postalCode} {SITE.city}
                </address>
              </div>
            </div>
            <div className={styles.info} id="apningstider">
              <span className={styles.infoIcon}>
                <Icon name="klokke" size={22} />
              </span>
              <div className={styles.grow}>
                <h3 className="h4">Åpningstider</h3>
                <dl className={styles.hours}>
                  {SITE.hours.map((h) => (
                    <div key={h.days} className={styles.hoursRow}>
                      <dt className={styles.muted}>{h.days}</dt>
                      <dd>
                        {h.opens}–{h.closes}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.infoIcon}>
                <Icon name="telefon" size={22} />
              </span>
              <div>
                <h3 className="h4">Telefon</h3>
                <a className={styles.muted} href={SITE.phoneHref}>
                  {PHONE_NB}
                </a>
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.infoIcon}>
                <Icon name="epost" size={22} />
              </span>
              <div>
                <h3 className="h4">E-post</h3>
                <a className={`${styles.muted} ${styles.email}`} href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className={styles.infoButtons}>
              <a className="btn btn-primary" href={SITE.mapUrl} target="_blank" rel="noopener">
                <Icon name="veibeskrivelse" />
                Veibeskrivelse
              </a>
              <a className="btn btn-outline-dark" href={SITE.phoneHref}>
                <Icon name="telefon" />
                Ring oss
              </a>
            </div>
          </div>
          <a className={styles.map} href={SITE.mapUrl} target="_blank" rel="noopener" aria-label="Åpne kart over Fjerdingby Pizza & Grill i Google Maps">
            <span className={styles.pin}>
              <Icon name="kartnal" size={30} />
            </span>
            <span className={styles.mapLabel}>
              <strong>Fjerdingby Pizza &amp; Grill</strong>
              <span>{SITE.street}</span>
              <span className={styles.mapCta}>Åpne i Google Maps →</span>
            </span>
          </a>
        </div>
      </section>

      {/* ---------- Spørsmål og svar ---------- */}
      <section className="section" id="faq" aria-labelledby="faq-tittel">
        <div className={`container ${styles.faq}`}>
          <header className="section-head">
            <p className="etikett">Spørsmål og svar</p>
            <h2 className="h2" id="faq-tittel">
              Ofte stilte spørsmål
            </h2>
            <p className="ingress">
              Finner du ikke svaret? Ring oss på <a href={SITE.phoneHref}>{PHONE_NB}</a>.
            </p>
          </header>
          <div className={styles.faqList}>
            {FAQ.map(({ q, a }, i) => (
              <details key={q} className={styles.faqItem} open={i === 0}>
                <summary>
                  <span className="h4">{q}</span>
                  <Icon name="pluss" className={styles.faqIcon} />
                </summary>
                <p className={styles.muted}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
