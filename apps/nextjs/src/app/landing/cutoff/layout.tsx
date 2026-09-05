import { Newsreader } from "next/font/google";

import { cn } from "@acme/ui";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export default function LandingCutoffLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(newsreader.variable, "bg-brand-paper min-h-screen")}>
      {props.children}
    </div>
  );
}
