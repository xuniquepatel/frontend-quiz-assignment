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
      className="relative w-full max-w-5xl rounded-[44px] border border-[#d9ecfa] bg-[#f6fcff] p-8 shadow-[0_32px_80px_rgba(66,146,190,0.32)] md:p-12"
    >
      {!isSubmitted && (
        <>
          <div className="text-center">
            <h2 className="font-serif text-[40px] font-semibold italic tracking-tight text-[#2b78a5] md:text-[52px]">
              Test Your Knowledge
            </h2>
            <p className="mt-4 inline-block rounded-full bg-white/80 px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-[#94aabd]">
              Answer all questions to see your results
            </p>
          </div>

          <QuizProgress total={questions.length} currentIndex={currentIndex} />

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                variants={questionSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="space-y-6"
              >
                <div className="rounded-2xl bg-[#d5ecfb] px-8 py-5 text-center text-sm font-medium text-[#2b6d95] md:text-base">
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

          <QuizNavigation
            currentIndex={currentIndex}
            total={questions.length}
            canGoNext={selected !== null}
            allAnswered={allAnswered}
            onPrev={handlePrev}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />

          {currentIndex === 0 && (
            <div className="pointer-events-none absolute -bottom-4 left-8 hidden flex-col items-center md:flex">
              <div className="mb-2 rounded-full bg-white px-4 py-1 text-[11px] font-medium text-[#2a6e93] shadow-md">
                Best of Luck!
              </div>
              <div className="h-20 w-16 rounded-t-full bg-gradient-to-t from-[#ffd4e0] via-[#ffe9f4] to-[#ffffff]" />
            </div>
          )}
        </>
      )}

      {isSubmitted && <QuizResult score={score} onRestart={handleRestart} />}
    </motion.div>
  );
}
