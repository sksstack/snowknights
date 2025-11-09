// UMD globals
const { useState } = React;
const { motion } = window.framerMotion; // ✅ correct UMD global

/* Minimal inline icons (SVG) */
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
  </svg>
);
const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function App() {
  const [open, setOpen] = useState(false);

  // Replace with your real Cal.com / Calendly link
  const SCHED_URL = "https://cal.com/your-handle/30min";

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="scroll-smooth bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <IconShield />
            </span>
            <span>SnowKnights Security</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">Services</a>
            <a href="#process" className="text-sm text-gray-700 hover:text-gray-900">Process</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">About</a>
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
              Book a call
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
              <a onClick={() => setOpen(false)} href="#services" className="py-2 text-gray-700">Services</a>
              <a onClick={() => setOpen(false)} href="#process" className="py-2 text-gray-700">Process</a>
              <a onClick={() => setOpen(false)} href="#about" className="py-2 text-gray-700">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-gray-700">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="py-20 text-center">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl font-semibold">
            Secure Your Creative Operations.
            <span className="block text-indigo-600">Achieve &amp; Maintain TPN Compliance.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We are qualified TPN Site &amp; Cloud Assessors helping EU vendors secure workflows and pass audits.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700">
              Book a free 30-min scoping call
            </a>
            <a href="#services" className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Explore services
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer (minimal for this basic version) */}
      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SnowKnights Security
      </footer>
    </div>
  );
}

/* Mount app */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
