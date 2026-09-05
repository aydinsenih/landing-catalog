import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_APP_HREF,
  DEMO1_HERO_BODY,
  DEMO1_HERO_HEADLINE,
  DEMO1_SEE_SAMPLE,
  DEMO1_SPLIT_NOTE,
  DEMO1_SPLITS_HREF,
  DEMO1_START,
} from "@acme/constants";

import { LandingHero } from "~/app/_components/landing-demo1/landing-hero";

describe("LandingHero", () => {
  it("leads with the headline and the promise under it", () => {
    render(<LandingHero />);

    expect(
      screen.getByRole("heading", { level: 1, name: DEMO1_HERO_HEADLINE }),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_HERO_BODY)).toBeInTheDocument();
  });

  it("shows a real split, and says what holds it", () => {
    const { container } = render(<LandingHero />);

    expect(
      container.querySelector("[data-slot='split-bar']"),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_SPLIT_NOTE)).toBeInTheDocument();
  });

  it("opens the app, and sends the sample link to the split section", () => {
    render(<LandingHero />);

    expect(screen.getByRole("link", { name: DEMO1_START })).toHaveAttribute(
      "href",
      DEMO1_APP_HREF,
    );
    expect(
      screen.getByRole("link", { name: DEMO1_SEE_SAMPLE }),
    ).toHaveAttribute("href", DEMO1_SPLITS_HREF);
  });
});
