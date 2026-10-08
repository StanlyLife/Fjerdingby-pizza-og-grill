import Link from "next/link";
import Brand from "./Brand";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import { PHONE_NB, SITE } from "@/data/site";
import styles from "./Header.module.css";

export const NAV = [
  { href: "/meny", label: "Meny" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#apningstider", label: "Åpningstider" },
  { href: "/#finn-oss", label: "Finn oss" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Brand />
        <nav className={styles.nav} aria-label="Hovedmeny">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className={styles.right}>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Åpent i dag 14–22
          </span>
          <a className={`btn btn-primary ${styles.call}`} href={SITE.phoneHref}>
            <Icon name="telefon" />
            Ring {PHONE_NB}
          </a>
          <a className={styles.round} href={SITE.phoneHref} aria-label={`Ring ${SITE.phone}`}>
            <Icon name="telefon" size={22} />
          </a>
          <MobileMenu links={NAV} />
        </div>
      </div>
    </header>
  );
}
