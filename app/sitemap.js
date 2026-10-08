import { SITE } from "@/data/site";

export default function sitemap() {
  const lastModified = new Date("2026-10-08");
  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/meny`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
