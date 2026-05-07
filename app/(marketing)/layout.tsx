import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Krank — Compete. Perform. Win Real Money.",
  description:
    "Pay to enter. Your Apple Watch, Oura Ring, Garmin, or any device connected to Apple Health tracks your performance automatically. Winners split the prize pool. No logging, no disputes — just results.",
  openGraph: {
    title: "Krank — Compete. Perform. Win Real Money.",
    description:
      "Skill-based fitness competitions verified by Apple Health. Pay to enter, perform, and win real money. No randomness. Pure results.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krank — Compete. Perform. Win Real Money.",
    description:
      "Skill-based fitness competitions verified by Apple Health. Pay to enter, perform, and win real money.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
