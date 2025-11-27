"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scorePop } from "@/lib/animations";

type QuizResultProps = {
  score: number;
  onRestart: () => void;
};

export default function QuizResult({ score, onRestart }: QuizResultProps) {
  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      setDisplayScore(score);
    }, 450);

    return () => clearTimeout(t);
  }, [score]);

  const showPercent = displayScore > 0;
  const showStart = displayScore > 0;

  return (
    <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
      <button className="rounded-full bg-white px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-[#2b6d95] shadow-sm">
        Keep Learning!
      </button>

      <div className="mt-12 font-serif text-3xl font-semibold italic text-[#2b6d95] md:text-[34px]">
        Your Final score is
      </div>

      <motion.div
        variants={scorePop}
        initial="hidden"
        animate="visible"
        className="mt-6 flex items-end justify-center gap-3"
      >
        <div className="font-serif text-[110px] font-semibold leading-none text-[#2b6d95] md:text-[128px]">
          {displayScore}
        </div>
        {showPercent && (
          <span className="pb-6 font-serif text-4xl font-semibold text-[#2b6d95]">
            %
          </span>
        )}
      </motion.div>

      {showStart && (
        <button
          onClick={onRestart}
          className="mt-12 rounded-full bg-[#cfe8f7] px-12 py-3 text-sm font-medium text-[#2b6d95] shadow-sm hover:bg-[#bfdff3]"
        >
          Start Again
        </button>
      )}
    </div>
  );
}
