import { cn } from "@/lib/utils";
import {
  IconHeartbeat,
  IconTrophy,
  IconShieldCheck,
  IconCurrencyDollar,
  IconChartBar,
  IconBolt,
  IconUsers,
  IconLock,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Works with every device you own",
      description:
        "Apple Watch, Oura Ring, Garmin, Whoop, Fitbit — if it writes to Apple Health, Krank reads it. One app, every device, zero manual logging.",
      icon: <IconHeartbeat />,
    },
    {
      title: "Skill-based, not luck",
      description:
        "The best performer wins. Period. Your entry fee goes into a prize pool that's paid out based entirely on results.",
      icon: <IconTrophy />,
    },
    {
      title: "Real entry fees, real payouts",
      description:
        "Pay to enter. The top performers split 90% of the prize pool, paid directly to their bank account. The competition runs itself.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Live leaderboards",
      description:
        "Rankings update every time a competitor's HealthKit syncs. No stale data, no waiting for the next check-in.",
      icon: <IconChartBar />,
    },
    {
      title: "Multiple challenge types",
      description:
        "Weight loss, active calories, workout days, step count — compete in the category that plays to your strengths.",
      icon: <IconBolt />,
    },
    {
      title: "Compete with anyone",
      description:
        "Challenge your gym, your office, your group chat, or strangers worldwide. Every challenge is open to anyone with an iPhone.",
      icon: <IconUsers />,
    },
    {
      title: "Instant payouts via Stripe",
      description:
        "When the challenge closes and scores are verified, winners get paid out automatically. No claiming, no waiting.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Fair and transparent",
      description:
        "The rules are set before the challenge starts. The data comes from Apple. The math is simple. There's nothing to dispute.",
      icon: <IconLock />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
