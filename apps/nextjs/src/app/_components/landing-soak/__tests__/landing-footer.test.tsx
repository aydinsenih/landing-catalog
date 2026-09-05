import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SOAK_BRAND,
  SOAK_FOOTER_NAV_LABEL,
  SOAK_FOOTER_NOTE,
  SOAK_NAV_LINKS,
} from "@acme/constants";

import { LandingFooter } from "~/app/_components/landing-soak/landing-footer";

describe("LandingFooter", () => {
  it("signs the page and says who makes it", () => {
    render(<LandingFooter />);

    expect(screen.getByText(SOAK_BRAND)).toBeInTheDocument();
    expect(screen.getByText(SOAK_FOOTER_NOTE)).toBeInTheDocument();
  });

  it("repeats every section link, under its own label", () => {
    render(<LandingFooter />);

    const nav = screen.getByRole("navigation", { name: SOAK_FOOTER_NAV_LABEL });

    for (const link of SOAK_NAV_LINKS) {
      expect(
        within(nav).getByRole("link", { name: link.label }),
      ).toHaveAttribute("href", link.href);
    }
  });
});
