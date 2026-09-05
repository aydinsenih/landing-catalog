import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  DEMO1_HOW_HREF,
  DEMO1_TIMELINE_BODY,
  DEMO1_TIMELINE_STAGES,
  DEMO1_TIMELINE_TITLE,
} from "@acme/constants";

import { LandingTimeline } from "~/app/_components/landing-demo1/landing-timeline";

describe("LandingTimeline", () => {
  it("titles the section and says what it covers", () => {
    render(<LandingTimeline />);

    expect(
      screen.getByRole("heading", { level: 2, name: DEMO1_TIMELINE_TITLE }),
    ).toBeInTheDocument();
    expect(screen.getByText(DEMO1_TIMELINE_BODY)).toBeInTheDocument();
  });

  // The nav addresses this section by a fragment, and only a test holds the two
  // together.
  it("answers the fragment the nav links to", () => {
    const { container } = render(<LandingTimeline />);

    expect(container.querySelector(DEMO1_HOW_HREF)).toBeInTheDocument();
  });

  it("keeps the four moves in the order a project runs them", () => {
    render(<LandingTimeline />);

    const labels = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(labels).toStrictEqual(
      DEMO1_TIMELINE_STAGES.map((stage) => stage.label),
    );
  });

  it("explains every move", () => {
    render(<LandingTimeline />);

    for (const stage of DEMO1_TIMELINE_STAGES) {
      expect(screen.getByText(stage.body)).toBeInTheDocument();
    }
  });
});
