import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SOAK_APP_HREF,
  SOAK_BRAND,
  SOAK_HREF,
  SOAK_NAV_LABEL,
  SOAK_NAV_LINKS,
  SOAK_SIGN_IN,
  SOAK_START,
} from "@acme/constants";

import { LandingNav } from "~/app/_components/landing-soak/landing-nav";

describe("LandingNav", () => {
  it("carries the brand back to the top of the page", () => {
    render(<LandingNav />);

    expect(screen.getByRole("link", { name: SOAK_BRAND })).toHaveAttribute(
      "href",
      SOAK_HREF,
    );
  });

  it("points each section link at the section it names", () => {
    render(<LandingNav />);

    const nav = screen.getByRole("navigation", { name: SOAK_NAV_LABEL });

    for (const link of SOAK_NAV_LINKS) {
      expect(
        within(nav).getByRole("link", { name: link.label }),
      ).toHaveAttribute("href", link.href);
    }
  });

  it("opens the app from both the sign in and the primary action", () => {
    render(<LandingNav />);

    expect(screen.getByRole("link", { name: SOAK_SIGN_IN })).toHaveAttribute(
      "href",
      SOAK_APP_HREF,
    );
    expect(screen.getByRole("link", { name: SOAK_START })).toHaveAttribute(
      "href",
      SOAK_APP_HREF,
    );
  });
});
