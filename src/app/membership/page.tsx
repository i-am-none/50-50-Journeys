"use client";

import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";

const PRIMARY = "#20603d";

export default function MembershipPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-x-hidden">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section with Spotlight */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3DZklXa87yMZvITWtDPkCs2JmWllZxBOcy69qju9lYeD4Pzt80CeBUkXss9crwpL7-3x7xgbCJDtqzW9iWDeiQsuILk5wuObvr9zM6inBBEtlz7qgKz6XE2NFaYg5yr3-K_laGFb2gfle9ChAcMls2Iu5L5zsh9T5shUBGsVX-S9vwfRjbfg_8445U-aHuQKQPeEAnuYchohLX03tS_8NBGukQX0mZSVwo87Y1A2XVUZMffjALXhp3XSXFEd9dzXSVWblNDIKhNbB")`,
            }}
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Join the Explorer Network
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Embark on cinematic expeditions and connect with a community of curious travelers focused on depth, not distance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowingButton className="bg-[#20603d] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20603d]/90 transition-all shadow-xl shadow-[#20603d]/20">
              Join the Explorer Network
            </GlowingButton>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Explore Upcoming Journeys
            </button>
          </div>
        </div>
      </section>

      {/* What is Membership */}
      <section className="py-24 px-6 lg:px-20 bg-[#F5F3EE] dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#20603d]/10 rounded-xl blur-2xl group-hover:bg-[#20603d]/20 transition-all" />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                alt="Travelers engaging with local community members in a remote village"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7KlVLWnbf7ONPtcn9Wm4y3J4T2RyA0gxaah-LbRynW4-P8CaHtzy1Rk-6nkjzLfTxhEM4UcEk18VkKfvzBVlquTCEdFwQHzNCk8-T0ynpHeZZVxr5_JMjyOy3Rk_gqddY0fFHMgOFWdg2MBL4pR01BTuyXKB52QwhLynk7Ow5lexvRJPARhn9UnYBTSJhxBBRyWKaLGVfHXYVRHWJB8V_cUD-QnPBJPoSevIXyETx9UoTvhP4fBZi50KbHHVOaIbU7qOy9OwE2I-_"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#4A7C9E] p-8 rounded-xl text-white hidden md:block max-w-xs shadow-xl">
              <p className="font-bold text-xl mb-2">Authentic Connections</p>
              <p className="text-sm text-white/80">We bypass the tourist traps to find the soul of every destination.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-[#20603d] font-bold tracking-widest uppercase text-xs">
              <span className="w-8 h-[1px] bg-[#20603d]" />
              The Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              A Community of Curious Travelers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Beyond just trips, we build lifelong connections with nature and heritage. Our membership is designed for those seeking a &quot;50/50&quot; balance: half external exploration of the world, and half internal reflection of the self.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {[
                { icon: "temple_buddhist", title: "Culture", desc: "Deep immersion into local wisdom and traditions." },
                { icon: "phonelink_off", title: "Detox", desc: "Unplug from the noise to reconnect with presence." },
                { icon: "explore", title: "Exploration", desc: "Challenging treks and untouched secret landscapes." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-[#20603d] text-4xl">{item.icon}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid with HoverEffect */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Membership Benefits</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Exclusive perks for the modern adventurer, designed to make every journey seamless and profound.
            </p>
          </div>
          <HoverEffect
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            items={[
              {
                title: "Priority Access",
                description: "Be the first to book limited expeditions before they go public. Most journeys sell out in under 24 hours.",
                icon: <span className="material-symbols-outlined text-3xl text-[#20603d]">schedule</span>,
              },
              {
                title: "Exclusive Destinations",
                description: "Access secret locations and untouched landscapes curated specifically for our member network.",
                icon: <span className="material-symbols-outlined text-3xl text-[#4A7C9E]">map</span>,
              },
              {
                title: "Explorer Gatherings",
                description: "Join offline meetups, filmmaking workshops, and storytelling nights in cities around the world.",
                icon: <span className="material-symbols-outlined text-3xl text-[#C17C3A]">groups</span>,
              },
              {
                title: "Journey Archive",
                description: "Unlimited access to our vault of past expedition logs, high-res photography, and documentary films.",
                icon: <span className="material-symbols-outlined text-3xl text-[#20603d]">inventory_2</span>,
              },
            ]}
          />
        </div>
      </section>

      {/* Pricing Tiers with MovingBorder */}
      <section className="py-24 px-6 lg:px-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#20603d] via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-white/60">Select the level of immersion that fits your explorer spirit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Explorer Tier */}
            <MovingBorder
              as="div"
              containerClassName="rounded-3xl"
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col items-start hover:border-white/30 transition-all"
            >
              <span className="text-[#4A7C9E] font-bold uppercase tracking-tighter mb-2">The Standard</span>
              <h3 className="text-3xl font-bold mb-1">Explorer Membership</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-4xl font-black">$49</span>
                <span className="text-white/50">/month</span>
              </div>
              <ul className="space-y-4 mb-10 w-full">
                {[
                  "Priority Booking (24h early)",
                  "Access to Member Gatherings",
                  "Digital Archive Access",
                  "Community Forums & Perks",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-[#20603d] text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-all">
                Select Explorer
              </button>
            </MovingBorder>

            {/* Nomad Tier */}
            <MovingBorder
              as="div"
              containerClassName="rounded-3xl"
              className="relative bg-[#20603d]/20 border border-[#20603d]/40 backdrop-blur-xl p-10 rounded-3xl flex flex-col items-start overflow-hidden"
            >
              <div className="absolute top-6 right-6 bg-[#20603d] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <span className="text-[#C17C3A] font-bold uppercase tracking-tighter mb-2">Deep Immersion</span>
              <h3 className="text-3xl font-bold mb-1">Nomad Membership</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-4xl font-black">$129</span>
                <span className="text-white/50">/month</span>
              </div>
              <ul className="space-y-4 mb-10 w-full">
                {[
                  "Everything in Explorer",
                  "Guaranteed Spot on 1 Journey/Year",
                  "1-on-1 Expedition Consulting",
                  "Exclusive Nomad-Only Expeditions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="material-symbols-outlined text-[#20603d] text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <GlowingButton className="w-full py-4 rounded-xl bg-[#20603d] text-white font-bold hover:bg-[#20603d]/80 transition-all">
                Go Nomad
              </GlowingButton>
            </MovingBorder>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Life at 50/50</h2>
            <p className="text-slate-500">Visual glimpses into our latest member expeditions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9qqTir4Fn13c6v4mpQSpkpp1nxaupUNQUtA33-PLQhfJneth27DQAWosTUToJZtHSOoFtYQ5W1SJCvvnTPeplO8Uh1jKhicB3XcOdDSaiIQtKLO8LW5UAopFWt5al9OPiKyzvE1vrf6cZVgedgWoB7CWpZiPVe2srU4n8tP2hY4n4LJaNkSfb83TVAMWtHek1QGy8_1LFjV15uY-phHWOC5oIFf9tp_C5z61C1CnEprj2xl_O4liq4V1zEu2IO-0i9v6GlSzPfGCb",
                title: "Shared Rituals & Meals",
                span: "col-span-2 row-span-2",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAosPw2G_Bsr_dkfcYu6GH297jTANsPSlc0a88N0TthnYgMX2-OQwknfMQm6Do3bLeckbf1eiLS7D3kYQPvwZS2YIs5-D0K1yf-dnLGvqgvdsZ1a72PY9EeqqVrveF0PA8MINlSXJ3Se5Yq97NvAHw-F16uiGpg7Gu3KPJ-74MgG4c5x_vGXUSp7JUqLzHgLzVk-CfS9NVfGee-zq4Fw1cdz09m3zu5PcJne9DM8hchQqRWsXN5m3qqADnwSCJMLEnPEX5eBcPmH_MR",
                title: "Forest Exploration",
                span: "",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmOeoC5eCMlKUck1Xv29k7FRxeHJtJsteQqfSDFfksHPOxsgd3aG8B4wOmC_c_8EZv4aOAJyV0RpJqf-6v9Qiljpi4bi5RgkMcaJ5hxRnzn7lSGW-lxfimSLr-My3P-Xi2jkN3pH-5CVoMCCDrcliLrZzCUG7DobxFtCMERz_IJ-tWKdpC_z0Dvk8CUW3zIBWhpz5TW2X8aHwQrF6o3c7ofrsbTZLoij-UeTpjgkw4LvO9oqEGOjDwsuN5dplE8nAqFl3ASqVb80Go",
                title: "Visual Storytelling",
                span: "",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxLR0RYHndJHqyq-kxVvC1HEViTtFFsO8XQw9UgOwcuvk3YuD0khNPP_2i3Fcmd248-6UYw7BargncnRgcPMHFuLFJUsREJXkED7N0S3atflEm8O3EV_HzmXDW2nzsGl9G4Ba5ztawMjgUdPQfSTKUj6bmvU1gO8-q-BWy73AC_4JJcsWjwXqw3F4Q0qzLP7ICAXtQPJOc4dB0ZyGehBAxpMandK-3Hb_VLC3BsosZ6j10r3aVyCKUVEKWNFa4xOapyCkqDj3RToCO",
                title: "Nightly Storytelling Circles",
                span: "col-span-2",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.span} rounded-2xl overflow-hidden bg-slate-200 relative group`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.title}
                  src={item.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression Timeline */}
      <section className="py-24 px-6 lg:px-20 bg-[#F5F3EE] dark:bg-background-dark/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">The Explorer&apos;s Path</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#20603d]/20 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: "footprint", title: "First Journey", desc: "Take the leap. Your first taste of 50/50 exploration." },
                { icon: "badge", title: "Explorer Member", desc: "Join the network and start your internal journey." },
                { icon: "hiking", title: "Multiple Expeditions", desc: "Earn your stripes across continents and cultures." },
                { icon: "psychology", title: "Mentor Explorer", desc: "Guide others and lead community story sessions." },
              ].map((step) => (
                <div key={step.title} className="flex flex-col items-center gap-4 bg-[#F5F3EE] dark:bg-[#1a2620] px-4">
                  <div className="size-16 rounded-full bg-[#20603d] flex items-center justify-center text-white ring-8 ring-[#F5F3EE] dark:ring-[#1a2620]">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-2">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 px-6 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold italic font-display">
            &quot;Exploration is a Lifelong Journey&quot;
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            We don&apos;t believe in vacations. We believe in transitions. Our mission is to transform the way you see the world—from a collection of landmarks to a living, breathing map of experiences that redefine your own boundaries.
          </p>
          <div className="pt-8">
            <span className="text-[#20603d] font-bold tracking-[0.3em] uppercase text-sm">Beyond Boundaries</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Spotlight */}
      <section className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <Spotlight className="-top-20 left-0" fill={PRIMARY} />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#20603d]/30 via-slate-900 to-[#4A7C9E]/20 z-10 opacity-70" />
          <img
            className="w-full h-full object-cover scale-110 opacity-40 blur-sm"
            alt="Jagged mountain peaks emerging from thick rolling morning mist"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgjeFr6JeP63QeyuW5GOr4eggQGSmtrqhEPDXoQDPCC0VjOnn7RzCkXsF1RE5YV52kaLpMcIm0JLmXEeJdQKO-oI4DwJZWZYMJp47jjeZeZGoP1H9RRmoIHXFd0OkgCt6k2Bfo7TWRluRsRYtjJ980E8DvOBa0RQ5zFSS8X8_3xjI9_xH3_hT2pyzyjG6AzyTKtEdUAmXl4C-dEcucEOGjb3q1jpkY0oqQJPGG5KzfiI6iLBVaWWizgsyVY80IJ-Tm6_JOlKMdwjgD"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            The Next Mystery Journey Awaits
          </h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Applications for the Spring Solstice Expedition are now open for members only.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <GlowingButton className="min-w-[240px] bg-[#20603d] text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-[#20603d]/30">
              Join the Explorer Network
            </GlowingButton>
            <button className="min-w-[240px] border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
              Apply for a Journey
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background-light dark:bg-background-dark py-12 px-6 lg:px-20 border-t border-slate-200 dark:border-[#20603d]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 text-[#20603d]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">50/50 Journeys</h3>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            {["Privacy Policy", "Terms of Service", "FAQ"].map((link) => (
              <a key={link} className="hover:text-[#20603d]" href="#">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-400">© 2024 50/50 Journeys. Exploring with intent.</p>
        </div>
      </footer>
    </main>
  );
}
