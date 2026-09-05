import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SPLITSCREEN_DESCRIPTION, SPLITSCREEN_TITLE } from "@acme/constants";

import LandingSplitscreenPage, {
  metadata,
} from "~/app/landing/splitscreen/page";

vi.mock("~/app/_components/landing-splitscreen/landing-nav", () => ({
  LandingNav: () => <div data-testid="landing-nav" />,
}));
vi.mock("~/app/_components/landing-splitscreen/landing-hero", () => ({
  LandingHero: () => <div data-testid="landing-hero" />,
}));
vi.mock("~/app/_components/landing-splitscreen/landing-timeline", () => ({
  LandingTimeline: () => <div data-testid="landing-timeline" />,
}));
vi.mock("~/app/_components/landing-splitscreen/landing-features", () => ({
  LandingFeatures: () => <div data-testid="landing-features" />,
}));
vi.mock("~/app/_components/landing-splitscreen/landing-close", () => ({
  LandingClose: () => <div data-testid="landing-close" />,
}));
vi.mock("~/app/_components/landing-splitscreen/landing-footer", () => ({
  LandingFooter: () => <div data-testid="landing-footer" />,
}));

describe("LandingSplitscreenPage", () => {
  it("carries a title and a description", () => {
    expect(metadata.title).toBe(SPLITSCREEN_TITLE);
    expect(metadata.description).toBe(SPLITSCREEN_DESCRIPTION);
  });

  it("composes the page in the order a reader meets it", () => {
    render(<LandingSplitscreenPage />);

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
    render(<LandingSplitscreenPage />);

    const main = screen.getByRole("main");

    expect(main).not.toContainElement(screen.getByTestId("landing-nav"));
    expect(main).toContainElement(screen.getByTestId("landing-hero"));
    expect(main).not.toContainElement(screen.getByTestId("landing-footer"));
  });
});
