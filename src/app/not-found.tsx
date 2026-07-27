import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-card">
        <p className="eyebrow">Error / 404</p>
        <h1>That data point is outside the model.</h1>
        <p>
          The page may have moved, or the address may be incomplete. Return to
          the portfolio to continue exploring.
        </p>
        <Link className="button button-primary" href="/">
          <ArrowLeft aria-hidden="true" size={18} />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
