"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconTrophy, IconFlame, IconCheck } from "@tabler/icons-react";

const formSchema = z.object({
  name: z
    .string({ required_error: "What do we call you?" })
    .min(1, "What do we call you?"),
  email: z
    .string({ required_error: "We need your email" })
    .email("That doesn't look like a valid email")
    .min(1, "We need your email"),
  goal: z.string().optional(),
});

export type WaitlistUser = z.infer<typeof formSchema>;

const goals = [
  "Lose weight & get lean",
  "Build muscle & strength",
  "Burn more calories",
  "Stay consistent with workouts",
  "Just here to compete",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<WaitlistUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      goal: "",
    },
  });

  async function onSubmit(values: WaitlistUser) {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      form.setError("root", { message: "Something went wrong. Try again." });
    }
  }

  if (submitted) {
    return (
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mx-auto mb-6">
            <IconCheck className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-black dark:text-white mb-3">
            You&apos;re on the list.
          </h2>
          <p className="text-muted dark:text-muted-dark text-base max-w-sm mx-auto">
            The leaderboard is forming. We&apos;ll hit you when it&apos;s time to compete.
            Get ready.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <IconFlame className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-black dark:text-white">
              KRANK
            </span>
            <span className="text-sm text-muted dark:text-muted-dark">
              · Compete. Perform. Win.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-6">
              <IconTrophy className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs font-bold tracking-widest text-black dark:text-white uppercase">
                Early Access
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-black dark:text-white leading-tight">
              Secure your spot.
              <br />
              <span className="text-muted dark:text-muted-dark font-normal">
                The competition starts soon.
              </span>
            </h1>
            <p className="mt-4 text-muted dark:text-muted-dark text-sm max-w-sm">
              Join thousands of athletes getting early access to Krank — the
              first skill-based fitness competition platform verified by Apple
              Health.
            </p>
          </div>

          <div className="py-8">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Full Name
                    </label>
                    <FormControl>
                      <div className="mt-2">
                        <input
                          id="name"
                          type="text"
                          placeholder="Jake Mitchell"
                          className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-2.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Email Address
                    </label>
                    <FormControl>
                      <div className="mt-2">
                        <input
                          id="email"
                          type="email"
                          placeholder="jake@example.com"
                          className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-2.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="goal"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      What&apos;s your main fitness goal?{" "}
                      <span className="text-neutral-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <FormControl>
                      <div className="mt-2">
                        <select
                          id="goal"
                          className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-2.5 shadow-aceternity text-black dark:text-white focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm appearance-none"
                          {...field}
                        >
                          <option value="">Select a goal...</option>
                          {goals.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <p className="text-sm text-red-500 text-center">
                  {form.formState.errors.root.message}
                </p>
              )}

              <div className="pt-2">
                <Button
                  className="w-full"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Securing..." : "Secure My Spot"}
                </Button>
              </div>

              <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
                No spam. We&apos;ll only reach out when it&apos;s time to compete.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Form>
  );
}
