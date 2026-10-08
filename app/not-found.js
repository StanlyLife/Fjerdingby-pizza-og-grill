import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Siden finnes ikke",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container section-head">
        <p className="etikett">404</p>
        <h1 className="h2">Denne siden finnes ikke</h1>
        <p className="ingress">Men menyen gjør det – og vi har åpent alle dager 14–22.</p>
        <p>
          <Link className="btn btn-primary" href="/meny">
            <Icon name="bestikk" />
            Se menyen
          </Link>
        </p>
      </div>
    </section>
  );
}
