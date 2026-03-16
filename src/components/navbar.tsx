"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Experiences", href: "/experiences" },
  { label: "Concept", href: "/concept" },
  { label: "Communities", href: "/communities" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className={`rounded-full px-5 py-3 flex items-center justify-between border transition-all duration-300 ${
          isDark
            ? "bg-[#0c1410]/85 backdrop-blur-xl border-[#20603d]/25 shadow-xl shadow-black/30"
            : "glass-effect border-[#20603d]/10 shadow-lg"
        } ${scrolled ? "shadow-xl" : ""}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[#20603d] rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">landscape</span>
          </div>
          <span className={`font-display font-bold tracking-tighter text-sm ${isDark ? "text-emerald-400" : "text-[#20603d]"}`}>
            50/50 JOURNEYS
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs uppercase font-semibold tracking-widest transition-colors relative group ${
                  isActive
                    ? "text-[#20603d]"
                    : isDark
                    ? "text-slate-300 hover:text-emerald-400"
                    : "text-slate-700 hover:text-[#20603d]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#20603d] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: Dark mode + Apply */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              isDark
                ? "bg-[#20603d]/20 text-emerald-400 hover:bg-[#20603d]/30"
                : "bg-[#20603d]/10 text-[#20603d] hover:bg-[#20603d]/20"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Apply CTA */}
          <Link
            href="/application"
            className="bg-[#20603d] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#20603d]/90 hover:scale-105 transition-all duration-200 shadow-md shadow-[#20603d]/20"
          >
            Apply
          </Link>
        </div>
      </nav>
    </div>
  );
}
