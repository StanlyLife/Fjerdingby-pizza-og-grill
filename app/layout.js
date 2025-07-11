import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
export const metadata = {
  title: "Fjerdingby pizza og grill - Hamburger, pizza, grill og kebab i Fjerdingby",
  description: "Laget av moderna media digitalbyrå",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
