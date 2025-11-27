"use client";

type QuizOptionsListProps = {
  options: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

const optionBg = [
  "bg-linear-to-r from-[#f7fdff] to-[#f9feff]",
  "bg-linear-to-r from-[#e8f6ff] to-[#f1fbff]",
  "bg-linear-to-r from-[#d4efff] to-[#e9f8ff]",
];

type AnswerOptionProps = {
  label: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
};

function AnswerOption({ label, index, isActive, onClick }: AnswerOptionProps) {
  const base =
    "w-full rounded-2xl border px-8 py-4 text-sm md:text-base text-[#2b6d95] transition";
  const bg = optionBg[index] ?? optionBg[optionBg.length - 1];
  const state = isActive
    ? "border-[#2b6d95] shadow-[0_0_0_1px_#2b6d95]"
    : "border-[#d6e8f5] hover:border-[#aac7df]";

  return (
    <button onClick={onClick} className={[base, bg, state].join(" ")}>
      {label}
    </button>
  );
}

export default function QuizOptionsList({
  options,
  selectedIndex,
  onSelect,
}: QuizOptionsListProps) {
  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <AnswerOption
          key={option}
          label={option}
          index={index}
          isActive={selectedIndex === index}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
