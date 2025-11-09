// ----- Config: set your scheduler once -----
const SCHED_URL = "https://calendly.com/snowknights/30min";

// ----- Mobile menu toggle -----
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✕";
  });
}

// ----- Year in footer -----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- Set all CTA links to scheduler -----
document.querySelectorAll(".cta-sched").forEach((el) => {
  el.setAttribute("href", SCHED_URL);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

// ----- Reveal-on-scroll with IntersectionObserver -----
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "-100px 0px -50px 0px", threshold: 0.05 })
  : null;

document.querySelectorAll(".reveal").forEach((el) => {
  if (io) io.observe(el);
  else el.classList.add("visible"); // fallback
});
