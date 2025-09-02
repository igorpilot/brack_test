"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { HeroCarousel } from "@/components/Heroes/HeroesCarousel";
import { HomeIntro } from "@/components/HomeIntro";

export default function Home() {
  const [introDone, setIntroDone] = useState<boolean>(false);
  const handleKeyDown = useCallback(() => setIntroDone(true), []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="relative bg-transparent text-white overflow-hidden">
      {!introDone && <HomeIntro onEnd={() => setIntroDone(true)} />}
      <div className="absolute inset-0 bg-stars z-0"></div>
      <div className="relative z-10 flex flex-col gap-10 justify-start items-center h-screen text-center pt-10 bg-gray-900/80">
        <h1 className="text-yellow-400 text-4xl md:text-6xl font-bold">
          AllianceBook Heroes
        </h1>
        <HeroCarousel />
        <Link
          href={ROUTES.HEROES_LIST}
          className="px-3 py-2 rounded transition-all duration-300 text-yellow-400 hover:text-black hover:bg-yellow-400"
        >
          SHOW ALL HEROES
        </Link>
      </div>
    </div>
  );
}
