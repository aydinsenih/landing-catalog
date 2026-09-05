import { Schibsted_Grotesk } from "next/font/google";

import { cn } from "@acme/ui";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export default function LandingTurnLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(schibsted.variable, "bg-brand-bone min-h-screen")}>
      {props.children}
    </div>
  );
}
