import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Lock,
  Film,
  CheckCircle,
  Server,
  Cpu,
  Globe,
  ChevronRight,
  Menu,
  X,
  Award,
  Zap,
  Layout,
  FileText,
  Mail,
  Activity,
  Eye,
  Database,
  Check,
  MapPin,
  Mic,
  Brain,
  RefreshCw,
  FolderGit2,
  HelpCircle,
  Plus,
  Minus,
  Briefcase,
  Cloud,
  ShieldCheck,
  Clapperboard,
  Loader2
} from 'lucide-react';

/* SnowKnights Security - Single Page Application
  Theme: Dark, Cyber-Security, Media-Centric, Professional yet Creative
  State: Final Version - Cleaned of Duplicate Exports/Imports
*/

// --- SHARED LAYOUT CLASS ---
// Ensures strict alignment across all sections
const layoutClass = "w-full max-w-7xl mx-auto px-6";

// --- Component: Hero Badge with Animated Text Switching ---
const HeroBadge = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    "TPN Compliance Experts • Amsterdam",
    "Content Security for Media Vendors",
    "Achieve & Maintain TPN Compliance"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-widest overflow-hidden w-full max-w-[360px]">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
      <span key={index} className="animate-[fade-in_0.5s_ease-out] whitespace-nowrap overflow-hidden text-ellipsis">
        {phrases[index]}
      </span>
    </div>
  );
};

// --- NEW HERO VISUAL: Realistic Cyber Shield ---
const CyberShield = () => {
  const sizeClass = "w-[320px] h-[320px] max-w-full";

  return (
    <div className={`relative ${sizeClass} flex items-center justify-center animate-[float_6s_ease-in-out_infinite]`}>
      {/* 1. Deep Atmospheric Background Glow */}
      <div className="absolute inset-0 bg-cyan-900/40 blur-[60px] rounded-full animate-pulse"></div>

      {/* 2. Outer 'Mechanical' Ring with depth and circuits */}
      <div className="absolute inset-0 rounded-full border-4 border-slate-800/80 bg-slate-950/80 shadow-[inset_0_0_30px_rgba(0,0,0,1),0_0_20px_rgba(6,182,212,0.2)] overflow-hidden flex items-center justify-center">
        {/* Subtle circuit pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%),repeating-linear-gradient(45deg,#06b6d4_0px,#06b6d4_1px,transparent_1px,transparent_10px)]"></div>
        {/* Rotating mechanical sub-ring */}
        <div className="absolute inset-2 border-2 border-dashed border-slate-700/50 rounded-full animate-[spin-reverse-slow_30s_linear_infinite]"></div>
      </div>

      {/* 3. Middle Energy Scanner Rings */}
      <div className="absolute inset-8 rounded-full border-[3px] border-cyan-500/30 animate-[spin-slow_20s_linear_infinite] shadow-[0_0_15px_rgba(6,182,212,0.3)]" style={{ borderStyle: 'dashed', borderDasharray: '10, 20' }}></div>
      <div className="absolute inset-12 rounded-full border-[2px] border-purple-500/30 animate-[spin-reverse-slow_15s_linear_infinite] shadow-[0_0_15px_rgba(168,85,247,0.3)]" style={{ borderStyle: 'dotted', borderDasharray: '5, 10' }}></div>

      {/* 4. Inner Reactor Core with Hex Pattern & Scanner Sweep */}
      <div className="absolute inset-20 rounded-full bg-slate-900/90 border-4 border-cyan-800/80 flex items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(6,182,212,0.5)] animate-[pulse-glow_4s_ease-in-out_infinite]">
        {/* Hex background pattern */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
        {/* Scanning light sweep effect */}
        <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-cyan-400/20 to-transparent animate-[spin-slow_4s_linear_infinite] opacity-80"></div>
      </div>

      {/* 5. Central Crystal Shield Emblem */}
      <div className="relative z-10 group cursor-default">
        {/* Core glow */}
        <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full animate-pulse"></div>

        {/* The Shield Icon - Crystalline look */}
        <div className="relative z-20 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-105 transition-transform duration-300">
          <Shield
            className="w-24 h-24 text-cyan-50 fill-cyan-500/30"
            strokeWidth={1.5}
            style={{ filter: 'drop-shadow(0px 0px 4px rgba(6,182,212,0.8))' }}
          />
          {/* Inner highlight for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 clip-path-shield pointer-events-none"></div>
        </div>
      </div>

      {/* Decorative Data Nodes */}
      <div className="absolute top-8 right-4 flex flex-col gap-1 items-end opacity-60">
        <div className="w-12 h-[2px] bg-cyan-800"></div>
        <div className="w-8 h-[2px] bg-cyan-500/80 animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 left-4 flex flex-col gap-1 items-start opacity-60">
        <div className="w-10 h-[2px] bg-purple-800"></div>
        <div className="w-14 h-[2px] bg-purple-500/80 animate-pulse"></div>
      </div>
    </div>
  );
};

// --- Visual Effect Component: NetworkSnowBackground ---
const NetworkSnowBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = width < 768 ? 40 : 80;
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow horizontal movement
        this.vy = (Math.random() * 0.5) + 0.2; // Falling down like snow
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.y > height) this.y = 0;
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
      }

      draw() {
        ctx.fillStyle = 'rgba(100, 200, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw connections (Network Effect)
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

// --- Main Application Component ---
const SnowKnightsApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    interest: 'Full TPN Readiness',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FIX FOR WHITE SPACE: Force Body Background ---
  useEffect(() => {
    document.body.style.backgroundColor = '#020617'; // Force dark background on body
    document.body.style.margin = '0';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.overflowX = '';
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // SIMULATION MODE
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  // Updated Nav Links
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">

      {/* Custom Styles */}
      <style>{`
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
          60% { clip-path: inset(15% 0 80% 0); transform: translate(-1px, -2px); }
          80% { clip-path: inset(55% 0 10% 0); transform: translate(1px, 2px); }
          100% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 1px); }
        }
        .glitch-text {
          position: relative;
          color: white;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #020617;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 #06b6d4;
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
          opacity: 0.7;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 #a855f7;
          animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
          opacity: 0.7;
        }
        @keyframes reveal-block-anim {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
        @keyframes reveal-content-anim {
          0% { opacity: 0; }
          49% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 1; }
        }
        .reveal-container {
          position: relative;
          display: inline-block;
        }
        .reveal-block {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: #06b6d4;
          z-index: 2;
          animation: reveal-block-anim 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation-delay: var(--delay, 0s);
        }
        .reveal-content {
          opacity: 0;
          animation: reveal-content-anim 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation-delay: var(--delay, 0s);
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1); }
          50% { box-shadow: 0 0 50px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scan-sweep {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        .clip-path-shield {
          clip-path: path('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z');
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <NetworkSnowBackground />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        {/* FIXED: layoutClass for consistent alignment */}
        <div className={`${layoutClass} flex justify-between items-center`}>
          <a href="#" onClick={scrollToTop} className="text-2xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
              SnowKnights Security
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendly.com/snowknights/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all text-sm font-bold tracking-wider"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Nav Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-cyan-400"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendly.com/snowknights/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-cyan-400 border border-cyan-500/50 rounded-full py-2 text-center mt-2"
            >
              Book a call
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center min-h-screen overflow-hidden">
        {/* FIXED: layoutClass */}
        <div className={`${layoutClass} relative z-10 flex flex-col md:flex-row items-center gap-16`}>
          <div className="w-full md:w-1/2 text-left relative z-20">
            <div className="reveal-container mb-6" style={{ "--delay": "0.2s" }}>
              <div className="reveal-block"></div>
              <HeroBadge />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="block mb-2 text-white">Secure Your</span>
              <span className="glitch-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" data-text="Creative Operations">
                Creative Operations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
              Protecting high-value creative content across production, post-production, and VFX pipelines. SnowKnights Security is an official TPN assessor in the Netherlands supporting global production service providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up animation-delay-300">
              <a
                href="https://calendly.com/snowknights/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] text-white rounded-lg font-bold hover:bg-[#4338ca] transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20"
              >
                Book a scoping call
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                Explore services
              </a>
            </div>

            {/* Securing Operations Cards */}
            <div className="mt-12 pt-8 border-t border-slate-800/50 animate-fade-in-up animation-delay-400">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">SECURING OPERATIONS FOR:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/30 transition-colors group">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Film className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Post Production Pipelines</span>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl flex items-center gap-4 hover:border-purple-500/30 transition-colors group">
                  <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Visual Effects (VFX)</span>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl flex items-center gap-4 hover:border-pink-500/30 transition-colors group">
                  <div className="p-2.5 bg-pink-500/10 rounded-lg text-pink-400 group-hover:text-pink-300 transition-colors">
                    <Mic className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Dubbing</span>
                </div>
                <div className="bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl flex items-center gap-4 hover:border-green-500/30 transition-colors group">
                  <div className="p-2.5 bg-green-500/10 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Localization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center relative h-[400px] perspective-1000">
            <CyberShield />
          </div>
        </div>
      </header>

      {/* The Problem / Mission */}
      <section id="mission" className="py-24 bg-slate-900/50 relative overflow-hidden">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="reveal-container mb-6">
                <div className="reveal-block" style={{ "--delay": "0.3s" }}></div>
                <h2 className="reveal-content text-3xl md:text-4xl font-bold leading-tight text-left" style={{ "--delay": "0.3s" }}>
                  Security is no longer just a <span className="text-cyan-400">compliance hurdle</span>.
                </h2>
              </div>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed text-left">
                In today's media ecosystem, trust defines competitive advantage. Major studios (Netflix, Disney, WBD) require vendors to meet strict content security and TPN compliance standards. Falling short risks lost opportunities, reputational damage, and operational disruption.
              </p>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed text-left">
                Our mission is to help European and UK studios elevate their security posture with practical, production-ready controls.
              </p>
              <ul className="space-y-4">
                {[
                  "Mandatory TPN Compliance for Studio Vendors",
                  "Increasing pre-release piracy and leak threats",
                  "New complexities from AI-enabled creative workflows",
                  "Operational risks that can halt production or delivery"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="p-1 rounded bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Gold Shield Readiness</h3>
                    <p className="text-xs text-slate-500">Target Objective</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-slate-300 italic">
                    "SnowKnights Security helps you demonstrate true security maturity to major content owners. As a trusted TPN Assessor in the Netherlands and London, we guide you through compliance, culture, and controls so creative teams stay focused on storytelling."
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">NET_SEC</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">PHY_SITE</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">CLOUD_FLOW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guardians Section */}
      <section className="py-24 bg-slate-950 border-y border-slate-900 relative">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-5/12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6 text-left">
                Guardians of the <br />
                <span className="text-cyan-400">Unreleased</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            </div>
            <div className="w-full md:w-7/12 pt-2">
              <p className="text-xl text-white font-light mb-6 leading-relaxed text-left">
                A single leak can derail a premiere, damage investor confidence, and cost millions. SnowKnights Security serves as a defensive perimeter for Europe’s leading creators, offering specialized Media Cybersecurity, VFX Security, and Post-Production Security services.
              </p>
              <p className="text-slate-400 mb-10 text-lg text-left">
                With deep knowledge of editorial, color grading, animation, sound, and cloud workflows, we translate studio-grade requirements into everyday operations.
              </p>

              <ul className="grid gap-4">
                <li className="flex items-center gap-4 text-cyan-300 font-mono text-sm tracking-wide bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="p-1 bg-cyan-500/20 rounded-full"><Check className="w-4 h-4 text-cyan-400" /></div>
                  TPN (Trusted Partner Network) Assessor
                </li>
                <li className="flex items-center gap-4 text-cyan-300 font-mono text-sm tracking-wide bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="p-1 bg-cyan-500/20 rounded-full"><Check className="w-4 h-4 text-cyan-400" /></div>
                  CISSP / CISM / CCSP
                </li>
                <li className="flex items-center gap-4 text-cyan-300 font-mono text-sm tracking-wide bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="p-1 bg-cyan-500/20 rounded-full"><Check className="w-4 h-4 text-cyan-400" /></div>
                  ISO 27001 LA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 relative">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="text-left mb-16 border-b border-slate-800 pb-8">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Scope of Services</h2>
            <div className="reveal-container inline-block">
              <div className="reveal-block" style={{ "--delay": "0.1s" }}></div>
              <h3 className="reveal-content text-3xl md:text-5xl font-bold text-left" style={{ "--delay": "0.1s" }}>Creative-First Security</h3>
            </div>
            <p className="text-slate-400 text-sm mt-4 max-w-2xl text-left">We understand production workflows and design security that enables, rather than blocks, the creative process.</p>
          </div>

          <div className="flex flex-col gap-20">
            {/* Row 1: Providers */}
            <div>
              <div className="mb-8 text-center md:text-left border-b border-cyan-500/30 pb-4">
                <h4 className="text-cyan-400 font-bold uppercase tracking-widest mb-2">For Production Service Providers</h4>
                <p className="text-slate-400 text-sm">End-to-end support for vendors to achieve TPN compliance, from readiness to official certification and AI governance.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-orange-500/50 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">TPN Readiness & Remediation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Deep assessment against TPN controls with a prioritized roadmap.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-xs font-bold text-black rounded-bl-lg">CORE</div>
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">Official TPN Assessment</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Qualified Site & Cloud Assessors to conduct your formal audit and official assessment.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-pink-500/50 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">AI Governance</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Stay secure year-round with continuous compliance monitoring, staff training, and governance frameworks for AI-driven workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Studios */}
            <div>
              <div className="mb-8 text-center md:text-left border-b border-purple-500/30 pb-4">
                <h4 className="text-purple-400 font-bold uppercase tracking-widest mb-2">For Studios & Content Creators</h4>
                <p className="text-slate-400 text-sm">We deploy a fractional Production Security Manager (PSM) to oversee projects from Greenlight to Distribution, serving as the single point of content security accountability.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">Pre-Production</h4>
                  <h5 className="text-xs font-bold text-cyan-400 uppercase mb-2 tracking-wider">The "Greenlight" Setup</h5>
                  <ul className="text-slate-400 text-sm list-disc pl-4 space-y-2 mt-2">
                    <li>Security Architecture Design (Moxion/PIX workflows)</li>
                    <li>Crew Vetting & NDA Management</li>
                    <li>Script Chain-of-Custody</li>
                  </ul>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">Physical Production</h4>
                  <h5 className="text-xs font-bold text-cyan-400 uppercase mb-2 tracking-wider">The "On-Set Shield"</h5>
                  <ul className="text-slate-400 text-sm list-disc pl-4 space-y-2 mt-2">
                    <li>Secure Dailies Pipeline</li>
                    <li>Physical Perimeter Defense</li>
                    <li>Asset Tracking (GPS tagging)</li>
                  </ul>
                </div>

                <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900/60 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">Post-Production Handover</h4>
                  <h5 className="text-xs font-bold text-cyan-400 uppercase mb-2 tracking-wider">Secure Transfer</h5>
                  <ul className="text-slate-400 text-sm list-disc pl-4 space-y-2 mt-2">
                    <li>Encrypted Asset Transfer Protocols</li>
                    <li>Vendor Onboarding & Audits</li>
                    <li>Final Delivery Security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: How We Can Help (Future Scenarios) */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-900">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="text-left mb-16 border-b border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Briefcase className="w-3 h-3" /> Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-left">How We Can Help</h2>
            <p className="text-slate-400 mt-4 max-w-3xl text-sm leading-relaxed text-left">
              Identifying gaps before they become breaches. Here is how SnowKnights would approach common industry challenges.
              <br /><br />
              <span className="italic text-slate-500">(Note: Assessment and advisory services are offered as separate engagements. Clients may select either readiness advisory or official TPN assessment, but not both for the same assessment cycle.)</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cards Content... */}
            <div className="relative p-8 rounded-3xl bg-[#0B0F19] border border-orange-500/20 hover:border-orange-500/50 transition-all group flex flex-col h-full md:col-span-2 overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-orange-500 text-black text-xs font-bold rounded-bl-xl z-20 shadow-lg">For Vendors</div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Shield className="w-32 h-32 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-1 relative z-10">Official TPN Assessment</h3>
              <h4 className="text-white font-bold text-lg mb-6 relative z-10">"The Gold Shield"</h4>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div>
                  <p className="text-white font-bold mb-1">Challenge:</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A production service provider pitching for a major contract (e.g., Netflix original) may require official TPN validation to finalize the vendor agreement and receive assets.
                  </p>
                </div>

                <div>
                  <p className="text-white font-bold mb-1">Risk:</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Disqualification from the bid or delayed onboarding due to unverified security status, resulting in lost revenue.
                  </p>
                </div>

                <div>
                  <p className="text-white font-bold mb-1">SnowKnights:</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We would perform the accredited site or cloud assessment, validate your security controls, and manage the portal submission for official certification.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-purple-500/30 transition-all group flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-bl-xl z-20 shadow-lg">For Vendors</div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Zap className="w-24 h-24 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-1 relative z-10">VFX Studio Security</h3>
              <h4 className="text-white font-bold text-lg mb-6 relative z-10">"The Invisible Leak"</h4>
              <div className="space-y-5 flex-1 relative z-10">
                <div><p className="text-white font-bold mb-1">Challenge:</p><p className="text-slate-400 text-sm leading-relaxed">A VFX house expanding its remote workforce may need to enable 50+ artists to work on high-stakes shots without exposing raw assets to unsecure home networks.</p></div>
                <div><p className="text-white font-bold mb-1">Risk:</p><p className="text-slate-400 text-sm leading-relaxed">Unsecured remote endpoints and lack of VDI controls could lead to asset theft or leak of pre-release footage.</p></div>
                <div><p className="text-white font-bold mb-1">SnowKnights:</p><p className="text-slate-400 text-sm leading-relaxed">We could architect a zero-trust VDI environment where pixels stream but data never leaves the secure server core.</p></div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-blue-500/30 transition-all group flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-bl-xl z-20 shadow-lg">For Studios</div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Clapperboard className="w-24 h-24 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-1 relative z-10">Studio Production Shield</h3>
              <h4 className="text-white font-bold text-lg mb-6 relative z-10">"End-to-End Guardianship"</h4>
              <div className="space-y-5 flex-1 relative z-10">
                <div><p className="text-white font-bold mb-1">Challenge:</p><p className="text-slate-400 text-sm leading-relaxed">A studio managing a high-profile production from greenlight to distribution needs to ensure strict security consistency across hundreds of crew and multiple vendors.</p></div>
                <div><p className="text-white font-bold mb-1">Risk:</p><p className="text-slate-400 text-sm leading-relaxed">Fragmentation of security protocols between on-set teams and post-vendors, leading to script leaks or dailies piracy.</p></div>
                <div><p className="text-white font-bold mb-1">SnowKnights:</p><p className="text-slate-400 text-sm leading-relaxed">We could deploy a fractional Production Security Manager (PSM) to serve as the single point of accountability, managing crew vetting, script chain-of-custody, and physical perimeter defense.</p></div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-green-500/30 transition-all group flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-green-500 text-black text-xs font-bold rounded-bl-xl z-20 shadow-lg">For Vendors</div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Globe className="w-24 h-24 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-1 relative z-10">Localization & Dubbing</h3>
              <h4 className="text-white font-bold text-lg mb-6 relative z-10">"Secure Global Voice"</h4>
              <div className="space-y-5 flex-1 relative z-10">
                <div><p className="text-white font-bold mb-1">Challenge:</p><p className="text-slate-400 text-sm leading-relaxed">A dubbing studio coordinating across multiple regions may need to share sensitive scripts and unreleased audio stems with partners while maintaining strict chain of custody.</p></div>
                <div><p className="text-white font-bold mb-1">Risk:</p><p className="text-slate-400 text-sm leading-relaxed">Interception of script files or audio leaks during transfer between unverified regional partners.</p></div>
                <div><p className="text-white font-bold mb-1">SnowKnights:</p><p className="text-slate-400 text-sm leading-relaxed">We could deploy secure file transfer automation and advise on air-gapped recording booth configurations.</p></div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-500 text-black text-xs font-bold rounded-bl-xl z-20 shadow-lg">For Vendors</div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                <Cloud className="w-24 h-24 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-1 relative z-10">Post-Production</h3>
              <h4 className="text-white font-bold text-lg mb-6 relative z-10">"The Hybrid Edit Suite"</h4>
              <div className="space-y-5 flex-1 relative z-10">
                <div><p className="text-white font-bold mb-1">Challenge:</p><p className="text-slate-400 text-sm leading-relaxed">A post facility transitioning to hybrid cloud editing may struggle to secure high-res footage access for distributed teams.</p></div>
                <div><p className="text-white font-bold mb-1">Risk:</p><p className="text-slate-400 text-sm leading-relaxed">Uncontrolled data egress or unauthorized access to work-in-progress cuts.</p></div>
                <div><p className="text-white font-bold mb-1">SnowKnights:</p><p className="text-slate-400 text-sm leading-relaxed">We could implement secure cloud storage policies, MFA-enforced remote access, and real-time egress monitoring.</p></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW: FAQ Section - FIXED (Dark Card, Solid Background for visibility) */}
      <section id="faq" className="py-24 bg-slate-950">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="text-left mb-12 border-b border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3 h-3" /> Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {/* FAQ Item Component - Dark Card Style */}
            {[
              {
                q: "What is the difference between Readiness and Official Assessment?",
                a: "TPN Readiness Advisory (Pre-Assessment Support) offers guidance to help your team prepare for certification, identify compliance gaps, and align with TPN v5.3.1 standards. Official TPN Assessment is a formal site or cloud audit, submitted directly to TPN for review and listing."
              },
              {
                q: "Can you perform both Advisory and the Official Assessment?",
                a: "No. In compliance with the TPN Assessor Code of Conduct, advisory and assessment services are offered as separate engagements to avoid conflicts of interest. Clients may select either readiness advisory or official assessment, but not both for the same assessment cycle."
              },
              {
                q: "How long does an assessment typically take?",
                a: "A typical engagement spans 2-3 weeks for the assessment itself, depending on the scope (site/cloud) and size of the facility. Readiness projects can take 3-5 weeks depending on the remediation required."
              },
              {
                q: "Do you support cloud-only workflows?",
                a: "Yes. We are qualified TPN Cloud Assessors and specialize in securing dispersed, cloud-hybrid, and fully remote pipelines common in modern VFX and animation."
              },
              {
                q: "Do I need TPN if I am a small service provider?",
                a: "Yes. Major content owners (Netflix, Disney, WBD) increasingly mandate TPN participation for all vendors, regardless of size, if they are handling pre-release assets. We offer scaled solutions that fit smaller boutique studios."
              },
              {
                q: "What does a fractional Production Security Manager (PSM) do?",
                a: "A PSM acts as your production's dedicated CISO from greenlight to distribution. They manage crew vetting, oversee secure script distribution, design camera-to-cloud workflows, and ensure all vendors meet your security standards."
              },
              {
                q: "Can you audit vendors on behalf of a Studio?",
                a: "Yes. We act as your independent security arm, conducting rapid risk assessments on VFX houses, creative agencies, and dubbing studios to ensure your IP is safe throughout the entire supply chain before assets are shared."
              }
            ].map((faq, i) => (
              // FIXED: Solid Dark Background color #0B0F19
              <div key={i} className="bg-[#0B0F19] border border-slate-800 rounded-xl overflow-hidden transition-all hover:border-slate-700">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900 transition-colors"
                  aria-label={`Toggle answer for: ${faq.q}`}
                  aria-expanded={openFaqIndex === i}
                >
                  <span className="font-bold text-white text-lg">{faq.q}</span>
                  {openFaqIndex === i ? <Minus className="w-6 h-6 text-cyan-400" /> : <Plus className="w-6 h-6 text-slate-500" />}
                </button>
                {openFaqIndex === i && (
                  <div className="p-6 pt-0 text-slate-300 text-base leading-relaxed border-t border-slate-800/50 mt-0">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-t from-slate-900 to-slate-950">
        {/* FIXED: layoutClass */}
        <div className={layoutClass}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal-container inline-block mb-6">
              <div className="reveal-block" style={{ "--delay": "0s" }}></div>
              <h2 className="reveal-content text-4xl font-bold" style={{ "--delay": "0s" }}>Ready to Secure Your Operations?</h2>
            </div>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed px-4">
              Book a complimentary <span className="text-cyan-400 font-bold">30-minute TPN Readiness Scoping Session</span> with a TPN assessor in the Netherlands or connect with us on security solutions for Studios and Content Creators
            </p>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-left">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="Creative Studio BV" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="john@studio.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Interest</label>
                    <select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all">
                      <option>Full TPN Readiness</option>
                      <option>Official TPN Assessment</option>
                      <option>AI Security Advisory</option>
                      <option>Security for Studios & Content Creators</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea rows="4" name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none" placeholder="Tell us about your project or security needs..." required></textarea>
                </div>
                <button disabled={formStatus === 'submitting' || formStatus === 'success'} className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/25'} ${formStatus === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}>
                  {formStatus === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>) : formStatus === 'success' ? (<><CheckCircle className="w-5 h-5" /> Inquiry Sent!</>) : ('Submit Inquiry')}
                </button>
                {formStatus === 'success' && (<p className="text-green-400 text-center text-sm mt-2 animate-fade-in-up">Thank you! We'll be in touch shortly to discuss your security needs.</p>)}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        {/* FIXED: layoutClass */}
        <div className={`${layoutClass} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="font-bold tracking-tight">SnowKnights Security</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SnowKnights Security. Amsterdam, NL. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SnowKnightsApp;