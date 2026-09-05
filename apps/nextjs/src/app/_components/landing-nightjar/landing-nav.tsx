import {
  NIGHTJAR_APP_HREF,
  NIGHTJAR_BRAND,
  NIGHTJAR_HREF,
  NIGHTJAR_NAV_LABEL,
  NIGHTJAR_NAV_LINKS,
  NIGHTJAR_SIGN_IN,
  NIGHTJAR_START,
} from "@acme/constants";
import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";

const QUIET_LINK =
  "text-brand-night-foreground/65 hover:text-brand-night-foreground focus-visible:ring-brand-quiet rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none";

export function LandingNav() {
  return (
    <header className="bg-brand-night text-brand-night-foreground">
      <div className="container flex items-center justify-between gap-8 py-6">
        <a
          href={NIGHTJAR_HREF}
          className="font-display-grotesk focus-visible:ring-brand-quiet rounded-sm text-xl font-medium tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {NIGHTJAR_BRAND}
        </a>

        <nav
          aria-label={NIGHTJAR_NAV_LABEL}
          className="hidden gap-8 md:flex md:items-center"
        >
          {NIGHTJAR_NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={QUIET_LINK}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={NIGHTJAR_APP_HREF}
            className={cn(QUIET_LINK, "hidden sm:inline")}
          >
            {NIGHTJAR_SIGN_IN}
          </a>
          <Button
            asChild
            size="sm"
            className="bg-brand-night-foreground text-brand-night hover:bg-brand-night-foreground/85 focus-visible:ring-brand-quiet shadow-none"
          >
            <a href={NIGHTJAR_APP_HREF}>{NIGHTJAR_START}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
