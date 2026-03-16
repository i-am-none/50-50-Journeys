"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { MEDIA } from "@/lib/media";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";
const BG_DARK = "#0c1410";

// ─── Data ──────────────────────────────────────────────────────────────────

const FILTER_TABS = [
  { id: "all", label: "All" },
  { id: "mystery", label: "Mystery" },
  { id: "wellness", label: "Wellness" },
  { id: "culture", label: "Culture" },
  { id: "adventure", label: "Adventure" },
];

const JOURNEY_TYPES = [
  { id: "solo", label: "Solo" },
  { id: "couple", label: "Couple" },
  { id: "group", label: "Group" },
];

const EXPEDITIONS = [
  {
    id: "silent-valley",
    title: "The Silent Valley",
    location: "Location revealed on arrival",
    duration: "8 Days",
    group: "4–7 Pax",
    tags: ["Mystery", "Wellness"],
    badge: "RUNNING SOON",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiQchn7JfOfh18rxU451dE91zn9B1n1xI-wdAdmCsUL7im1Zt6b1mgbNp8JuaBcV6og56oi0WjNbR1M-3in2mfSRknF36j5Y00hW8LdTtJYF7-9kA861qmN6LjibtovjXUHDehdEQim2egh6aQALhcDkpSC6LiRj6hqLPvswbFDRukQ3WUCn_X9ZotSsi-kTwuhfkzTjMsvxa4TwdN7WJi7serzKSBpUMwrwWiR7v4h_0zANwEvUnH8bb8CHk2jcTLXthWiUoOClWg",
    category: "mystery",
  },
  {
    id: "forgotten-orchard",
    title: "The Forgotten Orchard",
    location: "Location revealed on arrival",
    duration: "5 Days",
    group: "2–4 Pax",
    tags: ["Culture", "Mystery"],
    badge: "LAST SPOT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATf5uGmAZOcuim59Imgm46SLvvA-tiB-YRiTxJ55ymUtx8fLgi8Q6x84sYrPWNgT1mk7DWTnTldIYVHOqju8t9thBf2cU9eU705CUVuoPTGxh94Dqxxu2yKHCbFBExREc6z6mkB2ybO2DhDQ0SZWSPOLEppXpit75tykt9jD7wzuYcruEZAL-uIy17YwH0M8AXhCEpkg247oRwukUWSzbDyRg2ld3EY5PGdfyOInTpRz64DjRiV8OG6wOi5zw5_kg7nY60PT_2-RYq",
    category: "culture",
  },
  {
    id: "whispers-coast",
    title: "Whispers of the Coast",
    location: "Location revealed on arrival",
    duration: "6 Hours",
    group: "8–10 Pax",
    tags: ["Wellness", "Adventure"],
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRIbWVGlo4aUSDFa3U3ZJK3p-0yvTXvNJPu_SZIrh_MILBIFoZciNws66h8ckFP5wxxpg7jdb0AIflJRYBu372RnV32LY0TpbsuM2454v9va22Wzi413AV4N78x1KwcR1jQyW2qIeY7tNkiXJiL4BBLcCkORHc_4DSyCTQESmiYzD_GMfWh45kLtLTpA3iiAU7IeNBGcNoVnTFGJw-jVDQTNsQpMO25dMEYcIMPfXI180Kf8WWe0jtVE3B0ky1fNq_H6mfJod23i0q",
    category: "wellness",
  },
];

const PATH_STEPS = [
  { num: "01", icon: "edit_document", title: "Apply", desc: "Submit your profile and travel philosophy." },
  { num: "02", icon: "self_improvement", title: "Prepare", desc: "Receive your analog journey kit." },
  { num: "03", icon: "nightlight_round", title: "Arrival Ritual", desc: "The destination is finally revealed." },
  { num: "04", icon: "diversity_3", title: "Missions", desc: "Engage with local communities." },
  { num: "05", icon: "auto_stories", title: "Discovery", desc: "Uncover the village's sacred lore." },
  { num: "06", icon: "flare", title: "Final Reveal", desc: "A moment of profound clarity." },
];

const PILLARS = [
  {
    title: "Mystery Destinations",
    description: "We partner with locals for authenticity, choosing paths less travelled by traditional tourists.",
    className: "md:col-span-1 md:row-span-2",
    header: (
      <div
        className="relative h-48 rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY} 0%, #0f4d2e 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-end p-4">
          <span className="material-symbols-outlined text-white/20 text-[120px] absolute -right-4 -bottom-4">
            explore
          </span>
        </div>
      </div>
    ),
    icon: <span className="material-symbols-outlined text-[#20603d] text-2xl">explore</span>,
  },
  {
    title: "Digital Detox",
    description: "Devices are locked away. We handle photography so you can fully disconnect.",
    className: "md:col-span-1",
    header: (
      <div className="h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <span className="material-symbols-outlined text-white/40 text-5xl">do_not_disturb_on</span>
      </div>
    ),
    icon: <span className="material-symbols-outlined text-[#4A7C9E] text-2xl">do_not_disturb_on</span>,
  },
  {
    title: "Small Groups",
    description: "Intimate gatherings of 4–8 explorers only. Private, not performative.",
    className: "md:col-span-1",
    header: (
      <div className="h-24 rounded-2xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${WARM_EARTH}30, ${WARM_EARTH}10)` }}>
        <span className="material-symbols-outlined text-5xl" style={{ color: WARM_EARTH }}>group</span>
      </div>
    ),
    icon: <span className="material-symbols-outlined text-2xl" style={{ color: WARM_EARTH }}>group</span>,
  },
  {
    title: "Community Hosts",
    description: "Guided by local guardians, not traditional tourist guides.",
    className: "md:col-span-2",
    header: (
      <div className="h-24 rounded-2xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${MOUNTAIN_BLUE}20, ${MOUNTAIN_BLUE}05)` }}>
        <span className="material-symbols-outlined text-5xl" style={{ color: MOUNTAIN_BLUE }}>diversity_1</span>
      </div>
    ),
    icon: <span className="material-symbols-outlined text-2xl" style={{ color: MOUNTAIN_BLUE }}>diversity_1</span>,
  },
];

const MISSIONS = [
  {
    icon: "auto_stories",
    title: "Hidden Village Stories",
    description: "Explore local legends of the Shikoku trails and hear oral histories from the elders.",
  },
  {
    icon: "outdoor_grill",
    title: "Traditional Cooking",
    description: "Learn century-old preparation techniques using heirloom ingredients from tribal gardens.",
  },
  {
    icon: "landscape",
    title: "Shepherd Trails",
    description: "Navigate ancient mountain paths by nomad decree in the sacred meadows.",
  },
];

// ─── Animations ─────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ExperiencesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [journeyType, setJourneyType] = useState("solo");

  const filtered =
    activeFilter === "all"
      ? EXPEDITIONS
      : EXPEDITIONS.filter((e) => e.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F5F3EE] dark:bg-[#0c1410] transition-colors duration-300">
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src={MEDIA.experience.horses}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${BG_DARK}00 40%, ${BG_DARK} 100%)` }} />

        {/* Spotlight effect */}
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={PRIMARY} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#20603d] animate-pulse" />
            Mystery Cultural Expeditions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black text-white leading-[0.9] mb-4 tracking-tighter"
          >
            Choose Your Next
            <br />
            <span
              className="italic"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, #4ade80)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mystery Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Embark on mystery cultural expeditions where the destination is a
            guarded secret until the moment you arrive. Rediscover the magic
            of the unknown.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-white shadow-xl transition-all hover:scale-105"
              style={{ backgroundColor: PRIMARY }}
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">explore</span>
                Browse Expeditions
              </span>
            </button>
            <button className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all">
              How It Works
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-3xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* ─── FILTER BAR ─────────────────────────────────────────────── */}
      <section className="sticky top-20 z-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white/90 dark:bg-[#0f1f15]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[#20603d]/10 dark:border-[#20603d]/20 px-6 py-4 flex flex-wrap items-center gap-4"
        >
          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#20603d] text-white shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-[#20603d] dark:hover:text-emerald-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="ml-auto hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400 uppercase tracking-widest">Journey</span>
            {JOURNEY_TYPES.map((t) => (
              <button
                key={t.id}
                onClick={() => setJourneyType(t.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  journeyType === t.id
                    ? "bg-[#20603d]/15 text-[#20603d] dark:text-emerald-400"
                    : "text-slate-400 hover:text-[#20603d]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── ACTIVE EXPEDITIONS ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Active Expeditions
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Discover carefully curated mystery journeys.
            </p>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-[#20603d] dark:text-emerald-400 flex items-center gap-1 hover:gap-2 transition-all">
            View all
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((exp, i) => (
            <Link key={exp.id} href={`/expedition/${exp.id}`}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group relative bg-white dark:bg-[#0f1f15] rounded-3xl overflow-hidden border border-[#20603d]/8 dark:border-[#20603d]/15 hover:shadow-2xl hover:shadow-[#20603d]/10 transition-all duration-500 cursor-pointer"
              >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {exp.badge && (
                  <span
                    className="absolute top-4 left-4 px-2 py-1 text-white text-[10px] font-black uppercase tracking-widest rounded-full"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    {exp.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-[9px] uppercase font-bold text-white tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1 font-medium">
                  MYSTERY EXPEDITION
                </p>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ color: PRIMARY }}>schedule</span>
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ color: PRIMARY }}>group</span>
                    {exp.group}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ color: PRIMARY }}>wellness</span>
                    Wellness
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                    📍 {exp.location}
                  </p>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── PATH TO DISCOVERY ───────────────────────────────────── */}
      <section
        className="py-20 px-6 md:px-12"
        style={{ backgroundColor: BG_DARK }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The Path to Discovery
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto font-light">
              Every expedition follows a sacred sequence that gradually unveils the experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PATH_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${PRIMARY}20`,
                    boxShadow: "0 0 0 0px rgba(32,96,61,0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px rgba(32,96,61,0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${PRIMARY}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0px rgba(32,96,61,0)";
                  }}
                >
                  <span className="material-symbols-outlined text-2xl text-white">{step.icon}</span>
                </div>
                <div className="text-[#20603d] text-xs font-bold mb-1">{step.num}</div>
                <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 50/50 PILLARS (BENTO GRID) ──────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F3EE] dark:bg-[#0c1410]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The 50/50 Pillars
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-light">
              Our four pillars define every expedition we design. No compromises.
            </p>
          </motion.div>

          <BentoGrid className="md:auto-rows-[14rem]">
            {PILLARS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={item.className}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className="h-full"
                />
              </motion.div>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ─── IMMERSIVE MISSIONS ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-[#0f1f15]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Immersive Missions
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-light">
              Tasks that connect you deeply with each destination&apos;s soul.
            </p>
          </motion.div>

          {/* Visual Grid with local media */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 h-48 md:h-64">
            <div className="rounded-xl overflow-hidden h-full relative">
              <img
                className="w-full h-full object-cover"
                src={MEDIA.experience.kids}
                alt="Local children"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full col-span-1 md:col-span-2 relative">
              <video
                className="w-full h-full object-cover"
                src={MEDIA.experience.solo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full relative">
              <img
                className="w-full h-full object-cover grayscale"
                src={MEDIA.experience.bnWGranny}
                alt="Elder grandmother portrait"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MISSIONS.map((mission, i) => (
              <motion.div
                key={mission.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-3xl border border-[#20603d]/10 dark:border-[#20603d]/20 hover:border-[#20603d]/30 dark:hover:border-[#20603d]/40 hover:shadow-xl hover:shadow-[#20603d]/5 transition-all duration-300 cursor-pointer bg-[#F5F3EE] dark:bg-[#0c1a10]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
                >
                  <span className="material-symbols-outlined text-2xl">{mission.icon}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{mission.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {mission.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY BANNER ───────────────────────────────── */}
      <section className="py-0 px-6 md:px-12 max-w-7xl mx-auto my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{ backgroundColor: PRIMARY }}
        >
          <div className="absolute inset-0">
            <img
              src={MEDIA.experience.canopyRays}
              alt="Forest canopy with rays of light"
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-10 md:p-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Preserving the{" "}
                <span className="italic" style={{ color: "#a3e0b8" }}>
                  Unspoiled
                </span>
              </h2>
              <p className="text-white/80 font-light leading-relaxed mb-8">
                To ensure tourism remains a gift and not a burden, we limit our
                presence to 40 journeys per village per year. This model
                sustains local economies without disrupting the social fabric.
              </p>
              <div className="flex gap-8">
                {[
                  { num: "6", label: "Months research" },
                  { num: "12", label: "Village partners" },
                  { num: "100%", label: "Carbon offset" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-white font-display">{stat.num}</div>
                    <div className="text-xs text-white/70 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={MEDIA.experience.locals}
                  alt="Local community members"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── MEMBERSHIP (PRICING) ────────────────────────────────── */}
      <section
        className="py-24"
        style={{ backgroundColor: BG_DARK, color: "white" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join the Fellowship
            </h2>
            <p className="text-slate-400 font-light">
              Exclusive access to our mystery calendar and private community events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Explorer */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">explore</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Starter</p>
              <h3 className="text-2xl font-bold mb-1">Explorer</h3>
              <div className="text-4xl font-black mb-1">
                $290 <span className="text-sm font-normal text-slate-400">/ year</span>
              </div>
              <p className="text-xs text-slate-400 mb-8">1 journey included</p>
              <ul className="space-y-3 mb-10 text-slate-300">
                {["Early access to expedition drops", "1 journey booking included", "Access to secret solo routes"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-sm" style={{ color: PRIMARY }}>check_circle</span>
                      {f}
                    </li>
                  )
                )}
              </ul>
              <button className="w-full py-4 border border-white/20 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#20603d] transition-all duration-200">
                Choose Explorer
              </button>
            </motion.div>

            {/* Nomad */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 rounded-3xl relative overflow-hidden"
              style={{ border: `2px solid ${PRIMARY}`, backgroundColor: `${PRIMARY}1a` }}
            >
              <div
                className="absolute top-4 right-4 px-3 py-1 text-white text-[10px] rounded-full font-bold uppercase tracking-widest"
                style={{ backgroundColor: PRIMARY }}
              >
                BEST VALUE
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Full Access</p>
              <h3 className="text-2xl font-bold mb-1">Nomad</h3>
              <div className="text-4xl font-black mb-1">
                $550 <span className="text-sm font-normal text-slate-400">/ year</span>
              </div>
              <p className="text-xs text-slate-400 mb-8">3 journeys included</p>
              <ul className="space-y-3 mb-10 text-slate-300">
                {[
                  "Priority expedition queueing",
                  "3 journey bookings included",
                  "Access to secret solo routes",
                  "Private storyteller community",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-sm" style={{ color: PRIMARY }}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: PRIMARY }}
              >
                Choose Nomad
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={MEDIA.experience.horses}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 mist-overlay" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Your Next Destination Will Remain A Mystery Until The Journey Begins
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              className="px-12 py-5 rounded-2xl text-lg font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-200 text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Apply for the Next Expedition
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
