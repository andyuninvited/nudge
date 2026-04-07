"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md transition-all ${
        scrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-text">Nudge</span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-mint text-mint">
            Early Access
          </span>
        </div>
        <button
          onClick={scrollToWaitlist}
          className="text-sm px-4 py-2 rounded-lg border border-border text-text hover:border-mint hover:text-mint transition-colors"
        >
          Get Founding Access
        </button>
      </div>
    </nav>
  );
}
