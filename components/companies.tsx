"use client";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { motion } from "framer-motion";

const devices = [
  { name: "Apple Watch", emoji: "⌚" },
  { name: "Oura Ring", emoji: "💍" },
  { name: "Garmin", emoji: "🟢" },
  { name: "Whoop", emoji: "🔴" },
  { name: "Fitbit", emoji: "📊" },
  { name: "iPhone", emoji: "📱" },
];

const steps = [
  {
    number: "01",
    title: "Join a challenge & pay your entry fee",
    description:
      "Pick a competition — weight loss, calories burned, workout days, and more. Pay your entry fee to lock in your spot. That's your commitment on the line.",
    accent: "text-yellow-500",
    border: "border-yellow-500/20",
    bg: "bg-yellow-50 dark:bg-yellow-950/20",
    extra: null,
  },
  {
    number: "02",
    title: "Your devices track everything automatically",
    description:
      "Apple Health is your scorecard. It aggregates data from every device you already wear — Apple Watch, Oura Ring, Garmin, Whoop, and more. Zero manual logging. Zero self-reporting. The leaderboard updates in real time.",
    accent: "text-blue-500",
    border: "border-blue-500/20",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    extra: "devices",
  },
  {
    number: "03",
    title: "Best performer wins the prize pool",
    description:
      "When the challenge ends, the top performers split 90% of the total prize pool — paid directly to their bank account. Krank takes a flat 10% platform fee. No house edge on outcomes.",
    accent: "text-green-500",
    border: "border-green-500/20",
    bg: "bg-green-50 dark:bg-green-950/20",
    extra: null,
  },
];

export const Companies = () => {
  return (
    <div className="relative z-20 py-10 md:py-40 w-full">
      <Heading as="h2">Simple enough to explain in 30 seconds</Heading>
      <Subheading className="text-center max-w-xl mx-auto">
        No complicated rules. No fine print. You compete, you perform, you get
        paid. The best athlete in the challenge wins.
      </Subheading>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl border ${step.border} ${step.bg} p-8`}
          >
            <span
              className={`text-5xl font-black ${step.accent} opacity-30 leading-none block mb-4`}
            >
              {step.number}
            </span>
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {step.description}
            </p>

            {step.extra === "devices" && (
              <div className="mt-5 flex flex-wrap gap-2">
                {devices.map((d) => (
                  <span
                    key={d.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-900 text-[11px] font-medium text-neutral-600 dark:text-neutral-300"
                  >
                    <span>{d.emoji}</span>
                    {d.name}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-900 text-[11px] font-medium text-blue-500 dark:text-blue-400">
                  + any connected app
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
