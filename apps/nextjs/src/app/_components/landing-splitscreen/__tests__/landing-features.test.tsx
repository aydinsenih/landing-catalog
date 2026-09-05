import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  SPLITSCREEN_CONTRACT_BODY,
  SPLITSCREEN_CONTRACT_TITLE,
  SPLITSCREEN_FEATURES,
  SPLITSCREEN_FEATURES_TITLE,
  SPLITSCREEN_SPLITS_HREF,
} from "@acme/constants";

import { LandingFeatures } from "~/app/_components/landing-splitscreen/landing-features";

describe("LandingFeatures", () => {
  it("titles the section", () => {
    render(<LandingFeatures />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: SPLITSCREEN_FEATURES_TITLE,
      }),
    ).toBeInTheDocument();
  });

  // The nav and the hero both address this section by a fragment.
  it("answers the fragment the nav links to", () => {
    const { container } = render(<LandingFeatures />);

    expect(
      container.querySelector(SPLITSCREEN_SPLITS_HREF),
    ).toBeInTheDocument();
  });

  it("gives the split its own panel, marked with the split itself", () => {
    const { container } = render(<LandingFeatures />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: SPLITSCREEN_CONTRACT_TITLE,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(SPLITSCREEN_CONTRACT_BODY)).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='split-strip']"),
    ).toBeInTheDocument();
  });

  it("lists every supporting capability", () => {
    render(<LandingFeatures />);

    for (const feature of SPLITSCREEN_FEATURES) {
      expect(
        screen.getByRole("heading", { level: 3, name: feature.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(feature.body)).toBeInTheDocument();
    }
  });

  it("keeps the panel out of the supporting list", () => {
    render(<LandingFeatures />);

    expect(screen.getAllByRole("listitem")).toHaveLength(
      SPLITSCREEN_FEATURES.length,
    );
  });
});
