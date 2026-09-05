import type { Metadata } from "next";

import { DEMO1_DESCRIPTION, DEMO1_TITLE } from "@acme/constants";

import {
  LandingClose,
  LandingFeatures,
  LandingFooter,
  LandingHero,
  LandingNav,
  LandingTimeline,
} from "~/app/landing/demo1";

export const metadata: Metadata = {
  title: DEMO1_TITLE,
  description: DEMO1_DESCRIPTION,
};

export default function LandingDemo1Page() {
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
