import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import LandingSoakLayout from "~/app/landing/soak/layout";

vi.mock("next/font/google", () => ({
  Fraunces: () => ({ variable: "--font-fraunces" }),
}));

describe("the landing soak layout", () => {
  it("renders the page it wraps", () => {
    render(
      <LandingSoakLayout>
        <p>the page</p>
      </LandingSoakLayout>,
    );

    expect(screen.getByText("the page")).toBeInTheDocument();
  });

  // theme.css resolves --font-display-serif from --font-fraunces, so every
  // headline falls back to the body face unless this route declares it.
  it("declares the display face the route styles with", () => {
    const { container } = render(
      <LandingSoakLayout>
        <p>the page</p>
      </LandingSoakLayout>,
    );

    expect(container.firstElementChild).toHaveClass("--font-fraunces");
  });
});
