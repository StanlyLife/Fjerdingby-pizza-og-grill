"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

const short = (t) => t.replace(/:00$/, "");

// Today's opening hours in Norwegian time. The static HTML says «Åpent alle dager» until the browser knows the day.
export default function TodayHours({ className }) {
  const [text, setText] = useState("Åpent alle dager");

  useEffect(() => {
    const day = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Oslo", weekday: "long" }).format(new Date());
    const row = SITE.hours.find((h) => h.schema.includes(day));
    if (row) setText(`Åpent i dag ${short(row.opens)}–${short(row.closes)}`);
  }, []);

  return <span className={className}>{text}</span>;
}
