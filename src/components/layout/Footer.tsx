export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex justify-center px-4 pb-10 pt-6 text-xs text-[#7395a9]"
    >
      <div className="w-full max-w-content flex items-center justify-between">
        <p>© {new Date().getFullYear()} The Wedding Company</p>
        <p>Crafted for frontend assignment only</p>
      </div>
    </footer>
  );
}
