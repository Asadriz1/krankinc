"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Badge onClick={() => router.push("/contact")}>
          Real money. Real health data. Real consequences.
        </Badge>
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>Compete. Perform. Win real money.</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          Pay to enter. Your Apple Watch, Oura Ring, Garmin, or any device
          connected to Apple Health tracks your performance automatically.
          Winners split the prize pool. No logging, no disputes — just results.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button as={Link} href="/contact">
          Join the Waitlist
        </Button>
        <Button
          variant="simple"
          as={Link}
          href="/contact"
          className="flex space-x-2 items-center group"
        >
          <span>Learn more</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      {/* Stats row — lets the numbers do the talking */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
        className="mt-20 w-full max-w-3xl mx-auto grid grid-cols-3 divide-x divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden relative z-10"
      >
        {[
          { value: "$5–$500+", label: "Entry fees per challenge" },
          { value: "90%", label: "Of every prize pool paid out" },
          { value: "0%", label: "Randomness. Pure skill." },
        ].map((s) => (
          <div key={s.label} className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm py-6 text-center">
            <p className="text-2xl md:text-3xl font-black text-black dark:text-white">{s.value}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-widest px-2">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
