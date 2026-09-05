import {
  SOAK_APP_HREF,
  SOAK_BRAND,
  SOAK_HREF,
  SOAK_NAV_LABEL,
  SOAK_NAV_LINKS,
  SOAK_SIGN_IN,
  SOAK_START,
} from "@acme/constants";
import { Button } from "@acme/ui/button";

const QUIET_LINK =
  "text-brand-kiln-foreground/70 hover:text-brand-kiln-foreground focus-visible:ring-brand-celadon rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none";

export function LandingNav() {
  return (
    <header className="bg-brand-kiln text-brand-kiln-foreground">
      <div className="container flex items-center justify-between gap-8 py-5">
        <a
          href={SOAK_HREF}
          className="font-display-serif focus-visible:ring-brand-celadon rounded-sm text-xl font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {SOAK_BRAND}
        </a>

        <nav
          aria-label={SOAK_NAV_LABEL}
          className="hidden gap-8 md:flex md:items-center"
        >
          {SOAK_NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={QUIET_LINK}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href={SOAK_APP_HREF} className={QUIET_LINK}>
            {SOAK_SIGN_IN}
          </a>
          <Button
            asChild
            size="sm"
            className="bg-brand-copper text-brand-kiln-foreground hover:bg-brand-copper/90"
          >
            <a href={SOAK_APP_HREF}>{SOAK_START}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
