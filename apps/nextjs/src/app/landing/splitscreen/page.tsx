import type { Metadata } from "next";

import { SPLITSCREEN_DESCRIPTION, SPLITSCREEN_TITLE } from "@acme/constants";

import {
  LandingClose,
  LandingFeatures,
  LandingFooter,
  LandingHero,
  LandingNav,
  LandingTimeline,
} from "~/app/landing/splitscreen";

export const metadata: Metadata = {
  title: SPLITSCREEN_TITLE,
  description: SPLITSCREEN_DESCRIPTION,
};

export default function LandingSplitscreenPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingTimeline />
        <LandingFeatures />
        <LandingClose />
      </main>
      <LandingFooter />
    </>
  );
}
