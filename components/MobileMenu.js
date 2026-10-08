"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import styles from "./MobileMenu.module.css";

// Hamburger menu for small screens. Closes on navigation and on Escape.
export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobilmeny"
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? "lukk" : "meny"} size={22} />
      </button>
      <nav id="mobilmeny" className={styles.panel} hidden={!open} aria-label="Meny">
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
            <Icon name="pil" size={20} />
          </Link>
        ))}
      </nav>
    </>
  );
}
