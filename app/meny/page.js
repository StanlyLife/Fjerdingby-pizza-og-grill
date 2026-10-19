import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import MenuTabs from "@/components/MenuTabs";
import { MENU, kr } from "@/data/menu";
import { PHONE_NB, SITE } from "@/data/site";
import styles from "./meny.module.css";

export const metadata = {
  title: "Meny og priser",
  description:
    "Se hele menyen med priser: 14 pizzaer, kebab i pita og rull, smash- og cheeseburgere og middagstallerkener. Ring og bestill – hent i Fjerdingby.",
  alternates: { canonical: "/meny" },
  openGraph: { url: "/meny" },
};

// Menu structured data, built from the same data as the page.
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE.url}/meny#meny`,
  name: "Meny – Fjerdingby Pizza & Grill",
  inLanguage: "nb",
  hasMenuSection: MENU.map((c) => ({
    "@type": "MenuSection",
    name: c.name,
    hasMenuItem: c.dishes.map(([name, ...prices]) => ({
      "@type": "MenuItem",
      name,
      ...(c.descriptions?.[name] ? { description: c.descriptions[name] } : {}),
      offers: prices
        .filter((p) => typeof p === "number")
        .map((p, i) => ({
          "@type": "Offer",
          price: p,
          priceCurrency: "NOK",
          ...(c.columns ? { name: c.columns[i] } : {}),
        })),
    })),
  })),
};

function splitInTwo(list) {
  const half = Math.ceil(list.length / 2);
  return [list.slice(0, half), list.slice(half)];
}

export default function Menu() {
  return (
    <>
      <section className={styles.top}>
        <div className="container">
          <nav aria-label="Brødsmuler" className={styles.crumbs}>
            <Link href="/">Forside</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Meny</span>
          </nav>
          <h1 className="h1">Meny og priser</h1>
          <p className={`ingress ${styles.lead}`}>
            Pizza, kebab, burgere og middagstallerkener fra Fjerdingby Pizza &amp; Grill. Alle priser er inkludert mva.
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href={SITE.phoneHref}>
              <Icon name="telefon" />
              Ring {PHONE_NB}
            </a>
            <span className="chip">
              <Icon name="klokke" />
              {SITE.hoursShort}
            </span>
          </div>
        </div>
      </section>

      <MenuTabs items={MENU.map(({ id, name }) => ({ id, name }))} />

      <div className={styles.body}>
        <div className={`container ${styles.list}`}>
          {MENU.map((c) => (
            <section key={c.id} id={c.id} className={styles.card} aria-labelledby={`${c.id}-tittel`}>
              <div className={styles.cardTop}>
                <div className={styles.cardText}>
                  <h2 className="h2-sm" id={`${c.id}-tittel`}>
                    {c.name}
                  </h2>
                  <p className={styles.muted}>{c.intro}</p>
                </div>
                {c.image && (
                  <span className={styles.thumb}>
                    <Image src={c.image} alt={c.imageAlt} fill sizes="96px" />
                  </span>
                )}
              </div>
              <div className={styles.columns} style={{ "--cols": c.columns ? c.columns.length : 1 }}>
                {splitInTwo(c.dishes).map((col, ci) => (
                  <div key={ci} className={styles.col}>
                    {c.columns && (
                      <div className={styles.colHead} aria-hidden="true">
                        <span />
                        {c.columns.map((h) => (
                          <span key={h}>{h}</span>
                        ))}
                      </div>
                    )}
                    <ul className={styles.rows}>
                      {col.map(([name, ...prices]) => (
                        <li key={name} className={styles.row}>
                          <span className={styles.name}>{name}</span>
                          {prices.map((p, i) => (
                            <span key={i} className={styles.priceCell}>
                              {c.columns && <span className="visually-hidden">{c.columns[i]}: </span>}
                              {kr(p)}
                            </span>
                          ))}
                          {c.descriptions?.[name] && <span className={styles.desc}>{c.descriptions[name]}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <p className={styles.allergy}>Allergener: Spør oss gjerne om allergener og innhold i rettene når du bestiller.</p>
        </div>
      </div>

      <section className={styles.cta} aria-labelledby="bestill-tittel">
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <h2 className="h2" id="bestill-tittel">
              Klar til å bestille?
            </h2>
            <p className="ingress">Ring oss og hent maten på {SITE.street}.</p>
          </div>
          <div className={styles.ctaButtons}>
            <a className="btn btn-primary" href={SITE.phoneHref}>
              <Icon name="telefon" />
              Ring {PHONE_NB}
            </a>
            <a className="btn btn-outline-light" href={SITE.mapUrl} target="_blank" rel="noopener">
              <Icon name="veibeskrivelse" />
              Veibeskrivelse
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }} />
    </>
  );
}
