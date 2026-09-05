import {
  CUTOFF_APP_HREF,
  CUTOFF_BRAND,
  CUTOFF_HREF,
  CUTOFF_NAV_LABEL,
  CUTOFF_NAV_LINKS,
  CUTOFF_SIGN_IN,
  CUTOFF_START,
} from "@acme/constants";
import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";

const QUIET_LINK =
  "text-brand-paper-foreground/60 hover:text-brand-paper-foreground focus-visible:ring-brand-dose rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none";

export function LandingNav() {
  return (
    <header className="bg-brand-paper text-brand-paper-foreground">
      <div className="container flex items-center justify-between gap-8 py-6">
        <a
          href={CUTOFF_HREF}
          className="font-editorial focus-visible:ring-brand-dose rounded-sm text-2xl font-medium tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {CUTOFF_BRAND}
        </a>

        <nav
          aria-label={CUTOFF_NAV_LABEL}
          className="hidden gap-8 md:flex md:items-center"
        >
          {CUTOFF_NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={QUIET_LINK}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={CUTOFF_APP_HREF}
            className={cn(QUIET_LINK, "hidden sm:inline")}
          >
            {CUTOFF_SIGN_IN}
          </a>
          <Button
            asChild
            size="sm"
            className="bg-brand-dose text-brand-paper hover:bg-brand-dose/90 focus-visible:ring-brand-dose shadow-none"
          >
            <a href={CUTOFF_APP_HREF}>{CUTOFF_START}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
