import type { Metadata } from "next";

import { TURN_DESCRIPTION, TURN_TITLE } from "@acme/constants";

import {
  LandingAgreement,
  LandingClose,
  LandingFooter,
  LandingHero,
  LandingNav,
  LandingRounds,
} from "~/app/landing/turn";

export const metadata: Metadata = {
  title: TURN_TITLE,
  description: TURN_DESCRIPTION,
};

export default function LandingTurnPage() {
  return (
    <>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingRounds />
        <LandingAgreement />
        <LandingClose />
      </main>
      <LandingFooter />
    </>
  );
}
