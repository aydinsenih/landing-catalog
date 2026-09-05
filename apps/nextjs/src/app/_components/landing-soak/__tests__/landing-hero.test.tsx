import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  soakCelsius,
  SOAK_APP_HREF,
  SOAK_HERO_BODY,
  SOAK_HERO_HEADLINE,
  SOAK_LOG_HREF,
  SOAK_PEAK_C,
  SOAK_PEAK_LABEL,
  SOAK_READ_LOG,
  SOAK_SCHEDULE_HREF,
  SOAK_START,
} from "@acme/constants";

import { LandingHero } from "~/app/_components/landing-soak/landing-hero";

describe("LandingHero", () => {
  it("leads with the headline and the promise under it", () => {
    render(<LandingHero />);

    expect(
      screen.getByRole("heading", { level: 1, name: SOAK_HERO_HEADLINE }),
    ).toBeInTheDocument();
    expect(screen.getByText(SOAK_HERO_BODY)).toBeInTheDocument();
  });

  it("shows a real firing, as a curve and as the program that made it", () => {
    const { container } = render(<LandingHero />);

    expect(
      container.querySelector("[data-slot='firing-curve']"),
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='firing-schedule']"),
    ).toBeInTheDocument();

    const peak = container.querySelector("[data-slot='firing-peak']");

    expect(peak?.textContent).toContain(SOAK_PEAK_LABEL);
    expect(peak?.textContent).toContain(soakCelsius(SOAK_PEAK_C));
  });

  // The nav addresses this block by a fragment, and nothing type-checks it.
  it("holds the section the schedule link points at", () => {
    const { container } = render(<LandingHero />);

    expect(container.querySelector(SOAK_SCHEDULE_HREF)).toBeInTheDocument();
  });

  it("opens the app, and sends the second action to the log", () => {
    render(<LandingHero />);

    expect(screen.getByRole("link", { name: SOAK_START })).toHaveAttribute(
      "href",
      SOAK_APP_HREF,
    );
    expect(screen.getByRole("link", { name: SOAK_READ_LOG })).toHaveAttribute(
      "href",
      SOAK_LOG_HREF,
    );
  });
});
