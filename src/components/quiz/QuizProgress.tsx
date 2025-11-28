type QuizProgressProps = {
  total: number;
  currentIndex: number;
};

export default function QuizProgress({
  total,
  currentIndex,
}: QuizProgressProps) {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex w-full max-w-xl items-center gap-6">
        {Array.from({ length: total }).map((_, index) => (
          <div key={index} className="h-[3px] flex-1 rounded-full bg-[#deebf5]">
            <div
              className={`h-full rounded-full transition-all ${
                index <= currentIndex ? "bg-[#253b45]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
