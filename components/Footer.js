import Link from "next/link";
import Brand from "./Brand";
import { PHONE_NB, SITE } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.about}>
          <Brand size="lg" />
          <p>Pizza, kebab, burger og middagstallerkener i Fjerdingby, Rælingen. Ring og bestill – hent hos oss.</p>
        </div>
        <div className={styles.col}>
          <h2 className="etikett">Besøk oss</h2>
          <address>
            {SITE.street}
            <br />
            {SITE.postalCode} {SITE.city}
          </address>
          <a className={styles.accent} href={SITE.mapUrl} target="_blank" rel="noopener">
            Veibeskrivelse →
          </a>
        </div>
        <div className={styles.col}>
          <h2 className="etikett">Åpningstider</h2>
          <p>
            {SITE.hours.days}
            <br />
            {SITE.hours.opens}–{SITE.hours.closes}
          </p>
        </div>
        <div className={styles.col}>
          <h2 className="etikett">Kontakt</h2>
          <a href={SITE.phoneHref}>{PHONE_NB}</a>
          <a href={`mailto:${SITE.email}`} className={styles.email}>
            {SITE.email}
          </a>
        </div>
        <div className={styles.col}>
          <h2 className="etikett">Følg oss</h2>
          <a href={SITE.tiktok.url} target="_blank" rel="noopener">
            TikTok
          </a>
          <span className={styles.muted}>{SITE.tiktok.handle}</span>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Fjerdingby Pizza &amp; Grill</span>
        <nav aria-label="Bunnmeny">
          <Link href="/meny">Meny</Link>
          <Link href="/#om-oss">Om oss</Link>
          <Link href="/#finn-oss">Finn oss</Link>
        </nav>
      </div>
    </footer>
  );
}
