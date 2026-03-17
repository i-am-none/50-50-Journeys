"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect, Card, CardTitle } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";

const PRIMARY = "#20603d";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mindset1: "",
    mindset2: "",
    environment: "",
    agreements: [] as string[],
  });

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      agreements: prev.agreements.includes(value)
        ? prev.agreements.filter((a) => a !== value)
        : [...prev.agreements, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-500">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section with Spotlight */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(20, 30, 25, 0.7), rgba(20, 30, 25, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHVM9RYWytk1I1QzzaLy1r2BKT4UMeKPM_WJd-BVhFmCf219Rlj0GQV4KOmag5k_PMssjbgI7Q262KHLHO6u_gMC1O9g2uP3eOmFQqkqpq0bfAPTnOLdwHNxCg_M-7SpO306k3B1UfGZM-FhFPZM1Ad4EM_jg8ZHGN4xMVxtu7IZEsUCQYGUVEJFztc9ufFeFWyTLRMKUIdHSSP7mdR_dhvIk05Xkik7f56iacBHjEq0ASneAdVocR2JPys8zFbWlz0EqSCR-czbzF')`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block py-1 px-4 rounded-full border border-white/30 text-white/80 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Mystery Expedition 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
            Apply for the Next <br />
            <span className="text-[#4A7C9E] italic">Mystery Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            For the curious travelers ready for a digital detox and raw discovery. No destination reveal. No itinerary. Just raw experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowingButton className="w-full sm:w-auto bg-[#20603d] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
              Start Application
            </GlowingButton>
            <Link href="/philosophy" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                View Philosophy
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-3xl">expand_more</span>
        </div>
      </section>

      {/* How the Application Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#20603d] mb-4 tracking-tight">
            The Journey Path
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            A multi-stage curation process to ensure the chemistry of the group is perfect.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#20603d]/10 -z-10" />
          {[
            { icon: "edit_note", title: "Apply", desc: "Submit your story and travel mindset for review." },
            { icon: "group_work", title: "Review", desc: "Our curation team selects explorers for group synergy." },
            { icon: "verified", title: "Confirmation", desc: "Receive your invitation and secure your spot." },
            { icon: "backpack", title: "Preparation", desc: "Receive your packing list—no destination revealed." },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-background-light shadow-xl flex items-center justify-center text-[#20603d] mb-6 group-hover:bg-[#20603d] group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Journey Is For */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MovingBorder
              as="div"
              containerClassName="rounded-3xl"
              className="bg-[#20603d] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[120px]">psychology</span>
              </div>
              <h3 className="text-3xl font-black mb-8">For Curious Explorers</h3>
              <ul className="space-y-6">
                {[
                  "Comfortable with the unknown and lack of control.",
                  "Values deep connection over superficial sightseeing.",
                  "Ready to disconnect from digital noise for 10 days.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-white bg-white/20 rounded-full p-1">check</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </MovingBorder>
            <div className="bg-background-light rounded-3xl p-10 md:p-16 text-slate-800 border border-slate-200 shadow-xl">
              <h3 className="text-3xl font-black mb-8 text-slate-900">Not For Traditional Tourists</h3>
              <ul className="space-y-6">
                {[
                  "Travelers who need a detailed hourly itinerary.",
                  "Those who travel solely for social media validation.",
                  "Individuals seeking luxury resorts and manicured paths.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-slate-400 bg-slate-200 rounded-full p-1">close</span>
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Silence Policy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#4A7C9E]/10 text-[#4A7C9E] mb-8">
            <span className="material-symbols-outlined text-4xl">phonelink_off</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
            The Digital Silence Policy
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            We believe that true presence requires absence from the grid. Upon departure, all personal devices are safely stored.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Emergency Contact", desc: "A dedicated landline and satellite phone are available for family emergencies." },
              { title: "Captured Moments", desc: "A professional documentary photographer captures the journey so you don't have to." },
              { title: "Post-Trip Reveal", desc: "Photos and videos are shared with you 30 days after the journey ends." },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 rounded-2xl bg-background-light border border-slate-100">
                <CardTitle className="text-lg mb-2 text-[#20603d]">{item.title}</CardTitle>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Small Group Experience */}
      <section className="py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-black text-[#20603d] mb-6">
                4-7 Explorers. <br />
                Intimate Connection.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Mass tourism is loud. We prefer whispers. Every 50/50 Journey is limited to a handful of individuals to ensure real conversations and seamless movement through remote landscapes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#20603d]/5">
                  <span className="material-symbols-outlined text-[#20603d]">diversity_3</span>
                  <span className="font-bold">Radically Diverse Perspectives</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#20603d]/5">
                  <span className="material-symbols-outlined text-[#20603d]">settings_accessibility</span>
                  <span className="font-bold">Shared Responsibility</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Group of friends sitting around a campfire in the woods"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoDFaqDmSEmZbGyl_trY278vAqYkosMIu2VoRZ0W7OII_L7fI8lEusx0NH1wR_5II4DTKzsFLTZWnzmpkPpkIOlAG3Jb2Cb3l__Jaupcmuz-Wgd_Z2nxEFNP1QGA2vN-xsjxBBWLRxpWL86ZOPrQOzPOu1_uUacVthwi2WpIvuGf4XR0NHDxHhIHIQ0eTun6uq1VmmrY4f7oYllij4vO97U8xBiHXLyW7zsY4UZ77eu-nXEzklfuJHnbZgi3wF67PgfNtAg0XBdtzZ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-3xl mx-auto px-6">
          <MovingBorder
            as="div"
            containerClassName="rounded-3xl"
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#20603d]/5"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Mystery Journey Application</h2>
              <p className="text-slate-500">Estimated time: 10-15 minutes. Be honest, be raw.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Basic Info */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#20603d] mb-6 border-b border-[#20603d]/10 pb-2">
                  01. Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#20603d] focus:ring-2 focus:ring-[#20603d]/20 outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#20603d] focus:ring-2 focus:ring-[#20603d]/20 outline-none transition-all"
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Travel Mindset */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#20603d] mb-6 border-b border-[#20603d]/10 pb-2">
                  02. Travel Mindset
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      What does &quot;discovering the unknown&quot; mean to you?
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#20603d] focus:ring-2 focus:ring-[#20603d]/20 outline-none transition-all"
                      placeholder="Tell us about a time you were lost..."
                      rows={4}
                      value={formData.mindset1}
                      onChange={(e) => setFormData({ ...formData, mindset1: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Describe your most transformative travel experience in three sentences.
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#20603d] focus:ring-2 focus:ring-[#20603d]/20 outline-none transition-all"
                      rows={3}
                      value={formData.mindset2}
                      onChange={(e) => setFormData({ ...formData, mindset2: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Experience Preferences */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#20603d] mb-6 border-b border-[#20603d]/10 pb-2">
                  03. Environment Resonance
                </h3>
                <p className="text-xs text-slate-400 mb-4 italic">
                  Note: This doesn&apos;t guarantee a destination, but helps us understand your soul&apos;s pull.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "tsunami", label: "Arctic", value: "arctic" },
                    { icon: "landscape", label: "Desert", value: "desert" },
                    { icon: "forest", label: "Rainforest", value: "rainforest" },
                    { icon: "volcano", label: "Volcanic", value: "volcanic" },
                  ].map((env) => (
                    <label key={env.value} className="cursor-pointer">
                      <input
                        className="peer hidden"
                        name="env"
                        type="radio"
                        checked={formData.environment === env.value}
                        onChange={() => setFormData({ ...formData, environment: env.value })}
                      />
                      <div className="p-4 border border-slate-200 rounded-xl text-center peer-checked:bg-[#20603d] peer-checked:text-white transition-all">
                        <span className="material-symbols-outlined block mb-1">{env.icon}</span>
                        <span className="text-xs font-bold">{env.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Community Respect Agreement */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#20603d] mb-6 border-b border-[#20603d]/10 pb-2">
                  04. Ethics &amp; Commitment
                </h3>
                <div className="space-y-4">
                  {[
                    { value: "digital-silence", text: "I agree to the 10-day Digital Silence policy and will leave my phone with the journey leads." },
                    { value: "respect", text: "I commit to respecting local traditions and leaving no trace in the environments we visit." },
                    { value: "mystery", text: "I understand that the destination will not be revealed until the moment of departure." },
                  ].map((agreement) => (
                    <label key={agreement.value} className="flex items-start gap-3 cursor-pointer">
                      <input
                        className="mt-1 rounded text-[#20603d] focus:ring-[#20603d] border-slate-300"
                        type="checkbox"
                        checked={formData.agreements.includes(agreement.value)}
                        onChange={() => handleCheckboxChange(agreement.value)}
                      />
                      <span className="text-sm text-slate-600">{agreement.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              <GlowingButton
                className="w-full bg-[#20603d] text-white py-5 rounded-xl text-lg font-black hover:bg-[#20603d]/95 transition-all shadow-xl shadow-[#20603d]/20 mt-8"
                as="button"
                type="submit"
              >
                Submit Application
              </GlowingButton>
            </form>
          </MovingBorder>
        </div>
      </section>

      {/* Community Respect Agreement Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 text-slate-900">Our Sacred Agreements</h2>
          <HoverEffect
            className="grid-cols-1 md:grid-cols-3"
            items={[
              {
                title: "Local Integration",
                description: "We don't observe from afar. We engage, respect, and support local economies and traditions with humility.",
                icon: <span className="material-symbols-outlined text-[#C17C3A] text-4xl">handshake</span>,
              },
              {
                title: "Leave No Trace",
                description: "We are ghosts in the landscape. Our impact is purely emotional, never physical or environmental.",
                icon: <span className="material-symbols-outlined text-[#C17C3A] text-4xl">eco</span>,
              },
              {
                title: "Group Integrity",
                description: "Every explorer is responsible for the energy they bring. We support each other through the unknown.",
                icon: <span className="material-symbols-outlined text-[#C17C3A] text-4xl">shield_with_heart</span>,
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA with Spotlight */}
      <section className="relative py-32 overflow-hidden">
        <Spotlight className="-top-20 left-0" fill={PRIMARY} />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 30, 25, 0.8), rgba(20, 30, 25, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNpoCx8MfK_2alG6ntRoUfe_pSXvy3rIk4CY39Y-816pg6ttrJqz5jOLsXcx2CEpEbZ0sQa_lJhz9bKKX-4Mjjm_BxMocvyRArTnTDUmO1chf5dhmny14PsKjVP3UeS5DxbRU5rhtDFv5dfoqr93SkheVKCnGwMITUx-7Y28dJvETHPZpq2GenZw7qpxw0n6P1dUPr5Q-O9R4Bx8DoP0pEFbrX6OTj8a5e1pQQj_BSZrFyTqpgcT-RW53wxVDsUTLMyouK6V6PavYC')`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to Begin <br />
            Your Journey?
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light">
            The next application window closes in 4 days. Step into the mystery.
          </p>
          <GlowingButton className="bg-[#20603d] text-white px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform shadow-2xl">
            Submit Your Application
          </GlowingButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
