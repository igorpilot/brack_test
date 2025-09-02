"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroesForCarousel } from "@/data/heroesInfo";

export default function HeroCarousel() {
  const [angle, setAngle] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.3);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px]  overflow-hidden flex justify-center">
      <div
        className="absolute"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        {heroesForCarousel.map((hero, i) => {
          const itemAngle = (360 / heroesForCarousel.length) * i;
          return (
            <div
              key={hero.name}
              className="absolute w-40 sm:w-44 xs:w-32 h-64 sm:h-72 xs:h-52 rounded-xl overflow-hidden shadow-2xl group"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(300px)`,
              }}
            >
              <Image
                src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${hero.id}.jpg`}
                alt={hero.name}
                width={240}
                height={360}
                loading="eager"
                unoptimized
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
