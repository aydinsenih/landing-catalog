import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import LandingDemo1Layout from "~/app/landing/demo1/layout";

vi.mock("next/font/google", () => ({
  Bricolage_Grotesque: () => ({ variable: "--font-bricolage" }),
}));

describe("the landing demo1 layout", () => {
  it("renders the page it wraps", () => {
    render(
      <LandingDemo1Layout>
        <p>the page</p>
      </LandingDemo1Layout>,
    );

    expect(screen.getByText("the page")).toBeInTheDocument();
  });

  // theme.css resolves --font-display from --font-bricolage, so the headline
  // face falls back to the body face unless this route declares the variable.
  it("declares the display font the route styles with", () => {
    const { container } = render(
      <LandingDemo1Layout>
        <p>the page</p>
      </LandingDemo1Layout>,
    );

    expect(container.firstElementChild).toHaveClass("--font-bricolage");
  });
});
