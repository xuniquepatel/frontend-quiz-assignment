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
    <div className="flex justify-end gap-3">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f1fb] text-[#2b6d95] shadow-[0_4px_12px_rgba(41,124,167,0.25)] ${
          isFirst ? "opacity-40" : "hover:bg-[#d3e8f7]"
        }`}
      >
        ←
      </button>
      {!isLast && (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f1fb] text-[#2b6d95] shadow-[0_4px_12px_rgba(41,124,167,0.25)] ${
            !canGoNext ? "opacity-40" : "hover:bg-[#d3e8f7]"
          }`}
        >
          →
        </button>
      )}
      {isLast && (
        <button
          onClick={onSubmit}
          disabled={!allAnswered}
          className={`ml-4 rounded-full px-10 py-2.5 text-sm font-medium shadow-[0_4px_12px_rgba(41,124,167,0.25)] ${
            allAnswered
              ? "bg-[#e2f1fb] text-[#2b6d95] hover:bg-[#d3e8f7]"
              : "bg-[#edf5fc] text-[#a7bfd2]"
          }`}
        >
          Submit
        </button>
      )}
    </div>
  );
}
