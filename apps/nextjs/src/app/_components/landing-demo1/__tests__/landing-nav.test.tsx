import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_APP_HREF,
  DEMO1_BRAND,
  DEMO1_NAV_LABEL,
  DEMO1_NAV_LINKS,
  DEMO1_SIGN_IN,
  DEMO1_START,
} from "@acme/constants";

import { LandingNav } from "~/app/_components/landing-demo1/landing-nav";

describe("LandingNav", () => {
  it("carries the wordmark inside a named landmark", () => {
    render(<LandingNav />);

    expect(
      screen.getByRole("navigation", { name: DEMO1_NAV_LABEL }),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_BRAND)).toBeInTheDocument();
  });

  // Each label addresses a section of the page by a string, and nothing else
  // checks that the two still agree.
  it("points every section link at the section it names", () => {
    render(<LandingNav />);

    for (const link of DEMO1_NAV_LINKS) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });

  it("sends both account actions to the app", () => {
    render(<LandingNav />);

    expect(screen.getByRole("link", { name: DEMO1_SIGN_IN })).toHaveAttribute(
      "href",
      DEMO1_APP_HREF,
    );
    expect(screen.getByRole("link", { name: DEMO1_START })).toHaveAttribute(
      "href",
      DEMO1_APP_HREF,
    );
  });
});
