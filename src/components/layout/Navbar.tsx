import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-center pt-6">
      <nav className="flex w-full max-w-content items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-md backdrop-blur">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-600"
        >
          The Wedding Company
        </Link>
        <div className="flex items-center gap-6 text-xs font-medium text-[#496679]">
          <a href="#quiz" className="hover:text-brand-500">
            Quiz
          </a>
          <a href="#contact" className="hover:text-brand-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
