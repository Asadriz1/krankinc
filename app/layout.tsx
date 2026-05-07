import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Krank — Compete. Perform. Win Real Money.",
  description:
    "Pay to enter. Your Apple Watch, Oura Ring, Garmin, or any device connected to Apple Health tracks your performance automatically. Winners split the prize pool. No logging, no disputes — just results.",
  openGraph: {
    title: "Krank — Compete. Perform. Win Real Money.",
    description:
      "Skill-based fitness competitions verified by Apple Health. Pay to enter, perform, and win real money. No randomness. Pure results.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krank — Compete. Perform. Win Real Money.",
    description:
      "Skill-based fitness competitions verified by Apple Health. Pay to enter, perform, and win real money.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
