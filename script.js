// Pull React + Framer Motion from UMD globals
const { useState } = React;
const { motion } = window.framerMotion;

/* --- Tiny inline icon components (SVG) --- */
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
  </svg>
);
const IconFileCheck = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);
const IconRefresh = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 3v6h-6" />
  </svg>
);
const IconCpu = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);
const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* --- App --- */
function App() {
  const [open, setOpen] = useState(false);

  // Replace with your real Cal.com or Calendly link (e.g., https://cal.com/snowknights/30min)
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

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">Services</a>
            <a href="#process" className="text-sm text-gray-700 hover:text-gray-900">Process</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">About</a>
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
              Book a call
            </a>
          </div>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile menu */}
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
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
          <motion.div {...fadeUp}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-indigo-600 text-white"><IconShield /></span>
              Content Security & TPN Compliance for Media Vendors
            </div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Secure Your Creative Operations.
              <span className="block text-indigo-600">Achieve &amp; Maintain TPN Compliance.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 md:text-lg">
              We are qualified TPN Site &amp; Cloud Assessors helping Dutch and EU vendors harden workflows, pass audits,
              and stay ahead of AI-era threats.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700">
                Book a free 30-min scoping call <IconArrowRight />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Explore services
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:justify-self-end">
            <div className="relative rounded-3xl border border-gray-100 p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="mb-2 text-xs font-medium text-gray-500">Trusted Partner Network</div>
                  <div className="text-lg font-semibold text-gray-900">TPN Readiness</div>
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-indigo-100">
                    <div className="h-2 w-2/3 rounded-full bg-indigo-600" />
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="mb-2 text-xs font-medium text-gray-500">Incident Response</div>
                  <div className="text-lg font-semibold text-gray-900">Breach Playbooks</div>
                  <div className="mt-3 text-xs text-gray-500">For pre-release piracy and leaks</div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="mb-2 text-xs font-medium text-gray-500">AI Security</div>
                  <div className="text-lg font-semibold text-gray-900">EU AI Act Advisory</div>
                  <div className="mt-3 text-xs text-gray-500">Governance for media pipelines</div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <div className="mb-2 text-xs font-medium text-gray-500">Assessment</div>
                  <div className="text-lg font-semibold text-gray-900">Official TPN Audit</div>
                  <div className="mt-3 text-xs text-gray-500">Site &amp; Cloud Assessors</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">A Clear Path to Compliance</h2>
            <p className="mt-3 text-gray-600">End-to-end coverage: from readiness to official assessment and ongoing compliance.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div {...fadeUp} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600"><IconFileCheck /></div>
              <h3 className="text-base font-semibold text-gray-900">TPN Readiness &amp; Gap Analysis</h3>
              <p className="mt-2 text-sm text-gray-600">Deep assessment against TPN controls with a prioritized roadmap. Deliverable: Gap Report &amp; Risk Register.</p>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600"><IconRefresh /></div>
              <h3 className="text-base font-semibold text-gray-900">Implementation &amp; Remediation</h3>
              <p className="mt-2 text-sm text-gray-600">Hands-on support to close gaps—controls, policies, procedures—ready for audit.</p>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600"><IconShield /></div>
              <h3 className="text-base font-semibold text-gray-900">Official TPN Assessment</h3>
              <p className="mt-2 text-sm text-gray-600">Qualified Site &amp; Cloud Assessors to conduct your formal audit and certification.</p>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600"><IconCpu /></div>
              <h3 className="text-base font-semibold text-gray-900">AI &amp; Ongoing Compliance</h3>
              <p className="mt-2 text-sm text-gray-600">Annual check-ins, training refreshers, vendor risk oversight, and AI workflow governance.</p>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            <h4 className="text-sm font-semibold text-gray-900">Specialized Advisory</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>AI Security for Media Pipelines: Governance aligned with EU AI Act.</li>
              <li>Incident Response &amp; Digital Forensics: Pre-release leak containment &amp; RCA.</li>
              <li>Security Policy &amp; Staff Training: Practical, audit-ready documentation.</li>
              <li>Vendor Risk Management: Oversight for your third-party ecosystem.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">How We Work Together</h2>
            <p className="mt-3 text-gray-600">Clear, efficient, and collaborative—from discovery to audit and beyond.</p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery (30–90 min)", desc: "Complimentary call to map workflows, clients, and posture." },
              { step: "02", title: "TPN Gap Analysis (1–2 wks)", desc: "On-site & remote review of physical, network, endpoint, and ops controls." },
              { step: "03", title: "Roadmap Presentation", desc: "Gaps categorized by risk (H/M/L) with actionable recommendations." },
              { step: "04", title: "Implementation & Audit", desc: "Hands-on remediation and official TPN assessment by qualified assessors." }
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="text-xs font-semibold text-indigo-600">Step {s.step}</div>
                <div className="mt-1 text-base font-semibold text-gray-900">{s.title}</div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700">
              Schedule a discovery call <IconArrowRight />
            </a>
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900">Learn about us</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">About SnowKnights Security</h2>
            <p className="mt-3 text-gray-600">
              We are specialists dedicated to media content security. Based in Amsterdam, we help creative companies navigate the
              MPA/TPN Content Security Best Practices with practical, workflow-friendly controls.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li><span className="font-semibold">Mission:</span> Make best-in-class security achievable so you can focus on creating.</li>
              <li><span className="font-semibold">Expertise:</span> Deep hands-on with TPN v5.3.1 across physical, site, and cloud workflows.</li>
              <li><span className="font-semibold">Approach:</span> Collaborative partner translating complex controls into practical steps.</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-sm font-semibold text-gray-900">Credentials &amp; Experience</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Qualified TPN Site &amp; Cloud Assessors.</li>
                <li>Advised vendors on TPN and MPA frameworks; workflow hardening for post &amp; VFX.</li>
                <li>EU AI Act advisory; alignment with ISO 27001 / NIST.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:pl-10">
            <div className="rounded-3xl border border-gray-100 p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">Executive Summary</div>
              <p className="mt-2 text-sm text-gray-600">
                Content security is a core pillar of business continuity and trust. Studios mandate rigorous TPN compliance while
                pre-release piracy and AI create new risks. We’re not just auditors—we’re strategic partners who secure your
                operations, help you achieve and maintain compliance, and future-proof workflows.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-gray-50 p-4"><span className="font-semibold">The Need</span><p className="mt-1 text-gray-600">Vendor security proof is table-stakes to work with Netflix, Disney, WBD.</p></div>
                <div className="rounded-xl bg-gray-50 p-4"><span className="font-semibold">Failure Costs</span><p className="mt-1 text-gray-600">Lost contracts, reputational damage, operational chaos.</p></div>
                <div className="rounded-xl bg-gray-50 p-4"><span className="font-semibold">Our Edge</span><p className="mt-1 text-gray-600">End-to-end coverage, accredited assessors, media-first focus.</p></div>
                <div className="rounded-xl bg-gray-50 p-4"><span className="font-semibold">Future-Ready</span><p className="mt-1 text-gray-600">AI security governance and leak response expertise.</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Contact Us</h2>
            <p className="mt-3 text-gray-600">Request a complimentary 30-minute TPN Readiness Scoping Session.</p>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
            <motion.form {...fadeUp} onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Full name</label>
                <input required placeholder="Jane Doe" className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-indigo-600" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Work email</label>
                <input required type="email" placeholder="jane@studio.com" className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-indigo-600" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Company</label>
                <input placeholder="Studio / Vendor name" className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-indigo-600" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Message</label>
                <textarea rows="4" placeholder="Tell us about your workflows, clients, and timelines" className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-indigo-600"></textarea>
              </div>
              <a href={SCHED_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700">
                Request scoping call <IconArrowRight />
              </a>
              <p className="text-center text-xs text-gray-500">Prefer email? Submit the form above. Or <a className="underline" href={SCHED_URL} target="_blank" rel="noopener noreferrer">schedule instantly</a>.</p>
            </motion.form>

            <motion.div {...fadeUp} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">Next Steps</div>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700">
                <li>We schedule a discovery call.</li>
                <li>You receive a detailed SoW &amp; proposal.</li>
                <li>We finalize scope and kick off.</li>
              </ol>
              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                <div className="font-semibold text-gray-900">Amsterdam • Netherlands</div>
                <div className="mt-1">Serving EU production partners, post, VFX, and localization vendors.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white"><IconShield /></span>
            <span>© {new Date().getFullYear()} SnowKnights Security</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Mount app */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
