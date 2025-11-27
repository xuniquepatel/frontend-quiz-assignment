"use client";

type QuizNavigationProps = {
  currentIndex: number;
  total: number;
  canGoNext: boolean;
  allAnswered: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

export default function QuizNavigation({
  currentIndex,
  total,
  canGoNext,
  allAnswered,
  onPrev,
  onNext,
  onSubmit,
}: QuizNavigationProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  return (
    <div className="mt-10 flex justify-end gap-3">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9edf8] text-[#1d607e] ${
          isFirst ? "opacity-40" : "hover:bg-[#c5e0f1]"
        }`}
      >
        ←
      </button>
      {!isLast && (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9edf8] text-[#1d607e] ${
            !canGoNext ? "opacity-40" : "hover:bg-[#c5e0f1]"
          }`}
        >
          →
        </button>
      )}
      {isLast && (
        <button
          onClick={onSubmit}
          disabled={!allAnswered}
          className={`rounded-full px-10 py-3 text-sm font-medium ${
            allAnswered
              ? "bg-[#d9edf8] text-[#1d607e] hover:bg-[#c5e0f1]"
              : "bg-[#e3f1fa] text-[#9db8c8]"
          }`}
        >
          Submit
        </button>
      )}
    </div>
  );
}
