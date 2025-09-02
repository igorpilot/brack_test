import React from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import HeroCarousel from "@/components/Heroes/HeroesCarousel";

export default function Home() {
  
  return (
    <div className="relative bg-transparent text-white overflow-hidden">
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
