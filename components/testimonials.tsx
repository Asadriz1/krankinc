import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import { TestimonialColumnContainer } from "./testimonial-column-container";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Early athletes are already talking</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
        From gym rats to weekend warriors — here&apos;s what people on the
        waitlist are saying about Krank.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jake M.",
    quote: "I've tried every fitness app. None of them made me actually show up the way a $50 entry fee does. Lost 8 lbs in the first challenge.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Weight loss competitor",
  },
  {
    name: "Sarah K.",
    quote: "The HealthKit integration is genius. No one can fake their numbers. I finished #2 in the calorie burn challenge and walked away with $280.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Active calories competitor",
  },
  {
    name: "Marcus T.",
    quote: "Our office started a 30-day step count challenge on Krank. 12 people in. It turned our whole team into walkers.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Step count challenger",
  },
  {
    name: "Priya R.",
    quote: "Finally a fitness app where you actually get something back for performing. The leaderboard updates are addictive in the best way.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Multi-challenge competitor",
  },
  {
    name: "Derek W.",
    quote: "Gym bro behavior but with financial incentives. I've hit the gym 6 days a week for the first time in my life because the prize pool keeps growing.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Workout days champion",
  },
  {
    name: "Aisha L.",
    quote: "I was skeptical about the real money part. But payouts just go through Stripe — it's instant and totally transparent. Won $175 my first month.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Weight loss competitor",
  },
  {
    name: "Chris V.",
    quote: "Being ranked against real people who put money on the line changed how hard I train. It's the accountability I always needed.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Active calories competitor",
  },
  {
    name: "Tanya B.",
    quote: "I've recommended Krank to everyone in my running group. We're running a custom step challenge next month and 18 people are already in.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Step count challenger",
  },
  {
    name: "Jordan H.",
    quote: "No app has ever made me track my calories this closely. When $100 is on the line, you start caring about every single number.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Calorie challenge competitor",
  },
  {
    name: "Leo C.",
    quote: "I finished last in my first challenge. Signed up for two more the same day. That's how competitive this gets.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Workout days challenger",
  },
  {
    name: "Mia F.",
    quote: "The fact that Apple Health is the referee is what sold me. No disputes, no drama, no one gaming the system.",
    src: "https://i.pravatar.cc/150?img=15",
    designation: "Weight loss competitor",
  },
  {
    name: "Sam P.",
    quote: "The live leaderboard is what makes it. Watching my rank change in real time after a workout is a dopamine hit I didn't know I needed.",
    src: "https://i.pravatar.cc/150?img=18",
    designation: "Active calories competitor",
  },
  {
    name: "Nina O.",
    quote: "I used to quit every fitness challenge in week two. Something about having real money on the line makes you push through.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Multi-challenge competitor",
  },
  {
    name: "Tyler J.",
    quote: "Best $25 I ever spent. Dropped 5.5 lbs, won $400, and got the most consistent month of training in two years.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Weight loss champion",
  },
  {
    name: "Rachel M.",
    quote: "Krank turned fitness from a chore into a competition. I check the leaderboard more than I check social media.",
    src: "https://i.pravatar.cc/150?img=20",
    designation: "Step count competitor",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> & Testimonial) {
  const animationDelay = useMemo(() => {
    const delays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];
    return delays[Math.floor(Math.random() * delays.length)];
  }, []);

  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-10 w-10 rounded-full"
            alt={name}
          />
          <div>
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-300">{name}</h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">{designation}</p>
          </div>
        </div>
        <p className="text-base text-muted mt-4 dark:text-muted-dark">&ldquo;{quote}&rdquo;</p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials.concat(testimonials).map((testimonial, idx) => (
        <Testimonial
          name={testimonial.name}
          quote={testimonial.quote}
          src={testimonial.src}
          designation={testimonial.designation}
          key={idx}
          className={containerClassName?.(idx % testimonials.length)}
        />
      ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: T[], numParts: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) result[index] = [];
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  const columns = splitArray(testimonials, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);
  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
