import Link from "next/link";
import Icon from "./Icon";
import { SITE } from "@/data/site";
import styles from "./MobileBar.module.css";

// Fixed bottom bar on phones: the three things people come for, always one tap away.
export default function MobileBar() {
  return (
    <nav className={styles.bar} aria-label="Snarveier">
      <a className={`${styles.item} ${styles.primary}`} href={SITE.phoneHref}>
        <Icon name="telefon" size={22} />
        Ring
      </a>
      <Link className={styles.item} href="/meny">
        <Icon name="bestikk" size={22} />
        Meny
      </Link>
      <a className={styles.item} href={SITE.mapUrl} target="_blank" rel="noopener">
        <Icon name="veibeskrivelse" size={22} />
        Veibeskrivelse
      </a>
    </nav>
  );
}
