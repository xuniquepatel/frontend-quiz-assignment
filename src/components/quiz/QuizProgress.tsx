type QuizProgressProps = {
  total: number;
  currentIndex: number;
};

export default function QuizProgress({
  total,
  currentIndex,
}: QuizProgressProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-3 px-8 md:px-24">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="h-[3px] flex-1 rounded-full bg-[#d5e7f2]">
          <div
            className={`h-full rounded-full transition-all ${
              index <= currentIndex ? "bg-[#163b4b]" : "bg-transparent"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
