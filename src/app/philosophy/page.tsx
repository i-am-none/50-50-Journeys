"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect, Card, CardTitle } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MEDIA } from "@/lib/media";
import { motion } from "framer-motion";
import Link from "next/link";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";
const BG_DARK = "#141e19";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PhilosophyPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-light dark:to-background-dark z-10" />
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `url('${MEDIA.pictures.img1}')`,
          }}
        />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-8xl text-white mb-6 leading-tight"
          >
            Travel Was Once a Human Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto"
          >
            <TextGenerateEffect
              words="For thousands of years people traveled not to escape life but to understand it."
              className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg inline-block"
              duration={3}
            />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlowingButton className="group flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold mx-auto hover:scale-105 transition-transform">
              <span>Explore the Journey</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </GlowingButton>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
        </div>
      </section>

      {/* 2. Ancient Meaning */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${MEDIA.pictures.img2}')`,
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl text-white">
              <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-70">The Silk Road</p>
              <p className="text-xl font-serif">Exchange of soul, not just spice.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <span className="text-warm-earth font-bold uppercase tracking-[0.2em] text-sm">Historical Legacy</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight text-slate-900 dark:text-white">Ancient Meaning</h2>
            <div className="h-1 w-20 bg-primary" />
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Centuries of exchange—goods, culture, and knowledge. A narrative woven through historical trade routes and weary caravans seeking connection across borders. Travel was a test of character, an invitation to the unknown, and the primary vehicle for human evolution.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We seek to reclaim this depth. To move with the intention of the merchant, the curiosity of the scholar, and the humility of the pilgrim.
            </p>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
              Our Heritage
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. Modern Problem */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-cover" style={{ backgroundImage: `url('${MEDIA.pictures.img5}')` }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8">When Travel Became Performance</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Travel is no longer about discovery — it is about documentation. In an era of social media validation and checklist tourism, we have lost the essence of the path. We consume landscapes rather than witnessing them.
            </p>
            <div className="border-l-4 border-warm-earth pl-8 py-4 italic text-3xl font-serif text-slate-100">
              "Travel is no longer about discovery — it is about documentation."
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Human Element */}
      <section className="py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-slate-900 dark:text-white">The One Thing Technology Cannot Replace</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Conversation, storytelling, and shared traditions form the backbone of the human experience.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "forum", title: "Authentic Conversation", desc: "Deep dialogues around evening fires that go beyond the surface of digital interaction.", color: MOUNTAIN_BLUE },
              { icon: "auto_stories", title: "Living Stories", desc: "Learning local myths and mountain legends directly from the keepers of tradition.", color: WARM_EARTH },
              { icon: "groups", title: "Shared Community", desc: "Building bonds with communities that empower their future while respecting their past.", color: PRIMARY },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-background-light dark:bg-slate-800 transition-transform hover:-translate-y-2"
              >
                <span className="material-symbols-outlined text-4xl mb-4" style={{ color: item.color }}>{item.icon}</span>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Birth of 50/50 */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Why 50/50 Journeys Exists</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Balance is the core of our philosophy. We believe that true growth happens at the intersection of intentional self-care and the thrill of the unknown.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full border-2 border-warm-earth flex items-center justify-center font-bold">50%</div>
                <div>
                  <h4 className="font-bold text-xl">Wellness</h4>
                  <p className="text-sm opacity-70">Physical recovery, mental clarity, and spiritual grounding.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full border-2 border-mountain-blue flex items-center justify-center font-bold">50%</div>
                <div>
                  <h4 className="font-bold text-xl">Mystery</h4>
                  <p className="text-sm opacity-70">Spontaneous discovery, unplanned encounters, and raw adventure.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="size-80 md:size-96 rounded-full border-[20px] border-white/10 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[20px] border-warm-earth" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} />
              <div className="text-center">
                <span className="font-serif text-5xl font-bold">50/50</span>
                <p className="uppercase tracking-widest text-xs mt-2">The Golden Ratio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Himachal Pradesh Inspiration */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-mountain-blue font-bold uppercase tracking-widest text-sm">Our Origin</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-slate-900 dark:text-white">Inspired by Dev Bhoomi</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-video rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${MEDIA.pictures.img3}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-serif">Land of the Gods</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Himachal Pradesh isn&apos;t just a destination; it&apos;s our teacher. We are deeply inspired by the mountain traditions of Himachal, where every peak has a story and every stranger is a guest of the gods.
            </p>
            <div className="flex items-start gap-4 p-6 bg-mountain-blue/10 rounded-xl">
              <span className="material-symbols-outlined text-mountain-blue">handshake</span>
              <div>
                <h4 className="font-bold text-mountain-blue">Responsibility First</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">We operate with a sacred responsibility to the region, ensuring our footprint is light but our impact is profound.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Institutional Inspiration */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-center md:text-left"
          >
            <h3 className="font-serif text-3xl mb-4 text-slate-900 dark:text-white">Academic Exploration</h3>
            <p className="text-slate-500 dark:text-slate-400">Grounded in leadership and responsible innovation.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h4 className="font-bold text-xl text-slate-900 dark:text-white">Learning from Tourism Leadership</h4>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Our methodology draws inspiration from the academic rigor and tourism leadership research at IIM Sirmaur. We bridge the gap between academic innovation and real-world responsible tourism.
            </p>
            <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
              View our Research Basis <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. Future of Travel */}
      <section className="py-24 px-6 md:px-16 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-slate-900 dark:text-white">Travel With Purpose</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            We are building a network of meaningful journeys that do more than just provide a vacation. Our goal is to preserve culture, empower local mountain communities, and restore the traveler&apos;s soul through authentic connection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "12+", label: "Communities" },
              { num: "100%", label: "Sustainable" },
              { num: "500+", label: "Stories Shared" },
              { num: "∞", label: "Impact" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                <p className="text-2xl font-bold text-primary">{stat.num}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. Final CTA */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MEDIA.pictures.img4}')` }} />
        <div className="absolute inset-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-warm-earth font-bold uppercase tracking-widest text-sm mb-6 block">Ready to Begin?</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 text-slate-900 dark:text-white">Travel Differently.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 italic">
              "The destination matters less than the stories we discover along the way. The purpose of travel is not to escape life, but to understand it."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/experiences">
                <GlowingButton className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  View Expeditions
                </GlowingButton>
              </Link>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors border border-slate-200">
                Our Journal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
