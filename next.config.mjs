/** @type {import('next').NextConfig} */

// Pages from the old WellFood template: menu pages go to /meny, everything else to the front page.
const TO_MENU = ["/menu-pizza", "/menu-burger", "/menu-grill", "/menu-chicken", "/menu-restaurant", "/menu-sea-food", "/shop", "/product-details"];
const TO_HOME = [
  "/about",
  "/history",
  "/contact",
  "/faq",
  "/chefs",
  "/chef-details",
  "/blog",
  "/blog-details",
  "/cart",
  "/checkout",
  "/gallery",
  "/index2",
  "/index3",
  "/index4",
  "/index5",
  "/index6",
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...TO_MENU.map((source) => ({ source, destination: "/meny", permanent: true })),
      ...TO_HOME.map((source) => ({ source, destination: "/", permanent: true })),
    ];
  },
};

export default nextConfig;
