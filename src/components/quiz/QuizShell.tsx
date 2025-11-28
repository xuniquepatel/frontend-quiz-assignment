"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/lib/quizData";
import { cardFade, questionSlide } from "@/lib/animations";
import QuizProgress from "./QuizProgress";
import QuizOptionsList from "./QuizOptionsList";
import QuizNavigation from "./QuizNavigation";
import QuizResult from "./QuizResult";

export default function QuizShell() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(62);

  const allAnswered = useMemo(
    () => answers.every((a) => a !== null),
    [answers]
  );

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = optionIndex;
      return copy;
    });
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) return;
    if (answers[currentIndex] === null) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setScore(62);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentIndex(0);
    setIsSubmitted(false);
  };

  const currentQuestion = questions[currentIndex];
  const selected = answers[currentIndex];

  return (
    <motion.div
      variants={cardFade}
      initial="hidden"
      animate="visible"
      className="relative w-full"
    >
      {!isSubmitted && (
        <>
          <div className="text-center">
            <h2 className="font-serif text-[40px] font-semibold italic tracking-tight text-[#2b78a5] md:text-[52px]">
              Test Your Knowledge
            </h2>
            <p className="mt-6 inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-2 text-[11px] uppercase tracking-[0.25em] text-[#a1b6c9]">
              Answer all questions to see your results
            </p>
          </div>

          <QuizProgress total={questions.length} currentIndex={currentIndex} />

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.id}
                  variants={questionSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="rounded-2xl bg-[#d7ecfb] px-10 py-5 text-center text-sm font-medium text-[#2b6d95] md:text-base">
                    {currentQuestion.id}. {currentQuestion.text}
                  </div>
                  <QuizOptionsList
                    options={currentQuestion.options}
                    selectedIndex={selected}
                    onSelect={handleSelect}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-3xl">
              <QuizNavigation
                currentIndex={currentIndex}
                total={questions.length}
                canGoNext={selected !== null}
                allAnswered={allAnswered}
                onPrev={handlePrev}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            </div>
          </div>

          {currentIndex === 0 && (
            <div className="pointer-events-none absolute -bottom-10 left-6 hidden flex-col items-center md:flex">
              <div className="mb-3 rounded-full bg-white px-4 py-1 text-[11px] font-medium text-[#2a6e93] shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
                Best of Luck !
              </div>
              <div className="h-24 w-18 rounded-t-[999px] bg-linear-to-t from-[#ffd4e0] via-[#ffe9f4] to-[#ffffff] shadow-[0_-4px_12px_rgba(0,0,0,0.1)]" />
            </div>
          )}
        </>
      )}

      {isSubmitted && <QuizResult score={score} onRestart={handleRestart} />}
    </motion.div>
  );
}
