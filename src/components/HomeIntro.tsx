"use client";
import { useEffect, useState } from "react";
import { introTexts } from "@/data/introTexts";

export default function HomeIntro({ onEnd }: { onEnd: () => void }) {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onEnd(), 1500);
    }, 6500);

    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden transition-opacity duration-[1500ms] ${fadeOut ? "opacity-0" : "opacity-100"}`}
      onClick={() => {
        setFadeOut(true);
        onEnd();
      }}
    >
      <div className="intro-wrapper relative w-full h-full perspective-[400px]">
        <div className="crawl absolute bottom-[-100%] w-full text-center text-yellow-400 text-3xl font-bold leading-snug animate-crawl">
          {introTexts.map((line, i) => (
            <p key={i} className="mb-6">
              {line}
            </p>
          ))}
        </div>
        <div className="absolute right-10 bottom-10">
          <p>Click to skip intro</p>
        </div>
      </div>
    </div>
  );
}
