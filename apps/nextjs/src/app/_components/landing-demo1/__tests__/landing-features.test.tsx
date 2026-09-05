import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_CONTRACT_BODY,
  DEMO1_CONTRACT_TITLE,
  DEMO1_FEATURES,
  DEMO1_FEATURES_TITLE,
  DEMO1_SPLITS_HREF,
} from "@acme/constants";

import { LandingFeatures } from "~/app/_components/landing-demo1/landing-features";

describe("LandingFeatures", () => {
  it("titles the section", () => {
    render(<LandingFeatures />);

    expect(
      screen.getByRole("heading", { level: 2, name: DEMO1_FEATURES_TITLE }),
    ).toBeInTheDocument();
  });

  // The nav and the hero both address this section by a fragment.
  it("answers the fragment the nav links to", () => {
    const { container } = render(<LandingFeatures />);

    expect(container.querySelector(DEMO1_SPLITS_HREF)).toBeInTheDocument();
  });

  it("gives the split its own panel, marked with the split itself", () => {
    const { container } = render(<LandingFeatures />);

    expect(
      screen.getByRole("heading", { level: 3, name: DEMO1_CONTRACT_TITLE }),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_CONTRACT_BODY)).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='split-strip']"),
    ).toBeInTheDocument();
  });

  it("lists every supporting capability", () => {
    render(<LandingFeatures />);

    for (const feature of DEMO1_FEATURES) {
      expect(
        screen.getByRole("heading", { level: 3, name: feature.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(feature.body)).toBeInTheDocument();
    }
  });

  it("keeps the panel out of the supporting list", () => {
    render(<LandingFeatures />);

    expect(screen.getAllByRole("listitem")).toHaveLength(DEMO1_FEATURES.length);
  });
});
