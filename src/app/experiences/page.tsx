"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MEDIA } from "@/lib/media";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const FOREST  = "#20603d";
const EARTH   = "#C17C3A";
const MOUNTAIN = "#4A7C9E";
const BEIGE   = "#F5F3EE";
const INK     = "#0c1410";

// ─── Journey Steps ────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 1,
    step: "STEP 01",
    heading: "ARRIVAL: Dropped Into The Unknown",
    body: "The transition begins the moment you lose signal. No maps, no itinerary, just the immediate presence of the valley air. This is where your old self ends.",
    image: MEDIA.pictures.img1,
    tint: `${FOREST}33`,
  },
  {
    id: 2,
    step: "STEP 02",
    heading: "THE KIT: Tools for the Internal",
    body: "We strip away the excess. Your backpack contains only what is essential. Every item has a story; every weight has a purpose.",
    image: MEDIA.pictures.img3,
    tint: `${INK}66`,
  },
  {
    id: 3,
    step: "STEP 03",
    heading: "THE VOID: Unknown Zones",
    body: "We navigate through blank spots on the topographic map. These 'unknown zones' mirror the unexplored parts of your own consciousness.",
    image: MEDIA.pictures.img5,
    tint: `${MOUNTAIN}4D`,
  },
  {
    id: 4,
    step: "STEP 04",
    heading: "ASCENT: Rugged Physicality",
    body: "The terrain demands respect. As the incline grows, the noise of daily life fades into the rhythm of your own breath and the crunch of earth.",
    image: MEDIA.pictures.img7,
    tint: "transparent",
  },
  {
    id: 5,
    step: "STEP 05",
    heading: "SHELTER: The Warmth of Hearth",
    body: "We find refuge in a secluded village. The smell of cedar smoke and the tactile warmth of a mountain home provide a backdrop for deep decompression.",
    image: MEDIA.experience.locals,
    tint: `${INK}40`,
  },
  {
    id: 6,
    step: "STEP 06",
    heading: "TRIBE: Shared Solitude",
    body: "Engagement without expectation. Participate in age-old traditions that bind the group together through shared labor and collective presence.",
    image: MEDIA.experience.kids,
    tint: `${INK}40`,
  },
  {
    id: 7,
    step: "STEP 07",
    heading: "STILLNESS: The Calm Center",
    body: "Meditation isn't an activity here; it's a state of being. The silence of the mountain becomes the silence of the mind.",
    image: MEDIA.communities.yogi,
    tint: `${INK}40`,
  },
  {
    id: 8,
    step: "STEP 08",
    heading: "BONFIRE: The Reflection",
    body: "As the embers dance into the night sky, you realise the journey hasn't ended. It has finally begun to live within you.",
    image: MEDIA.pictures.img9,
    tint: `${INK}40`,
  },
];

// ─── Architecture Pillars (Bento) ─────────────────────────────────────────────
const PILLARS = [
  {
    phase: "Phase 01",
    title: "Detachment",
    body: "Systematic removal of digital tethers and societal labels. Returning to a zero state.",
    bg: FOREST,
    text: BEIGE,
    phaseColor: "rgba(245,243,238,0.6)",
  },
  {
    phase: "Phase 02",
    title: "Exploration",
    body: "Navigating terrain that tests physical limits and spatial awareness. The world becomes real again.",
    bg: "white",
    text: "#0D1117",
    phaseColor: EARTH,
  },
  {
    phase: "Phase 03",
    title: "Immersion",
    body: "Deep integration with local culture and raw nature. No longer an observer, but a participant.",
    bg: MOUNTAIN,
    text: "white",
    phaseColor: "rgba(255,255,255,0.7)",
  },
  {
    phase: "Phase 04",
    title: "Reflection",
    body: "Synthesising the experience into a lasting internal shift. Hardening the insights found in the wild.",
    bg: INK,
    text: BEIGE,
    phaseColor: EARTH,
  },
];

// ─── Framer Motion variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0, 0, 0.2, 1] as const },
  }),
};

const slideIn = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ExperiencesPage() {
  const stickyRef    = useRef<HTMLDivElement>(null);
  const panelRef     = useRef<HTMLDivElement>(null);
  const imageRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs     = useRef<(HTMLDivElement | null)[]>([]);

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useSpring(useTransform(heroScroll, [0, 1], ["0%", "35%"]), {
    stiffness: 60, damping: 20,
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  // ─── GSAP: Sticky scroll image switcher ────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!panelRef.current) return;

      STEPS.forEach((_, idx) => {
        const step  = stepRefs.current[idx];
        const image = imageRefs.current[idx];
        if (!step || !image) return;

        // Show image when the corresponding step text is centred in viewport
        ScrollTrigger.create({
          trigger: step,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => {
            gsap.to(image, { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" });
            // fade out siblings
            imageRefs.current.forEach((img, i) => {
              if (i !== idx && img) gsap.to(img, { opacity: 0, scale: 1.06, duration: 0.7, ease: "power3.in" });
            });
          },
          onEnterBack: () => {
            gsap.to(image, { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" });
            imageRefs.current.forEach((img, i) => {
              if (i !== idx && img) gsap.to(img, { opacity: 0, scale: 1.06, duration: 0.7, ease: "power3.in" });
            });
          },
        });

        // Text — GSAP reveal on enter
        ScrollTrigger.create({
          trigger: step,
          start: "top 70%",
          onEnter: () => {
            gsap.fromTo(
              step.querySelectorAll(".gsap-text"),
              { opacity: 0, y: 36 },
              { opacity: 1, y: 0, stagger: 0.12, duration: 0.75, ease: "power3.out" }
            );
          },
          once: true,
        });
      });

      // Progress bar: GSAP scrubber on the sticky section
      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const bar = document.getElementById("exp-progress-bar");
          if (bar) bar.style.width = `${self.progress * 100}%`;
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: INK, color: BEIGE }}
    >
      <Navbar />

      {/* ─── 1. HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Parallax video background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <video
            className="w-full h-full object-cover scale-110 opacity-65"
            src={MEDIA.experience.horses}
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${INK}00 0%, ${INK} 100%)` }}
          />
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            className="inline-block mb-6 tracking-[0.3em] uppercase text-sm font-semibold"
            style={{ color: EARTH }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Fifty-Fifty Journeys
          </motion.span>

          <motion.h1
            className="font-serif text-5xl md:text-8xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            This Is Not A Trip.
            <br />
            <span className="italic font-light">This Is A Transformation.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            You don&apos;t follow a path. You discover it.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="#sticky-journey"
              className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: EARTH }}
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
              <span className="relative">Enter The Unknown</span>
            </a>
            <Link
              href="/application"
              className="px-8 py-4 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Apply for Access
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to Begin</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ backgroundColor: EARTH }}
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── 2. STICKY SCROLL NARRATIVE ───────────────────────── */}
      <section
        id="sticky-journey"
        ref={stickyRef}
        className="relative"
        style={{ backgroundColor: INK }}
      >
        {/* Thin progress bar pinned to the top */}
        <div className="sticky top-0 z-50 h-0.5 w-full" style={{ backgroundColor: INK }}>
          <div
            id="exp-progress-bar"
            className="h-full transition-none"
            style={{ width: "0%", backgroundColor: EARTH }}
          />
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* LEFT: Sticky visual panel (45%) */}
          <div className="lg:sticky lg:top-0 h-[50vh] lg:h-screen lg:w-[45%] relative overflow-hidden bg-black">
            {STEPS.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => { imageRefs.current[idx] = el; }}
                className="absolute inset-0 transition-none"
                style={{ opacity: idx === 0 ? 1 : 0, transform: idx === 0 ? "scale(1)" : "scale(1.06)" }}
              >
                <img
                  src={step.image}
                  alt={step.heading}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundColor: step.tint }} />
              </div>
            ))}

            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 100px rgba(0,0,0,0.8)" }}
            />

            {/* Step counter overlay */}
            <div
              className="absolute bottom-8 left-8 z-10 font-mono text-xs uppercase tracking-widest opacity-50"
              style={{ color: BEIGE }}
            >
              {STEPS.length} Chapters
            </div>
          </div>

          {/* RIGHT: Scrollable narrative (55%) */}
          <div className="lg:w-[55%] px-8 md:px-20 py-24 lg:py-0">
            {STEPS.map((step, idx) => (
              <div
                key={step.id}
                id={`step-${step.id}`}
                ref={(el) => { stepRefs.current[idx] = el; }}
                className="min-h-screen flex flex-col justify-center py-20"
              >
                <span
                  className="gsap-text font-mono mb-4 block text-sm"
                  style={{ color: EARTH }}
                >
                  {step.step}
                </span>
                <h2
                  className="gsap-text font-serif text-4xl md:text-6xl mb-6 leading-tight"
                  style={{ opacity: 0 }}
                >
                  {step.heading}
                </h2>
                <p
                  className="gsap-text text-lg leading-relaxed max-w-xl text-gray-400"
                  style={{ opacity: 0 }}
                >
                  {step.body}
                </p>

                {/* Step-specific accent line */}
                <motion.div
                  className="mt-10 h-px w-16"
                  style={{ backgroundColor: EARTH, opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. EXPERIENCE ARCHITECTURE (BENTO) ───────────────── */}
      <section
        className="py-32 px-6"
        style={{ backgroundColor: BEIGE, color: INK }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif mb-4">Experience Architecture</h2>
            <div className="h-1 w-24" style={{ backgroundColor: FOREST }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:h-[600px]">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden p-8 flex flex-col justify-between rounded-2xl cursor-default"
                style={{ backgroundColor: pillar.bg, color: pillar.text }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
              >
                <div>
                  <span
                    className="text-xs uppercase tracking-[0.2em] opacity-70"
                    style={{ color: pillar.phaseColor }}
                  >
                    {pillar.phase}
                  </span>
                  <h3 className="text-3xl font-serif mt-2">{pillar.title}</h3>
                </div>
                <p className="opacity-80 leading-relaxed text-sm">{pillar.body}</p>

                {/* Decorative hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 70% 80%, ${EARTH}, transparent 60%)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INVISIBLE SAFETY ──────────────────────────────── */}
      <section
        className="py-40 relative overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        <div
          className="absolute top-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(to bottom, ${BEIGE}1a, transparent)`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3
            className="font-mono tracking-widest mb-12 uppercase text-sm"
            style={{ color: EARTH }}
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Invisible Safety
          </motion.h3>

          <motion.p
            className="text-3xl md:text-4xl font-light italic leading-relaxed text-gray-400 mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            &ldquo;The most powerful safety net is the one you never see.&rdquo;
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {["Silent Monitoring", "Exfiltration Ready", "Local Guardians"].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-sm uppercase tracking-widest text-gray-500"
              >
                <span className="h-px w-8" style={{ backgroundColor: EARTH }} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. FINAL CTA ─────────────────────────────────────── */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        {/* Background video with parallax */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-30"
            src={MEDIA.hero.droneRiver}
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${INK} 0%, transparent 30%, transparent 70%, ${INK} 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h2
            className="text-4xl md:text-7xl font-serif mb-12 leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            You don&apos;t choose this journey.{" "}
            <br />
            <span style={{ color: EARTH }}>You commit to it.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="/application">
              <button
                className="group relative px-12 py-6 overflow-hidden bg-transparent border rounded-full hover:border-[#C17C3A] transition-colors duration-500"
                style={{ borderColor: `${BEIGE}4D` }}
              >
                <span
                  className="relative z-10 text-xl tracking-widest uppercase font-semibold"
                  style={{ color: BEIGE }}
                >
                  Request Access
                </span>
                <div
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ backgroundColor: EARTH }}
                />
              </button>
            </Link>
            <motion.p
              className="mt-12 text-sm font-mono text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Application-only experiences. Limited to 8 seekers per quarter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
