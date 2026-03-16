"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { useState } from "react";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";

// Map markers data
const MAP_MARKERS = [
  {
    id: "silent-valley",
    position: { top: "33%", left: "25%" },
    color: PRIMARY,
    title: "The Silent Valley",
    subtitle: "4 Active Villages • High Altitude",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYkuT49qJAUK6Gtb13bgdr3m8-Yk5_e6Oh8VxAOH8UB8aDwTA0n6wznoawgbPw-opzqyC0GHsarrHbQwnHbBPC1FZoJ3QyQlWKgKvwo9iO6s9mufOpzxBBZDMPi57xlAXL2ZkI69VIX5S_YYr6xOgOkx_vF8Z_hDyBtMdeqcIjvnbQ0vspKDjEA5CfEXRodERrOF2D_ugQLgto_CFucFC85IKvczFGFbV1-Gn78AwMD-Y1gOyuY1aGRtVzp3gTN0rwc0AI34UWHVC0",
    href: "/expedition/silent-valley"
  },
  {
    id: "shepherds-trail",
    position: { bottom: "25%", left: "50%" },
    color: WARM_EARTH,
    title: "The Shepherd's Trail",
    subtitle: "Nomadic Route • Seasonal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j0jb6lWl135o9NBhtl2rLpfCGq8cmoSPe3ITtW6nzHQfz2WX7UJgwLDavnwsE8OfXLTD5f_KMd-obSyoqz-9eDNaWsTl07l3pfw0Ul0cgF_TNGwgn5FaLYCuTs7mvDmMzymvwB-LiDeznnK3diLe7TokOKC_dHcsGLfmCcHEGyDHWuaLQWvIGP8m_1jzKsiWuNIUW7HSpyKxUB_B05mQ9ONlDBnVAYB4mtchtq1sey5V_SMPtCfAlAP6dyw-HJLbLTD97ib-5Yo-",
    href: "#"
  }
];

// Expedition regions data
const REGIONS = [
  {
    title: "Hidden Himalayan Valleys",
    description: "Accessed only via multi-day trekking, these valleys host cultures unchanged for centuries.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdhkCWeTHmz79fQ5lBPOBzyeIUNf-F9JlYF5wGo1UN5Jrfw22IY8co1jykwriFCqU7X6E8VWuuWTU83cSSioUcniGwdq0sAsXtX1TKu3oTfn-id-mEUXYcDCTUV7dq6qbTGBe1AbYKbI-krF8SUFDR1VuCcF0qeqy-ZqXrFw6NmMhXsZBgzJZCtvHMzv2R5BtY21qWAQ3tSi4agGQZE0poRhi45t-bDIDMYzoDQfzZxWuO7pU13DIs4Vt9oVv8QM3xepllgUpysyde",
    badge: "TIER 1 PRESERVATION",
    villages: "8 VILLAGES IN NETWORK"
  },
  {
    title: "Forest Villages",
    description: "Arboreal communities with deep-rooted spiritual connections to the ancient surrounding timberlands.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApjzt7bNE2XXLU7lyueOoyoQIryfGMVWUZMdmPrOn8yXun6ccT6VX7OOTwy4VGYknWPVlzndjkWgzh4JxczG4ba82xhGz4SCVV-jKRCtEuDKVvbgHA8E-ZRUc-dOrQV6ivvUosOcouc_dfRbshdAcpuwtR6VUDPywFrC7XYlVVHU-0qENAz42afuaD2OUc-Gq1rsW3sLzG_pzhK5ctR6wxf_31EW0k8bSfXa_oQ1WUITB8VXkorHg0_I7Trs1behREPcGC4XKxSSvt",
    badge: "TIER 2 PRESERVATION",
    villages: "12 VILLAGES IN NETWORK"
  },
  {
    title: "Mountain Orchard Communities",
    description: "Vertical agriculture specialists maintaining boutique heirloom harvests at 4000 meters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5BkrvKDrQHjMbqsJZcfWk1sfZIiO_bWKiTKBRjILcDOu2pd-8YRN2TSUAiXsoZFc_2WRiGaQw3RHSz9k5MTkZ5N-xjE_i_PoCqP-ilH9QFoWni62upl1jQ7otno23AmfcivrXQ7Ine4dDjaJLQqv6s2THVo2vUXQAaHXaHUTsd-kbjtXBel5SOKiF1PmBrVl6SgKHsTErC9e1K7pZnDtMTcBgcKSM6Uv6F-5pwIiJ6X2jtctzzV1Y6bFD3eAhzusXYtljYwTKsPVo",
    badge: "TIER 1 PRESERVATION",
    villages: "5 VILLAGES IN NETWORK"
  }
];

// Workflow steps
const WORKFLOW_STEPS = [
  { num: 1, title: "Exploration", desc: "Satellite identifying of remote clusters and heritage sites.", color: PRIMARY },
  { num: 2, title: "Discovery", desc: "First-contact boots on ground to assess community interest.", color: MOUNTAIN_BLUE },
  { num: 3, title: "Partnership", desc: "MoU signing with village council and defining visitor limits.", color: WARM_EARTH },
  { num: 4, title: "Pilot", desc: "Internal stress-test with 10 club members for logistics.", color: "#475569" },
  { num: 5, title: "Official", desc: "The region is quietly added to our private explorer map.", color: "#ffffff" }
];

// Expansion nodes
const EXPANSION_NODES = [
  { label: "ANDES MOUNTAINS (2025)", position: { top: "-128px", left: "-192px" } },
  { label: "CAUCASUS REGION (2026)", position: { top: "-192px", left: "160px" } },
  { label: "PAMIR PLATEAU (2025)", position: { top: "128px", left: "240px" } }
];

export default function JourneyMapPage() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-[#20603d]/30">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#e8edea]">
        <Spotlight className="-top-40 left-0 md:left-60" fill={PRIMARY} />
        
        {/* Map dots background */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(32, 96, 61, 0.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background-light" />

        {/* Stylized Mountain Map Illustration */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
          <svg className="w-full h-full object-cover text-[#20603d]/10" fill="currentColor" viewBox="0 0 1000 600">
            <path d="M0 600 L200 400 L400 550 L600 300 L800 500 L1000 350 L1000 600 Z" />
            <path className="opacity-50" d="M0 600 L150 450 L350 580 L550 400 L750 520 L1000 450 L1000 600 Z" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#20603d]/10 text-[#20603d] text-xs font-bold tracking-widest uppercase mb-6"
          >
            Cartographic Discovery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8"
          >
            EXPLORE THE <br /> JOURNEY <span className="text-[#20603d] italic">MAP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Immerse yourself in hidden cultural landscapes across the globe. A curated cartography of the world&apos;s most remote villages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowingButton className="bg-[#20603d] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-[#20603d]/20 hover:scale-105 transition-transform flex items-center gap-2">
              Browse Expeditions
              <span className="material-symbols-outlined">arrow_forward</span>
            </GlowingButton>
            <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-[#20603d]/20 text-[#20603d] hover:bg-[#20603d]/5 transition-colors">
              The Mystery Principle
            </button>
          </motion.div>
        </div>

        {/* Floating Map Legend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-12 left-12 glass-panel p-6 rounded-xl hidden xl:block"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#20603d] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Outpost</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#C17C3A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Discovery Phase</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="text-[#20603d]/50" height="2" width="24">
                <line stroke="currentColor" strokeDasharray="8 8" strokeWidth="2" x1="0" x2="24" y1="1" y2="1" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Nomadic Route</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Journey Map */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Interactive Journey Map</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Navigate the terrain of our active partnerships. Each marker represents a community where we share the journey of preservation.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
            <button className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">zoom_out</span>
            </button>
            <button className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full aspect-[21/9] bg-[#e1e8e4] dark:bg-slate-800 rounded-3xl border border-[#20603d]/10 overflow-hidden group shadow-2xl">
          <img
            className="w-full h-full object-cover opacity-80"
            alt="Detailed topographic mountain map with valleys and rivers"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqXxR7YxKsgqZFLF-WbDoBkC1yJLhioRQRaIDFTiyxWMUy1THm47nZiVsRmcLowkX4I_U-8Ck9kpJ1gHK6p2FVdLJtaNNw35HqCSpujlQ9agqdfSjqNhEp40z-NY5hBNXfGgDZ6BaermrkWFAVQKEV8RtFFcyEpJY2lWwrxjAOZ8U10jdaQZmMHHuVNONBVWFVuFBdN0WP6z8WdcA2hQg79adVYIF5zRCeasd2UiQGCcW7_mwGkL1qhLHhJCWurQRdzyMZB8PKg3D"
          />

          {/* Pulsing Markers */}
          {MAP_MARKERS.map((marker) => (
            <div
              key={marker.id}
              className="absolute group/marker"
              style={marker.position}
              onMouseEnter={() => setActiveMarker(marker.id)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              <div
                className={`w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all ${
                  marker.color === PRIMARY ? "animate-pulse" : ""
                }`}
                style={{ backgroundColor: marker.color }}
              />
              
              {/* Hover Card */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl transition-all pointer-events-none ${
                  activeMarker === marker.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)"
                }}
              >
                <img className="w-full h-32 object-cover rounded-lg mb-3" alt={marker.title} src={marker.image} />
                <h4 className="font-bold text-slate-900">{marker.title}</h4>
                <p className="text-xs text-slate-500 mb-3">{marker.subtitle}</p>
                <a className="text-xs font-bold text-[#20603d] flex items-center gap-1" href={marker.href}>
                  View Expedition
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          ))}

          {/* SVG Routes Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              className="opacity-40"
              d="M400,200 Q550,250 800,450"
              fill="none"
              stroke="#20603d"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>
        </div>
      </section>

      {/* Expedition Regions */}
      <section className="bg-[#20603d]/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Expedition Regions</h2>
            <div className="w-20 h-1 bg-[#20603d] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REGIONS.map((region, i) => (
              <motion.div
                key={region.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-[#20603d]/5"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={region.title}
                    src={region.image}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter text-[#20603d]">
                    {region.badge}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">{region.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">{region.villages}</span>
                    <button className="w-10 h-10 rounded-full border border-[#20603d]/20 flex items-center justify-center text-[#20603d] hover:bg-[#20603d] hover:text-white transition-colors">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Network Diagram & Mystery Principle */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#20603d] font-bold text-sm tracking-widest uppercase block mb-4">The Mystery Principle</span>
            <h2 className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Why We Hide Our Locations</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              Exposure is the first step toward erosion. To protect the cultural integrity of our partners, we never publish exact GPS coordinates or village names on public maps. You discover the destination only when your journey begins.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#20603d]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#20603d]">shield</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Cultural Buffer</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">We limit annual visits to a maximum of 50 guests per village to prevent &apos;over-tourism&apos; burnout.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4A7C9E]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4A7C9E]">handshake</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Direct Partnership</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">100% of village entry fees go directly to communal heritage funds managed by elders.</p>
                </div>
              </div>
            </div>
          </div>

          <MovingBorder
            as="div"
            containerClassName="rounded-3xl"
            className="relative glass-panel rounded-3xl p-10 border border-[#20603d]/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#20603d]/10 rounded-full blur-3xl opacity-30" />
            
            {/* Abstract Blur Map Graphic */}
            <div className="absolute inset-0 opacity-20 select-none">
              <img
                className="w-full h-full object-cover blur-xl"
                alt="Blurred topographic map texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZllP6wj7OJksrroV0TPcv2FEW5bTg8kfuxVDmvO3rGhlbMhtEMmgCRXRl6sdkuOukxVDmpw0T4uGNCBjROfX7MKzdFZWl6Hw2YgYaIlMy-4lEeiGK2ADP90oWmoNG8AKsP0L8xAQf4Lz4VonSmCmcK_YRDlGmjnH7Xoy_YfNt_Hcj2WK1IGOeI9OXsi1pB_0qAcNzWX8PkMjp4uFtn8a3uVYG1KAYwxoJh2LW-iPWd_FMiMbqNoJYCRZP3XURUkoIEDaxeixPnMe"
              />
            </div>
            
            <div className="relative z-10">
              <h4 className="text-center font-heading text-lg font-bold mb-10 text-[#20603d]">Village Capacity Model</h4>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-[#20603d] flex items-center justify-center bg-white dark:bg-slate-900 shadow-xl">
                  <span className="font-heading text-2xl font-black">50</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 dark:text-white">Annual Limit</p>
                  <p className="text-xs text-slate-500">GUESTS PER NETWORK VILLAGE</p>
                </div>
                <svg className="text-[#20603d]/20" height="60" width="2">
                  <line stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" x1="1" x2="1" y1="0" y2="60" />
                </svg>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {["Preservation", "Privacy", "Impact"].map((item, i) => (
                    <div key={item} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl border border-[#20603d]/10 text-center">
                      <p className="font-bold text-[#20603d]">{item}</p>
                      <div className="h-1 w-full bg-[#20603d]/20 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-[#20603d]" style={{ width: `${90 - i * 5}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MovingBorder>
        </div>
      </section>

      {/* Discovery Workflow */}
      <section className="bg-background-dark py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight">Discovery Workflow</h2>
            <p className="text-slate-400 max-w-md">Our methodology for bringing new villages into the 50/50 network is rigorous and community-led.</p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {/* Workflow Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block" />

            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex-1 group"
              >
                <div
                  className="w-12 h-12 rounded-full border-4 border-[#141e19] flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform"
                  style={{ 
                    backgroundColor: step.color,
                    color: step.color === "#ffffff" ? PRIMARY : "white"
                  }}
                >
                  {step.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanding Horizons */}
      <section className="py-24 px-6 relative bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mb-16 tracking-tight text-center">Expanding Horizons</h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl aspect-video bg-white dark:bg-slate-800 rounded-3xl shadow-inner border border-[#20603d]/5 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover opacity-10"
              alt="World map outlined in minimalist green lines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH7e8ojJHR5Gb_AF21E1dL4jJBn7sDP4Gw1IaIDr7DB_4nDPZdRfq7J7gYuxl-mU_W0t3T1AXbndoRUE5XNPL1Sb-1Vm8Qqexoz4GlzKCRGNOhOoc7Rp266UBy3ijqid9er2ytEd_SjFfBzmN3-vd_FeehTEdBF2TBpj11yT8eRzvIMwuf2xeK7brGrJOvkRPPfAkhJFD0EVRBbVQoJAEZYQnDIUW3NR17uiL1qCdGaggwLn8RMP0wwrdzHMn0u1QGGDxUJjujNZn6"
            />

            {/* Expansion Points */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central Node */}
                <div className="w-4 h-4 bg-[#20603d] rounded-full relative z-10">
                  <div className="absolute inset-0 bg-[#20603d] rounded-full animate-ping opacity-75" />
                </div>

                {/* Connecting Lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
                  <path d="M400,200 L250,150" stroke="#4A7C9E" strokeWidth="1" strokeDasharray="8 8" />
                  <path d="M400,200 L550,100" stroke="#4A7C9E" strokeWidth="1" strokeDasharray="8 8" />
                  <path d="M400,200 L600,280" stroke="#4A7C9E" strokeWidth="1" strokeDasharray="8 8" />
                </svg>

                {/* Future Nodes */}
                {EXPANSION_NODES.map((node) => (
                  <div key={node.label} className="absolute group" style={node.position}>
                    <div className="w-2 h-2 bg-[#4A7C9E] rounded-full" />
                    <span className="absolute top-4 left-0 whitespace-nowrap text-[10px] font-bold tracking-widest text-[#4A7C9E] opacity-50">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-[#20603d] group">
        <Spotlight className="top-0 left-1/2" fill="white" />
        
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s]"
            alt="Cloudy mountain peak in high contrast"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD88nKFxmgFEmIjssA1VBmNw5J5RRxVAZ6t60xtC9-eVXpZh1Ag61Uv4Zg7MEpuhxCVpZkaPsz5OIA-ZZ6ELFzIXcUZnOv8LpS173BUHuPrQdM2fVWISDZ8R-IXK2TMk-Sv2HjV1lRY2Yqf0y2ddQEXTEqZ9EnnqpaGyz_gHChfMKgbzh1Ke0CKzyAH9NqIXl8y99TNamf9a7cBNKCWoc8Z5riKVDVRKS2FmvEAuMiqOECSXME9hwnoiW6n-ze7HnrQArzB1GF5j02c"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#20603d] via-[#20603d]/80 to-transparent" />
        
        <div className="relative z-10 text-center px-6">
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            YOUR NEXT JOURNEY BEGINS<br />SOMEWHERE ON THIS MAP
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Become a member to access the full interactive map and secure your place in our next seasonal expedition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GlowingButton className="bg-white text-[#20603d] px-10 py-5 rounded-full font-bold text-lg hover:bg-background-light transition-colors shadow-2xl">
              Apply for Membership
            </GlowingButton>
            <button className="bg-[#20603d]/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Inquire about Corporate
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
