"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";
import { MEDIA } from "@/lib/media";
import { motion } from "framer-motion";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";

// Mission cards data
const MISSION_CARDS = [
  {
    title: "Cultural Preservation",
    description: "Protecting heritage and local traditions through direct engagement and sustainable financial support.",
    icon: <span className="material-symbols-outlined text-[#20603d] text-5xl">temple_hindu</span>,
  },
  {
    title: "Community Empowerment",
    description: "We partner directly with local hosts, ensuring that tourism benefits the people who call these landscapes home.",
    icon: <span className="material-symbols-outlined text-[#20603d] text-5xl">groups</span>,
  },
  {
    title: "Meaningful Exploration",
    description: "Deep dives into nature and self-discovery, focusing on mental clarity and personal growth.",
    icon: <span className="material-symbols-outlined text-[#20603d] text-5xl">self_improvement</span>,
  },
];

// Values data
const VALUES = [
  {
    title: "Respect Culture",
    description: "We enter as guests, learning local protocols and honoring ancestral traditions.",
    icon: "public",
  },
  {
    title: "Protect Communities",
    description: "Zero-waste practices and ethical resource management in every village we visit.",
    icon: "shield_with_heart",
  },
  {
    title: "Encourage Curiosity",
    description: "Questioning the status quo of travel to find deeper meaning in the unknown.",
    icon: "search_insights",
  },
  {
    title: "Promote Presence",
    description: "Removing distractions to allow for true connection with the environment.",
    icon: "visibility",
  },
];

// Community images
const COMMUNITY_IMAGES = [
  {
    src: MEDIA.pictures.img1,
    alt: "Local village host sharing a story with travelers",
    className: "",
  },
  {
    src: MEDIA.pictures.img2,
    alt: "Traditional cooking class in an open-air mountain kitchen",
    className: "mt-8",
  },
  {
    src: MEDIA.pictures.img3,
    alt: "Group walking through a lush forest trail",
    className: "-mt-8",
  },
  {
    src: MEDIA.pictures.img4,
    alt: "Artisans weaving traditional fabrics together",
    className: "",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60" fill={PRIMARY} />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-light dark:to-background-dark z-10" />
          <img
            className="w-full h-full object-cover scale-105"
            alt="Cinematic wide shot of explorers standing on a misty mountain ridge"
            src={MEDIA.pictures.img5}
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light"
          >
            50/50 Journeys was created to reimagine travel — shifting the focus from destinations to meaningful experiences and cultural discovery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlowingButton className="bg-[#20603d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Explore Our Journeys
            </GlowingButton>
            <button
              className="px-8 py-4 rounded-xl font-bold text-lg transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#20603d]/10 text-[#20603d] text-xs font-bold uppercase tracking-widest">
              The Roots
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Reimagining Modern Presence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We started with a simple observation: travel had become a checklist of photos rather than a journey of the soul. We decided to strip away the predictability.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our mystery journeys are designed to cultivate presence. By not knowing the destination until the moment of departure, our explorers are forced to engage with the &apos;now&apos;—relying on intuition, local wisdom, and the collective spirit of the group.
            </p>
            <div className="flex items-center gap-4 text-[#20603d] font-bold">
              <span className="material-symbols-outlined">explore</span>
              <span>Discovery through uncertainty.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl group"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Breathtaking mountain photography showing a lone hiker under a starry sky"
              src={MEDIA.pictures.img6}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20603d]/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-[#20603d]/5 dark:bg-white/5">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl font-bold">Travel With Purpose</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our mission centers on wellness, culture, and community to create lasting impact for both the traveler and the host.
            </p>
          </motion.div>

          <HoverEffect
            className="grid-cols-1 md:grid-cols-3"
            items={MISSION_CARDS.map((card) => ({
              title: card.title,
              description: card.description,
              icon: card.icon,
            }))}
          />
        </div>
      </section>

      {/* The Philosophy: 50/50 Concept */}
      <section className="py-24 px-6 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">The Philosophy: The 50/50 Concept</h2>
          <p className="text-slate-600 dark:text-slate-400">A perfect balance between the inner self and the outer world.</p>
        </motion.div>

        <div className="relative aspect-square md:aspect-[2/1] flex items-center justify-center">
          <div className="grid md:grid-cols-2 w-full h-full gap-4 md:gap-0">
            <MovingBorder
              as="div"
              containerClassName="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              className="bg-[#20603d] text-white p-12 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">psychology_alt</span> Wellness
              </h3>
              <ul className="space-y-4 text-lg opacity-90">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Guided Meditation Sessions</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Immersive Nature Baths</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Total Digital Detox</li>
              </ul>
            </MovingBorder>

            <MovingBorder
              as="div"
              containerClassName="rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
              className="bg-[#4A7C9E] text-white p-12 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">question_mark</span> Mystery
              </h3>
              <ul className="space-y-4 text-lg opacity-90">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Hidden Destinations</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Cultural Missions</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">circle</span> Story-Driven Journeys</li>
              </ul>
            </MovingBorder>
          </div>

          <div className="absolute hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-background-light dark:bg-background-dark border-4 border-[#20603d]/20 z-10 font-bold text-[#20603d]">
            50 / 50
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Guided By Principles
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <span className="material-symbols-outlined text-[#C17C3A] text-4xl mb-4">{value.icon}</span>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Network */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {COMMUNITY_IMAGES.map((img, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl aspect-square object-cover shadow-lg ${img.className}`}
                alt={img.alt}
                src={img.src}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">A Global Tapestry of Stories</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our journeys are built on deep, multi-year partnerships with remote communities. We don&apos;t just visit; we co-create. Whether it&apos;s a cooking class in a Himalayan kitchen or a storytelling session by a fire, these interactions are the heartbeat of the 50/50 experience.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our network includes over 50 local hosts who share their wisdom, ensuring your travel experience is as authentic as it is impactful.
            </p>
            <button className="text-[#20603d] font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Meet Our Hosts <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="px-6 lg:px-20 max-w-7xl mx-auto relative">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#C17C3A]/5 -skew-x-12 z-0" />
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-8">Looking Toward New Horizons</h2>
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
              <p>
                Our vision is to expand into the untouched cultural landscapes of <strong>Himachal Pradesh</strong> and beyond, mapping out new mystery routes that haven&apos;t been touched by mass tourism.
              </p>
              <p>
                We are building a model where travel becomes a regenerative force—restoring ecosystems and preserving languages that are at risk of being forgotten. Our future is rooted in the belief that the more we wander with intention, the more we can heal the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Spotlight className="top-0 left-1/2" fill="white" />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#20603d]/40 mix-blend-multiply z-10" />
          <img
            className="w-full h-full object-cover"
            alt="Cinematic wide landscape of rolling hills and moving clouds"
            src={MEDIA.pictures.img7}
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Travel Differently.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-12 italic"
          >
            &ldquo;The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.&rdquo;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <GlowingButton className="bg-white text-[#20603d] px-10 py-4 rounded-xl font-bold text-lg hover:bg-background-light transition-all shadow-xl">
              Explore Journeys
            </GlowingButton>
            <button className="bg-[#20603d] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#20603d]/90 border border-white/20 transition-all shadow-xl">
              Apply for Next Expedition
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
