import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function LandingDemo1Layout(props: {
  children: React.ReactNode;
}) {
  return <div className={bricolage.variable}>{props.children}</div>;
}
