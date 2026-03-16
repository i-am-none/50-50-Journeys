import Navbar from "@/components/navbar";

const PRIMARY = "#20603d";
const BG_LIGHT = "#f6f8f7";
const BG_DARK = "#141e19";
const LIGHT_BEIGE = "#F5F3EE";

export default function ConceptPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background-light dark:to-background-dark z-10" />
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF4_3FMsaeAf-N6FCGStI6l7rh8QPSVrFIysqroRT8MBUkTOIDcJPxH5ZfkRsckmXfpYm6lWI59lcHjQ3Vcx__p-vLlBbRK4Ie6PzXZgU5awbInA4gPPvGXU0I2N-eAcGs4kh_Oh7YOwsQxZy92ioMWY6gfKDS1cy0pTAu2Zp1xk6J_j8-A2su5YU-VkPGqJrTQWelDNXDZ1i6DV8Sp93lNmypdeijcVDiq5Rb36hc73pvyYFjevUJCI7O7vNAucGYirTCTr-Vzmq9')",
            }}
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            The Philosophy of 50/50 Journeys
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Travel is not about ticking destinations off a list. It is about
            discovering places, stories, and yourself.
          </p>
          <button className="bg-[#20603d] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
            Explore Our Experiences
          </button>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5] md:aspect-square">
            <div className="absolute inset-0 bg-[#20603d]/10" />
            <img
              alt="Tourists taking photos with phones"
              className="w-full h-full object-cover grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjN7eTed-Q8o8tdSOka-MZOGj_yHmxG9tyXJ0O5f-55nqtblRJYp_1RT_K96ALk52ulwWN_D2sxudSh4dr6cILCJiiVU_1fuCdski1jq8V8HZov5A97VfI8rMQicCxJvK4LDdeKDBDeLBtxy3VkboyuMm8FTUFqPer_6gDjkORQepOIeoXrd2oLn3A72B_q25ovRM_OYwxvCF2Kxpgzw-G5AfAB8XQf3dKiCIvfzDCAoZhBSd-D0-Hcb3aYH7lki9vg65GF6PxB7X4"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[#20603d] font-bold tracking-widest uppercase text-sm">
              The Modern Dilemma
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We trade presence for pixels.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern travel has lost its meaning through constant distraction and
              superficial interaction. We move through landscapes without touching
              them, capturing moments we never truly inhabit.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#20603d]">error</span>
                <p className="font-medium italic text-slate-700 dark:text-slate-300">
                  "The digital noise prevents true immersion in the environment."
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#20603d]">error</span>
                <p className="font-medium italic text-slate-700 dark:text-slate-300">
                  "Predictability has killed the magic of the unknown."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 50/50 Philosophy */}
      <section className="bg-[#20603d] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">
              Balance in Duality
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              A framework for transformation. Half looking inward, half reaching
              outward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            <div className="p-12 md:p-20 bg-[#20603d] flex flex-col items-center text-center space-y-6">
              <span className="material-symbols-outlined text-6xl text-white/40">
                self_improvement
              </span>
              <h3 className="text-3xl font-bold">50% Wellness</h3>
              <p className="text-lg text-white/80">
                Yoga, meditation, and structured digital detox. Reconnect with
                your inner landscape and find the silence required for growth.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                {["Forest Bathing", "Mindful Eating", "Daily Silence"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full border border-white/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-12 md:p-20 bg-[#20603d] flex flex-col items-center text-center space-y-6">
              <span className="material-symbols-outlined text-6xl text-white/40">
                explore
              </span>
              <h3 className="text-3xl font-bold">50% Mystery</h3>
              <p className="text-lg text-white/80">
                Hidden destinations, secret missions, and local folklore.
                Rediscover the thrill of the unknown and the joy of spontaneous
                discovery.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                {["Secret Rituals", "Unmapped Trails", "Oral Lore"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full border border-white/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mystery? */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center blur-md opacity-30 grayscale"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrW4ObLOHQJuxqPpo_TWV1ceJDgNi3VyMIV1BvBw2NYi_TCbvsFWvw-FI4NFA7K8DSUGTGfYL9G3xZAnx_DjxagwbSsC5cyi2Ghvj48YUgoV4K8ojyoGyWWtsTiNrOg_uwRu8J1NWX1t8Z2DTy7z_vPk93nQ-TC_hoKCW0nrLZtvrSZcBHIX4nXGyX3jwoJ0jBha2FEEKaSeWpjc_O0sLoCw7ZMYGTpFg5vK-45JD66wYiGjT6nhDxQa3MmW7s3vlTNWeddcMo49mm')",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">The Gift of Not Knowing</h2>
          <div className="space-y-6 text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
            <p>
              "Mystery removes expectations. When we don&apos;t know what comes next,
              our senses sharpen. We stop comparing our experience to a brochure
              and start living it for what it is."
            </p>
            <p>
              "By embracing the unknown, we invite curiosity to replace judgment.
              We find wonder in the smallest details of a path we didn&apos;t choose,
              but were destined to walk."
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-1 h-24 bg-[#20603d]/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Digital Detox */}
      <section className="py-24 bg-[#F5F3EE] dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl font-bold">Step Away From The Noise</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our digital detox isn&apos;t a punishment—it&apos;s a liberation. We collect
              your devices at the start of each journey, allowing you to trade
              blue light for the soft hues of a mountain sunrise.
            </p>
            <ul className="space-y-4">
              {[
                "Analog navigation and paper maps",
                "Handwritten journals for reflection",
                "Film photography for intentional moments",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#20603d]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-square">
            <img
              alt="Person walking in forest"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6UEL1Gx3x-1VOe-wEJl0kqka-neS021apSSl3nok5O0Wutco-6oPpMeTwRRZDAJmy23z_hNgB74nCfU1LUiASnJSNw_D_C31OwfXMHAU06_IUN1-I69wsT8jrJC8VjS_9FTZNpN4-irR47_ULfeyzKZ6hAKnZKOuioLXNhaU3s5EmsRxZQHQ7sxYDlDzcr_6zendnB4urzWu4r2S6ioYSC-jLfkY_J2sU-t2aDkyVKEBVdXivkFXL0kywOoH78wIqbJfsr8hc2498"
            />
          </div>
        </div>
      </section>

      {/* Cultural Immersion & Missions */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Missions of Connection</h2>
              <p className="text-slate-600 dark:text-slate-400">
                You aren&apos;t a spectator; you are a participant. Each journey
                features &apos;Missions&apos; designed to embed you within the local
                fabric.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Villagers cooking over an open fire"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTBWzqFjZFQm8jYpDS1yfNh0N--LUZWst2l2GtAKEpAn_Bnj5JoVoE9yn1wRCgYXcbsolphDfIb5mEmrHScl4xJh42vrsAfWQibBmaBMXcxqtBz6kbLg0dWLqFO8eFY_VgOEc8bkaas9GqRaY-XLH3NfqJg6dX1atTGUZ3UFGXp1QZgkxLanU2-gNNGE_NuMTj3Sy9DS8XrZsz_T9L_nx7xkKhSC-gtuoy6WsLS1GaMhDzkSy00O-fQBf3YepxGjrB8nIzcBgop1Hw"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Close up of artisan hands working with clay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQhs0EQxtAcKOf2O73DVN0XBqukozDVMaEz3rFI69Ao_bgz45AQj9skIQGwp-46SbQEH2bTjE4Smo-ujKJiBK0C0aruTzErvGjiCF1gop2isiVRDr5hP8z2rbgM9_tCWgxCZQpBziHXdmGXPE6ArmoBSO-PVqxKSgfxvOjag0x7B4Tu9ozpJyC6NzxugSimqM5p-K8O4jx0501Hpq1Y3nnrLLvOxJEM2DragS30LX4IDI01J-W9I1tJSny9Gely7_Ypqa7OB7oi0jW"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Shepherd leading flock through mountains"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPOC-fA4ThgI-soX0IHK2r2diICkNHavGqp-_Z9DRFTPA-PiPb1Mn_r548whi99-3O65IBFV-Hy36vFTheMC85zTW929G0k5i7V2KgGKJb_xp-03FGn3IOBrf2Q-QQ3BFUYaiTP8Tuy5cQdJQ74KZrVQp_8zJuS4how-eV3BidlGWs4rxMqTIxcRvzg5Ycx6ZoKhitFhm0eRCpZW6m0-GEZoYZdBAQX1fJ72PKBTkHYv6bVyBHGwU2obQaht396ywvj6zadtWjfBfu"
              />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden aspect-video group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Wide mountain vista with a small traditional village"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3K1F2raMU68To6py1ezAnOvwVQkbCphBWCqldMPC_-VKDZqpXDK53k67AJOGf2CoMLMQVm1oOH8dvEmSRCal-jwwImp7OZXOKSPvK3npFE32gMiSe4E8N52dfhMS_JT7eH1PaxR79Dvi55aFgZllb_f0X8xDpl7Fqb3gISJCCTqN6BztqAVeXOMcwFf8x3LMk0-0tvBvNSiD5ot_iTks01qG2uaBaBZQfYT6aDmY3o7hDIfT6z3DZnBdbWoYlmQs_R-Sre5d2KdVV"
              />
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 01: The Ritual",
                desc: "Learning the morning prayer or cooking the first communal meal with the village elder.",
              },
              {
                phase: "Phase 02: The Trail",
                desc: "Navigating ancient shepherd paths using only geographic markers and oral instructions.",
              },
              {
                phase: "Phase 03: The Offering",
                desc: "A day of contribution—repairing stone walls, harvesting, or teaching in a local school.",
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="p-8 border border-[#20603d]/10 rounded-2xl bg-white dark:bg-slate-900 shadow-sm"
              >
                <div className="text-[#20603d] font-bold text-lg mb-2">
                  {item.phase}
                </div>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility & Future */}
      <section className="py-24 bg-[#20603d]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#20603d]">
                Traveler Responsibility
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#20603d]">
                    psychology
                  </span>
                  <div>
                    <h4 className="font-bold">Radical Openness</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Arrive without expectations and greet every challenge as a
                      teacher.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#20603d]">
                    eco
                  </span>
                  <div>
                    <h4 className="font-bold">Invisible Footprint</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Protect the ecosystems we visit through conscious
                      consumption and waste-free travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#20603d]">
                Our Community Pact
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#20603d]">
                    groups
                  </span>
                  <div>
                    <h4 className="font-bold">Direct Economic Flow</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      70% of journey costs stay within the local community we
                      visit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#20603d]">
                    history_edu
                  </span>
                  <div>
                    <h4 className="font-bold">Cultural Preservation</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      We prioritize locations where tourism helps preserve dying
                      crafts and languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#20603d]/40 z-10" />
          <img
            alt="Mist mountain landscape"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApm6Lcp6M5MZBnFt2GKnavuNaYLpMgs3VcQbB3r7jmZ3b6I3c3Q0OB8zxv0eTZ6lhmrMEeH72cu1Xax_S_KnA9KvYcZoBuRJV5dLgsffO2k54yTlrVb28asiCHnyh_-stCbm0WuKwxSnBBmUIav7wrEWBJ98C7XcY7D06s_7Owd2C2_TxRTM6FbopusburHtSaX55DRIfpxA3OsUkqOtty_ZAX4JfrwLRe49vCdj5Qwy8xYPUYiLdy2bkCgXJMJtvugIjCl5yAUnu0"
          />
        </div>
        <div className="relative z-20 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Are You Ready To Travel Differently?
          </h2>
          <p className="text-white/90 text-xl mb-12">
            The journey begins the moment you decide to lose your way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#20603d] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#f6f8f7] transition-colors">
              Apply for a Journey
            </button>
            <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
              Download Philosophy PDF
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#141e19] text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-[#20603d] text-3xl">
                landscape
              </span>
              <span className="text-xl font-bold tracking-tight">
                50/50 Journeys
              </span>
            </div>
            <p className="max-w-sm">
              Designing experiences for those who seek the silence within and the
              stories without. A new paradigm for global exploration.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">
              Explore
            </h5>
            <ul className="space-y-4 text-sm">
              {["Wellness Retreats", "Mystery Missions", "Impact Report"].map(
                (link) => (
                  <li key={link}>
                    <a
                      className="hover:text-[#20603d] transition-colors"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">
              Connect
            </h5>
            <ul className="space-y-4 text-sm">
              {["Instagram", "Journal", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    className="hover:text-[#20603d] transition-colors"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 text-xs flex justify-between">
          <p>© 2024 50/50 Journeys. All rights reserved.</p>
          <p>Made with intention for the mindful traveler.</p>
        </div>
      </footer>
    </main>
  );
}
