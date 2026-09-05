import { Familjen_Grotesk, IBM_Plex_Mono } from "next/font/google";

import { cn } from "@acme/ui";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export default function LandingNightjarLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        familjen.variable,
        plexMono.variable,
        "bg-brand-dawn min-h-screen",
      )}
    >
      {props.children}
    </div>
  );
}
