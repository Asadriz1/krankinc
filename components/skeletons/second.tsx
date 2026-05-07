"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;
    setAnimating(true);
    await animate(
      ".message",
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.4) }
    );
    setAnimating(false);
  };

  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-10" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          {/* phone notch */}
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />

          {/* challenge header */}
          <div className="mt-3 px-3">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400 text-center">
              Active Challenge
            </p>
            <p className="text-xs font-black text-center text-black dark:text-white mt-0.5">
              Summer Shred
            </p>
            <div className="flex justify-between mt-2 px-1">
              <div className="text-center">
                <p className="text-[10px] font-black text-black dark:text-white">−3.1<span className="text-[8px] font-normal text-neutral-400"> lbs</span></p>
                <p className="text-[8px] text-neutral-400 uppercase tracking-wider">Your progress</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black text-black dark:text-white">#3</p>
                <p className="text-[8px] text-neutral-400 uppercase tracking-wider">Rank</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black text-green-500">$1,125</p>
                <p className="text-[8px] text-neutral-400 uppercase tracking-wider">Prize pool</p>
              </div>
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-3 px-3">
            <div className="flex justify-between mb-1">
              <span className="text-[8px] text-neutral-400">12 days left</span>
              <span className="text-[8px] text-neutral-400">30 day challenge</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
            </div>
          </div>

          {/* updates */}
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-3 w-[90%] mx-auto"
          >
            <Update type="sync">HealthKit synced — −0.3 lbs today 💪</Update>
            <Update type="alert">Jake M. extended his lead — #1</Update>
            <Update type="sync">You gained on Sarah K. — now #3</Update>
            <Update type="prize">Prize pool updated: $1,125 🏆</Update>
          </div>
        </div>
      </div>
    </div>
  );
};

const Update = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "sync" | "alert" | "prize";
}) => {
  const bg =
    type === "sync"
      ? "bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black"
      : type === "prize"
      ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
      : "bg-black text-white dark:bg-white dark:text-black";
  return (
    <div
      className={`message ${bg} p-2 sm:p-3 text-[9px] sm:text-[10px] my-2 rounded-lg font-medium`}
    >
      {children}
    </div>
  );
};
