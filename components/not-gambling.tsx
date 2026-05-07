"use client";
import { motion } from "framer-motion";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

const comparison = [
  {
    concept: "Outcome determined by",
    gambling: "Random chance",
    krank: "Your fitness performance",
    krankGood: true,
  },
  {
    concept: "Who controls the result",
    gambling: "No one — it's random",
    krank: "You, entirely",
    krankGood: true,
  },
  {
    concept: "House edge on outcomes",
    gambling: "Yes — house always wins",
    krank: "None — 90% goes to winners",
    krankGood: true,
  },
  {
    concept: "Legal framework",
    gambling: "Games of chance regulation",
    krank: "Skill-based competition (like DFS)",
    krankGood: true,
  },
  {
    concept: "Data source",
    gambling: "N/A",
    krank: "Apple HealthKit — cryptographically verified",
    krankGood: true,
  },
  {
    concept: "Does effort determine the result?",
    gambling: "No — it's random",
    krank: "Yes — it's the only thing that matters",
    krankGood: true,
  },
];

export const NotGambling = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      {/* Bold header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-50 dark:bg-green-950/30 mb-6">
          <IconCheck className="w-4 h-4 text-green-500" />
          <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
            Legally established
          </span>
        </div>
        <Heading as="h2">
          This is not gambling.
          <br />
          <span className="text-neutral-400 dark:text-neutral-500">Here&apos;s exactly why.</span>
        </Heading>
        <Subheading className="text-center max-w-2xl mx-auto mt-4">
          We get it — paying to compete sounds like gambling. It isn&apos;t.
          Gambling is defined by randomness. Krank is defined by your
          performance. The Daily Fantasy Sports industry proved this distinction
          in court a decade ago. Krank operates on the same legal framework.
        </Subheading>
      </motion.div>

      {/* Comparison table */}
      <div className="max-w-4xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-3 mb-3 px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 text-center">
            Gambling
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-green-500 text-center">
            Krank
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden divide-y divide-neutral-100 dark:divide-neutral-800">
          {comparison.map((row, i) => (
            <motion.div
              key={row.concept}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 items-center bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <div className="p-4 pr-6">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  {row.concept}
                </p>
              </div>
              <div className="p-4 text-center border-l border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center justify-center gap-2">
                  <IconX className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {row.gambling}
                  </p>
                </div>
              </div>
              <div className="p-4 text-center border-l border-neutral-100 dark:border-neutral-800 bg-green-50/50 dark:bg-green-950/10">
                <div className="flex items-center justify-center gap-2">
                  <IconCheck className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {row.krank}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 text-center"
        >
          <p className="text-sm font-semibold text-black dark:text-white max-w-2xl mx-auto leading-relaxed">
            &ldquo;Games where outcomes are determined by participant skill — not chance — fall
            outside gambling regulation.&rdquo;
          </p>
          <p className="text-xs text-neutral-400 mt-3">
            The legal standard established by the Daily Fantasy Sports industry · Krank operates on the same framework
          </p>
        </motion.div>
      </div>
    </div>
  );
};
