import {
  TURN_APP_HREF,
  TURN_BRAND,
  TURN_HREF,
  TURN_NAV_LABEL,
  TURN_NAV_LINKS,
  TURN_SIGN_IN,
  TURN_START,
} from "@acme/constants";
import { cn } from "@acme/ui";
import { Button } from "@acme/ui/button";

const QUIET_LINK =
  "text-brand-marigold-foreground/70 hover:text-brand-marigold-foreground focus-visible:ring-brand-pot rounded-sm text-sm focus-visible:ring-2 focus-visible:outline-none";

export function LandingNav() {
  return (
    <header className="bg-brand-marigold text-brand-marigold-foreground">
      <div className="container flex items-center justify-between gap-8 py-6">
        <a
          href={TURN_HREF}
          className="font-circle focus-visible:ring-brand-pot rounded-sm text-xl font-semibold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {TURN_BRAND}
        </a>

        <nav
          aria-label={TURN_NAV_LABEL}
          className="hidden gap-8 md:flex md:items-center"
        >
          {TURN_NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={QUIET_LINK}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={TURN_APP_HREF}
            className={cn(QUIET_LINK, "hidden sm:inline")}
          >
            {TURN_SIGN_IN}
          </a>
          <Button
            asChild
            size="sm"
            className="bg-brand-pot text-brand-bone hover:bg-brand-pot/90 focus-visible:ring-brand-pot shadow-none"
          >
            <a href={TURN_APP_HREF}>{TURN_START}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
