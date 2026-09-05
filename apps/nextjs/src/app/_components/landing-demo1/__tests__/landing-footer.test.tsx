import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_BRAND,
  DEMO1_FOOTER_NOTE,
  DEMO1_NAV_LINKS,
} from "@acme/constants";

import { LandingFooter } from "~/app/_components/landing-demo1/landing-footer";

describe("LandingFooter", () => {
  it("signs off with the wordmark and the note", () => {
    render(<LandingFooter />);

    expect(screen.getByText(DEMO1_BRAND)).toBeInTheDocument();
    expect(screen.getByText(DEMO1_FOOTER_NOTE)).toBeInTheDocument();
  });

  // The footer repeats the links of the nav, so a section that the nav renames
  // has to keep working from down here too.
  it("repeats every section link the nav carries", () => {
    render(<LandingFooter />);

    for (const link of DEMO1_NAV_LINKS) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
    expect(screen.getAllByRole("link")).toHaveLength(DEMO1_NAV_LINKS.length);
  });
});
