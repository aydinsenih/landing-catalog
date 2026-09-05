import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DEMO1_DESCRIPTION, DEMO1_TITLE } from "@acme/constants";

import LandingDemo1Page, { metadata } from "~/app/landing/demo1/page";

vi.mock("~/app/_components/landing-demo1/landing-nav", () => ({
  LandingNav: () => <div data-testid="landing-nav" />,
}));
vi.mock("~/app/_components/landing-demo1/landing-hero", () => ({
  LandingHero: () => <div data-testid="landing-hero" />,
}));
vi.mock("~/app/_components/landing-demo1/landing-timeline", () => ({
  LandingTimeline: () => <div data-testid="landing-timeline" />,
}));
vi.mock("~/app/_components/landing-demo1/landing-features", () => ({
  LandingFeatures: () => <div data-testid="landing-features" />,
}));
vi.mock("~/app/_components/landing-demo1/landing-close", () => ({
  LandingClose: () => <div data-testid="landing-close" />,
}));
vi.mock("~/app/_components/landing-demo1/landing-footer", () => ({
  LandingFooter: () => <div data-testid="landing-footer" />,
}));

describe("LandingDemo1Page", () => {
  it("carries a title and a description", () => {
    expect(metadata.title).toBe(DEMO1_TITLE);
    expect(metadata.description).toBe(DEMO1_DESCRIPTION);
  });

  it("composes the page in the order a reader meets it", () => {
    render(<LandingDemo1Page />);

    const order = [
      "landing-nav",
      "landing-hero",
      "landing-timeline",
      "landing-features",
      "landing-close",
      "landing-footer",
    ];

    for (const id of order) {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    }

    const rendered = [
      ...document.querySelectorAll<HTMLElement>("[data-testid]"),
    ].map((element) => element.dataset.testid);

    expect(rendered).toStrictEqual(order);
  });

  it("keeps the nav and the footer outside the main landmark", () => {
    render(<LandingDemo1Page />);

    const main = screen.getByRole("main");

    expect(main).not.toContainElement(screen.getByTestId("landing-nav"));
    expect(main).toContainElement(screen.getByTestId("landing-hero"));
    expect(main).not.toContainElement(screen.getByTestId("landing-footer"));
  });
});
