import { Fraunces } from "next/font/google";

import { cn } from "@acme/ui";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function LandingSoakLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(fraunces.variable, "bg-brand-ash min-h-screen")}>
      {props.children}
    </div>
  );
}
