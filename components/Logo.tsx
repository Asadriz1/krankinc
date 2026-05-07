"use client";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex items-center gap-2 text-sm mr-4 px-2 py-1 relative z-20"
    >
      {/* K-bolt mark */}
      <div className="relative h-7 w-7 flex items-center justify-center rounded-lg bg-black dark:bg-white flex-shrink-0">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lightning bolt */}
          <path
            d="M11.5 2L5 11h6l-2.5 7L17 9h-6l.5-7z"
            fill="white"
            className="dark:fill-black"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-black tracking-widest text-black dark:text-white text-sm uppercase">
        Krank
      </span>
    </Link>
  );
};
