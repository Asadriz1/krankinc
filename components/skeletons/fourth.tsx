import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="fast" direction="left">
        <MetricGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MetricGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="normal" direction="left">
        <MetricGrid />
      </InfiniteMovingCards>
      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const metrics = [
  { emoji: "⚖️", label: "Weight" },
  { emoji: "🔥", label: "Active Calories" },
  { emoji: "💪", label: "Workout Days" },
  { emoji: "🥗", label: "Calories In" },
  { emoji: "👟", label: "Step Count" },
  { emoji: "❤️", label: "Heart Rate" },
  { emoji: "😴", label: "Sleep" },
  { emoji: "🏃", label: "Cardio Min" },
];

const MetricGrid = () => {
  return (
    <div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
      {metrics.map((m) => (
        <span
          key={m.label}
          className={cn(
            "space-x-1.5 min-w-28 flex justify-center items-center bg-white dark:bg-neutral-900 px-3 py-1.5 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          )}
        >
          <span>{m.emoji}</span>
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">{m.label}</span>
        </span>
      ))}
    </div>
  );
};
