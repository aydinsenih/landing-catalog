import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_APP_HREF,
  SPLITSCREEN_HERO_BODY,
  SPLITSCREEN_HERO_HEADLINE,
  SPLITSCREEN_SEE_SAMPLE,
  SPLITSCREEN_SPLIT_NOTE,
  SPLITSCREEN_SPLITS_HREF,
  SPLITSCREEN_START,
} from "@acme/constants";

import { LandingHero } from "~/app/_components/landing-splitscreen/landing-hero";

describe("LandingHero", () => {
  it("leads with the headline and the promise under it", () => {
    render(<LandingHero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: SPLITSCREEN_HERO_HEADLINE,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_HERO_BODY)).toBeInTheDocument();
  });

  it("shows a real split, and says what holds it", () => {
    const { container } = render(<LandingHero />);

    expect(
      container.querySelector("[data-slot='split-bar']"),
    ).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_SPLIT_NOTE)).toBeInTheDocument();
  });

  it("opens the app, and sends the sample link to the split section", () => {
    render(<LandingHero />);

    expect(
      screen.getByRole("link", { name: SPLITSCREEN_START }),
    ).toHaveAttribute("href", SPLITSCREEN_APP_HREF);
    expect(
      screen.getByRole("link", { name: SPLITSCREEN_SEE_SAMPLE }),
    ).toHaveAttribute("href", SPLITSCREEN_SPLITS_HREF);
  });
});
