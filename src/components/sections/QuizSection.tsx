"use client"

import QuizShell from "@/components/quiz/QuizShell"

export default function QuizSection() {
  return (
    <section id="quiz" className="flex justify-center px-4 py-16 md:py-24">
      <div className="w-full max-w-content flex justify-center">
        <QuizShell />
      </div>
    </section>
  )
}
