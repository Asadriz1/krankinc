"use client";
import React, { useState } from "react";
import { IconDots } from "@tabler/icons-react";
import { Switch } from "../switch";

const challenges = [
  { title: "Weight Loss", desc: "30-day challenge", active: true, prize: "$1,125" },
  { title: "Active Calories", desc: "14-day burn-off", active: false, prize: "$450" },
  { title: "Workout Days", desc: "21-day streak", active: true, prize: "$675" },
  { title: "Calories Consumed", desc: "7-day deficit", active: false, prize: "$225" },
  { title: "Step Count", desc: "Ongoing · weekly", active: true, prize: "$300" },
];

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800 shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />
      <div className="flex flex-1 w-full h-full flex-col space-y-2">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Open Challenges
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-xs px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-1" />
            5 available
          </p>
        </div>
        <div className="flex flex-col space-y-3 p-4">
          {challenges.map((c) => (
            <Row key={c.title} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  desc,
  active = false,
  prize,
}: {
  title: string;
  desc: string;
  active?: boolean;
  prize: string;
}) => {
  const [checked, setChecked] = useState(active);
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-muted dark:text-muted-dark text-xs font-semibold shadow-aceternity dark:bg-neutral-700 px-1.5 py-0.5 rounded-md w-fit">
          {title}
        </p>
        <p className="text-muted dark:text-muted-dark text-[10px] mt-0.5 pl-0.5">{desc}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-green-500">{prize}</span>
        <Switch checked={checked} setChecked={setChecked} />
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark" />
      </div>
    </div>
  );
};
