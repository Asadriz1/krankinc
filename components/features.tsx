import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "Live leaderboards that update in real time",
      description:
        "Every time any competitor's device syncs to Apple Health — Apple Watch, Oura, Garmin, anything — the leaderboard updates. Real-time, automatic, no one touches a button.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "Track your challenge right from your phone",
      description:
        "Your progress, your rank, and your prize pool — always in your pocket. Zero manual logging required.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Pick the competition that fits your goal",
      description:
        "Weight loss, active calories, workout days, or calorie intake. Compete in the category where you're strongest.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Every metric verified — no cheating possible",
      description:
        "Apple Health is the hub — it aggregates data from your Apple Watch, Oura Ring, Garmin, Whoop, and any connected app. Krank reads from that single verified source. Tamper-proof by design.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 overflow-hidden">
      <Heading as="h2">Everything built around your performance</Heading>
      <Subheading className="text-center">
        From entry to payout, every step of a Krank challenge is automated,
        transparent, and verified. You just have to show up and perform.
      </Subheading>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal style={{ top: 0, left: "-10%", width: "120%" }} />
        <GridLineHorizontal style={{ bottom: 0, left: "-10%", width: "120%" }} />
        <GridLineVertical style={{ top: "-10%", right: 0, height: "120%" }} />
        <GridLineVertical style={{ top: "-10%", left: 0, height: "120%" }} />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 lg:text-sm my-2">
      {children}
    </Subheading>
  );
};
