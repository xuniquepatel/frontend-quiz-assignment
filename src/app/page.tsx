import QuizShell from "@/components/quiz/QuizShell";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-[#b7e3ff] via-[#c8f0ff] to-[#b9e8ff] px-4 py-8 md:py-12">
      <div className="w-full max-w-6xl rounded-[44px] bg-[rgba(255,255,255,0.9)] p-[1px] shadow-[0_40px_90px_rgba(49,139,181,0.4)]">
        <div className="rounded-[36px] bg-[#f5fbff] px-6 py-10 md:px-16 md:py-14">
          <QuizShell />
        </div>
      </div>
    </main>
  );
}
