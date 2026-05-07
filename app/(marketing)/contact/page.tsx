import { Background } from "@/components/background";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";
import { IconTrophy, IconFlame, IconHeartbeat, IconShieldCheck } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Join the Waitlist — Krank",
  description:
    "Krank is the first skill-based fitness competition platform verified by Apple Health. Compete, perform, and win real money.",
};

const stats = [
  { value: "100M+", label: "Apple Watch users (your future competitors)" },
  { value: "10%", label: "Platform fee — 90% goes to winners" },
  { value: "$0", label: "Randomness. Outcomes are 100% skill-based" },
];

const perks = [
  {
    icon: <IconTrophy className="w-5 h-5 text-yellow-400" />,
    title: "Founding competitor status",
    desc: "Early members get priority entry, lower fees, and exclusive leaderboard badges — locked in permanently.",
  },
  {
    icon: <IconFlame className="w-5 h-5 text-orange-400" />,
    title: "Financial skin in the game",
    desc: "You pay to enter. You win based on performance. Loss aversion is the most powerful fitness motivator that exists.",
  },
  {
    icon: <IconHeartbeat className="w-5 h-5 text-red-400" />,
    title: "Apple HealthKit is the referee",
    desc: "Cryptographically signed biometric data. No manual logging, no self-reporting, no cheating. The leaderboard reflects reality.",
  },
  {
    icon: <IconShieldCheck className="w-5 h-5 text-green-400" />,
    title: "Skill-based competition — not gambling",
    desc: "Outcomes are 100% determined by your fitness performance. Same legal structure as Daily Fantasy Sports, established across the US.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto px-6">

            {/* Wordmark */}
            <div className="mb-10">
              <p className="text-4xl font-black tracking-[0.2em] text-black dark:text-white">
                KRANK
              </p>
              <p className="text-xs font-semibold tracking-[0.3em] text-neutral-400 mt-1 uppercase">
                Real money. Real data. Real consequences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-black dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className="space-y-6">
              {perks.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                    {perk.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {perk.title}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}
