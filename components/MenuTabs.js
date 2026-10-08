"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./MenuTabs.module.css";

// Sticky category tabs on /meny. Highlights the category you are reading and keeps that tab in view.
export default function MenuTabs({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef(null);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    let raf = 0;
    const update = () => {
      raf = 0;
      // a category is current once its top has passed the header and the tabs
      const line = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + 100;
      let current = sections[0]?.id;
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-id="${active}"]`);
    if (el && listRef.current) {
      const list = listRef.current;
      list.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className={styles.tabs} aria-label="Kategorier i menyen">
      <div className="container">
        <ul ref={listRef} className={styles.list}>
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} data-id={i.id} className={i.id === active ? styles.active : undefined} aria-current={i.id === active ? "true" : undefined}>
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
