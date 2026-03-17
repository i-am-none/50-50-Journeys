import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroVideo from "@/components/hero-video";
import { MEDIA } from "@/lib/media";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";
const BG_LIGHT = "#F5F3EE";
const BG_DARK = "#0c1410";

export default function Home() {
  return (
    <main>
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        id="experiences"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <HeroVideo />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="font-display text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Half Wellness.
            <br />
            Half Mystery.
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide leading-relaxed">
            Disconnect from the noise and embrace hidden cultural journeys
            designed for soul seekers. Fully unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="text-[#20603d] px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: "white" }}
            >
              Start Your Journey
            </button>
            <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
              How It Works
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-3xl">
            keyboard_double_arrow_down
          </span>
        </div>
      </section>

      {/* ─── CONCEPT ──────────────────────────────────────────────── */}
      <section
        id="concept"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F5F3EE] dark:bg-[#0c1410]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: `${PRIMARY}18`, color: PRIMARY }}
            >
              The 50/50 Concept
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              The perfect balance between{" "}
              <span style={{ color: PRIMARY }} className="italic">
                inner peace
              </span>{" "}
              and{" "}
              <span style={{ color: MOUNTAIN_BLUE }} className="italic">
                outer discovery
              </span>
              .
            </h2>
            <div className="grid gap-6">
              {/* Wellness card */}
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-[#20603d]/5 hover:border-[#20603d]/20 transition-all group glow-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                  style={{ backgroundColor: `${PRIMARY}18`, color: PRIMARY }}
                >
                  <span className="material-symbols-outlined">
                    self_improvement
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">50% Wellness</h3>
                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm">
                    Curated yoga, detox rituals, and nature immersion to reset
                    your spirit. We focus on local healing traditions unique to
                    each landscape.
                  </p>
                </div>
              </div>

              {/* Mystery card */}
              <div
                className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border transition-all group glow-card"
                style={{ borderColor: `${MOUNTAIN_BLUE}10` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                  style={{ backgroundColor: `${MOUNTAIN_BLUE}18`, color: MOUNTAIN_BLUE }}
                >
                  <span className="material-symbols-outlined">explore</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">50% Mystery</h3>
                  <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed text-sm">
                    Secret destinations and local folklore revealed only when
                    you arrive. Embrace the thrill of the unknown with expertly
                    crafted itineraries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={MEDIA.pictures.img1}
              alt="Person meditating on a mountain cliff overlooking clouds"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${PRIMARY}66 0%, transparent 60%)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── PATH TO DISCOVERY ────────────────────────────────────── */}
      <section
        className="py-20 overflow-hidden border-y bg-background-light dark:bg-background-dark"
        style={{ borderColor: `${PRIMARY}10` }}
      >
        <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Your Path to Discovery
          </h2>
          <div
            className="h-1 w-20 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        <div className="flex overflow-x-auto pb-12 pt-4 px-12 gap-8 no-scrollbar snap-x">
          {[
            { num: "01", icon: "edit_document", title: "Apply", desc: "Submit your profile and travel philosophy to join our community." },
            { num: "02", icon: "flight_takeoff", title: "Mystery Destination", desc: "Revealed through a handwritten note mid-flight or at the gate." },
            { num: "03", icon: "nightlight_round", title: "Arrival Ritual", desc: "Ancient welcoming ceremonies led by local village elders." },
            { num: "04", icon: "diversity_3", title: "Cultural Missions", desc: "Hands-on tasks that connect you deeply with local artisans." },
            { num: "05", icon: "auto_stories", title: "Story Discovery", desc: "Uncover the legends and lore that shaped the local history." },
            { num: "06", icon: "flare", title: "Final Reveal", desc: "The journey's climax — a moment of profound clarity and connection." },
          ].map((step) => (
            <div key={step.num} className="flex-none w-64 snap-center relative">
              <div
                className="absolute -top-3 left-0 font-bold opacity-20 text-4xl italic font-display"
                style={{ color: PRIMARY }}
              >
                {step.num}
              </div>
              <div
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border h-full flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `${PRIMARY}15` }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: PRIMARY }}
                >
                  {step.icon}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CURRENT MISSIONS ─────────────────────────────────────── */}
      <section
        id="communities"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F5F3EE] dark:bg-[#0c1410]"
      >
        <h2 className="font-display text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
          Current Missions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              src: MEDIA.pictures.img2,
              alt: "Ancient village alleyway in Japan",
              title: "Hidden Village Stories",
              desc: "Infiltrate the forgotten oral histories of the Shikoku trails.",
              tag: "Mystery",
            },
            {
              src: MEDIA.pictures.img3,
              alt: "Shepherd leading sheep in a misty green field",
              title: "Shepherd Trails",
              desc: "Live with nomadic tribes in the Altai Mountains for 48 hours.",
              tag: "Culture",
            },
            {
              src: MEDIA.pictures.img4,
              alt: "Close up of traditional incense burning in a temple",
              title: "Local Rituals",
              desc: "Participate in ancient healing ceremonies in the Sacred Valley.",
              tag: "Wellness",
            },
          ].map((mission) => (
            <div
              key={mission.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={mission.src}
                alt={mission.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-bold text-2xl mb-2">
                  {mission.title}
                </h3>
                <p className="text-white/70 text-sm">{mission.desc}</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] uppercase font-bold text-white tracking-widest">
                    {mission.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DIGITAL SILENCE ──────────────────────────────────────── */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: BG_DARK, color: "white" }}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px]"
              style={{ backgroundColor: `${PRIMARY}33` }}
            />
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src={MEDIA.pictures.img5}
                alt="Person sitting by a lake in the forest with no devices"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[
                  MEDIA.pictures.img6,
                  MEDIA.pictures.img7,
                  MEDIA.pictures.img8,
                ].map((src, i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-4"
                    style={{ borderColor: BG_DARK }}
                    src={src}
                    alt={`Community member ${i + 1}`}
                  />
                ))}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-4 text-xs font-bold text-white"
                  style={{ backgroundColor: PRIMARY, borderColor: BG_DARK }}
                >
                  +7
                </div>
              </div>
              <span className="text-sm font-light text-slate-400 italic">
                Joining the detox this month
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              The Digital Silence
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              True reconnection starts with a disconnection. During our
              journeys, devices are kept in handmade lock-boxes. Rediscover the
              world through your eyes, not your lens.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "do_not_disturb_on", text: "Analog-only exploration tools provided." },
                { icon: "auto_graph", text: "Professional photographer documentation (delivered post-trip)." },
                { icon: "psychology", text: "Mindfulness focus and presence-based missions." },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-3">
                  <span className="material-symbols-outlined" style={{ color: PRIMARY }}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── ECOSYSTEM (BENTO) ────────────────────────────────────── */}
      <section
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F5F3EE] dark:bg-[#0c1410]"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:h-[600px]">
          {/* Large left card */}
          <div
            className="md:col-span-2 md:row-span-2 bg-white dark:bg-slate-800 p-8 rounded-3xl border flex flex-col justify-between group overflow-hidden relative hover:shadow-xl transition-all duration-500"
            style={{ borderColor: `${PRIMARY}08` }}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-display mb-4 text-slate-900 dark:text-white">
                The Ecosystem
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-xs">
                Connecting conscious travelers with local communities through
                our proprietary transparency platform.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[300px]" style={{ color: PRIMARY }}>
                hub
              </span>
            </div>
            <div className="mt-12 flex flex-wrap gap-4 relative z-10">
              {["70+ Communities", "12 Countries", "100% Impact"].map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${PRIMARY}10`, color: PRIMARY }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Community Driven */}
          <div
            className="md:col-span-2 p-8 rounded-3xl flex items-center justify-between text-white hover:scale-[1.01] transition-transform"
            style={{ backgroundColor: MOUNTAIN_BLUE }}
          >
            <div>
              <h4 className="text-xl font-bold mb-2">Community Driven</h4>
              <p className="text-white/80 text-sm">
                Travelers vote on next year&apos;s exploratory regions.
              </p>
            </div>
            <span className="material-symbols-outlined text-5xl">
              diversity_1
            </span>
          </div>

          {/* Sustainability */}
          <div
            className="p-6 rounded-3xl flex flex-col justify-end text-white hover:scale-[1.01] transition-transform"
            style={{ backgroundColor: WARM_EARTH }}
          >
            <span className="material-symbols-outlined text-4xl mb-4">
              shield_with_heart
            </span>
            <h4 className="font-bold">Sustainability</h4>
            <p className="text-xs text-white/80">
              Regenerative tourism model.
            </p>
          </div>

          {/* Membership */}
          <div
            className="p-6 rounded-3xl flex flex-col justify-end text-white hover:scale-[1.01] transition-transform"
            style={{ backgroundColor: PRIMARY }}
          >
            <span className="material-symbols-outlined text-4xl mb-4">
              workspace_premium
            </span>
            <h4 className="font-bold">Membership</h4>
            <p className="text-xs text-white/80">Exclusive early access.</p>
          </div>
        </div>
      </section>

      {/* ─── MEMBERSHIP TIERS ─────────────────────────────────────── */}
      <section
        id="membership"
        className="py-24"
        style={{ backgroundColor: BG_DARK, color: "white" }}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">
              Membership Tiers
            </h2>
            <p className="text-slate-400 font-light">
              Join our inner circle for priority boarding on the world&apos;s most
              mysterious paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Explorer */}
            <div className="p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">
                  explore
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">The Explorer</h3>
              <div className="text-4xl font-black mb-6">
                $1,200{" "}
                <span className="text-sm font-normal text-slate-400">
                  / year
                </span>
              </div>
              <ul className="space-y-4 mb-10 text-slate-300">
                {["2 Mystery Journeys / year", "Basic Wellness Kit", "Community Access"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ color: PRIMARY }}
                      >
                        check_circle
                      </span>
                      {feature}
                    </li>
                  )
                )}
              </ul>
              <button className="w-full py-4 border border-white/20 rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:text-[#20603d] transition-all duration-200">
                Join Now
              </button>
            </div>

            {/* Nomad */}
            <div
              className="p-10 rounded-3xl relative overflow-hidden"
              style={{
                border: `2px solid ${PRIMARY}`,
                backgroundColor: `${PRIMARY}1a`,
              }}
            >
              <div
                className="absolute top-4 right-4 px-3 py-1 text-white text-[10px] rounded-full font-bold uppercase tracking-widest"
                style={{ backgroundColor: PRIMARY }}
              >
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">The Nomad</h3>
              <div className="text-4xl font-black mb-6">
                $3,500{" "}
                <span className="text-sm font-normal text-slate-400">
                  / year
                </span>
              </div>
              <ul className="space-y-4 mb-10 text-slate-300">
                {[
                  "Unlimited Mystery Journeys",
                  'Exclusive "Black Site" Locations',
                  "Personal Wellness Concierge",
                  "Guest Pass (1/year)",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ color: PRIMARY }}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-all text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                Select Nomad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale brightness-50"
            src={MEDIA.pictures.img9}
            alt="Dreamy valley landscape with mist and low sunlight"
          />
          <div className="absolute inset-0 mist-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Your Next Journey Will Not Be Revealed Until It Begins.
          </h2>
          <button
            className="px-12 py-5 rounded-2xl text-lg font-bold uppercase tracking-widest shadow-2xl hover:scale-105 transition-all duration-200 text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            Apply for Entry
          </button>
          <p className="text-white/60 mt-8 text-sm uppercase tracking-widest font-medium">
            Limited spots available for Summer 2026
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
