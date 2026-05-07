"use client";
import React from "react";
import { motion } from "framer-motion";

const entries = [
  { rank: 1, name: "Jake M.", delta: "↑1", value: "−4.2 lbs", color: "text-yellow-500" },
  { rank: 2, name: "Sarah K.", delta: "↓1", value: "−3.8 lbs", color: "text-neutral-400" },
  { rank: 3, name: "You", delta: "—", value: "−3.1 lbs", color: "text-blue-500", you: true },
  { rank: 4, name: "Alex R.", delta: "↑2", value: "−2.9 lbs", color: "text-neutral-400" },
  { rank: 5, name: "Chris B.", delta: "↓1", value: "−2.3 lbs", color: "text-neutral-400" },
];

const updates = [
  { text: "Jake M. just synced — still in first 🔥" },
  { text: "You moved up to #3 — keep going 💪" },
  { text: "Sarah K. logged a workout" },
  { text: "Prize pool updated: $1,125" },
];

export const SkeletonOne = () => {
  return (
    <div className="relative flex p-8 gap-10 h-full">
      <div className="w-full md:w-[90%] p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-xl">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Live Leaderboard</p>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-red-500 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
            Live
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {entries.map((e) => (
            <motion.div
              key={e.rank}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: e.rank * 0.1 }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                e.you
                  ? "bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800"
                  : "bg-neutral-50 dark:bg-neutral-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-sm font-black w-5 text-center ${e.color}`}>
                  #{e.rank}
                </span>
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {e.name}
                  {e.you && <span className="ml-1 text-blue-500">(you)</span>}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-neutral-400">{e.delta}</span>
                <span className="text-xs font-bold text-neutral-700 dark:text-neutral-200">{e.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
          {updates.map((u, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="text-[10px] text-neutral-400 dark:text-neutral-500"
            >
              {u.text}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};
