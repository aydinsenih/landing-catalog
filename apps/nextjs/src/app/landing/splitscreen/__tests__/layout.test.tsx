import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import LandingSplitscreenLayout from "~/app/landing/splitscreen/layout";

vi.mock("next/font/google", () => ({
  Bricolage_Grotesque: () => ({ variable: "--font-bricolage" }),
}));

describe("the landing splitscreen layout", () => {
  it("renders the page it wraps", () => {
    render(
      <LandingSplitscreenLayout>
        <p>the page</p>
      </LandingSplitscreenLayout>,
    );

    expect(screen.getByText("the page")).toBeInTheDocument();
  });

  // theme.css resolves --font-display from --font-bricolage, so the headline
  // face falls back to the body face unless this route declares the variable.
  it("declares the display font the route styles with", () => {
    const { container } = render(
      <LandingSplitscreenLayout>
        <p>the page</p>
      </LandingSplitscreenLayout>,
    );

    expect(container.firstElementChild).toHaveClass("--font-bricolage");
  });
});
