import Image from "next/image";
import Link from "next/link";
import styles from "./Brand.module.css";

// Logo + name, used in the header and the footer.
export default function Brand({ size = "md" }) {
  return (
    <Link href="/" className={`${styles.brand} ${styles[size]}`} aria-label="Fjerdingby Pizza & Grill – til forsiden">
      <Image src="/images/logo.png" alt="" width={256} height={256} className={styles.logo} priority={size !== "lg"} />
      <span className={styles.text}>
        <span className={styles.name}>Fjerdingby</span>
        <span className={`etikett ${styles.sub}`}>Pizza &amp; Grill</span>
      </span>
    </Link>
  );
}
