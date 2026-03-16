"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect, Card, CardTitle } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";
import { MEDIA } from "@/lib/media";

const PRIMARY = "#1F5E3B";

export default function CommunitiesPage() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={MEDIA.communities.localDancing}
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(31, 94, 59, 0.5), rgba(23, 34, 17, 0.85))`,
          }}
        />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Our Journeys Are Powered By Communities
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Local communities are the heart of every 50/50 journey. We don&apos;t visit villages; we live with them as invited guests.
          </p>
          <GlowingButton className="bg-white text-[#20603d] px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            Learn How We Partner With Villages
            <span className="material-symbols-outlined">arrow_downward</span>
          </GlowingButton>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
            <img
              className="w-full h-full object-cover"
              src={MEDIA.communities.yogi}
              alt="Local practitioner in meditation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172211]/60 to-transparent" />
          </div>
          <div>
            <span className="text-[#C17C3A] font-bold tracking-widest uppercase text-sm mb-4 block">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Communities Are Partners, Not Attractions
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-[#1F5E3B]/10 dark:bg-[#1F5E3B]/20 flex items-center justify-center text-[#1F5E3B] shrink-0">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Respect</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We honor local traditions, spiritual practices, and privacy above all travel logistics.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-[#4A7C9E]/10 dark:bg-[#4A7C9E]/20 flex items-center justify-center text-[#4A7C9E] shrink-0">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Partnership</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Villages own the experience. They decide the group size, the activities, and the stories shared.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-[#C17C3A]/10 dark:bg-[#C17C3A]/20 flex items-center justify-center text-[#C17C3A] shrink-0">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Cultural Preservation</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tourism should protect culture, not dilute it. We fund local preservation initiatives directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section with HoverEffect Cards */}
      <section className="bg-[#1F5E3B]/5 dark:bg-[#1F5E3B]/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Roles Within the Village</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Everyone in the community has a voice and a role in our shared journey.
            </p>
          </div>
          <HoverEffect
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            items={[
              {
                title: "Host Families",
                description: "Opening their homes to provide authentic shelter and traditional meals.",
                icon: <span className="material-symbols-outlined text-4xl text-[#1F5E3B]">home</span>,
              },
              {
                title: "Story Keepers",
                description: "Elders who share oral histories, myths, and ancestral wisdom around the fire.",
                icon: <span className="material-symbols-outlined text-4xl text-[#4A7C9E]">auto_stories</span>,
              },
              {
                title: "Guides",
                description: "Local experts who lead treks through sacred landscapes and hidden paths.",
                icon: <span className="material-symbols-outlined text-4xl text-[#C17C3A]">explore</span>,
              },
              {
                title: "Activity Leaders",
                description: "Artisans teaching traditional crafts, farming techniques, and cooking.",
                icon: <span className="material-symbols-outlined text-4xl text-[#1F5E3B]">psychology</span>,
              },
            ]}
          />
        </div>
      </section>

      {/* Cultural Exchange with BentoGrid */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Cultural Exchange, Not Cultural Consumption
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                Our journeys are designed for mutual learning. While they share their way of life with us, we bring curiosity and humble contribution. It&apos;s a two-way bridge built on human connection.
              </p>
            </div>
            <div className="lg:w-1/2 h-80 w-full rounded-2xl overflow-hidden shadow-lg relative">
              <video
                className="w-full h-full object-cover"
                src={MEDIA.communities.ritual}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172211]/40 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-96">
            <div className="rounded-xl overflow-hidden h-full relative">
              <video
                className="w-full h-full object-cover"
                src={MEDIA.communities.shephard}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full col-span-1 md:col-span-2 relative">
              <video
                className="w-full h-full object-cover"
                src={MEDIA.communities.kidsTimelapse}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full relative">
              <img
                className="w-full h-full object-cover"
                src={MEDIA.communities.localUncle}
                alt="Local community elder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits Section */}
      <section className="bg-[#172211] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 lg:mb-0">
              <video
                className="w-full h-full object-cover"
                src={MEDIA.communities.birdFeed}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#172211]/60 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Fair Wealth Distribution</h2>
              <p className="text-slate-300 text-lg mb-12">
                We believe in radical transparency. The majority of your journey cost stays exactly where the experience happens.
              </p>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold">Community Share</span>
                  <span className="text-4xl font-black text-[#1F5E3B]">60%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#1F5E3B] h-full w-[60%]" />
                </div>
                <p className="text-sm text-slate-400">
                  Direct payments to families, guides, community funds, and local suppliers.
                </p>
                <div className="pt-6 flex justify-between items-end">
                  <span className="text-xl font-bold">Platform Ops</span>
                  <span className="text-4xl font-black text-[#4A7C9E]">40%</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#4A7C9E] h-full w-[40%]" />
                </div>
                <p className="text-sm text-slate-400">
                  Logistics, insurance, platform maintenance, and vetting new partnerships.
                </p>
              </div>
            </div>
            <MovingBorder
              as="div"
              containerClassName="rounded-3xl"
              className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Where your money goes:</h3>
              <ul className="space-y-4">
                {[
                  "Direct family hosting stipends",
                  "Local guide & artisan wages",
                  "Community infrastructure fund (schools/water)",
                  "Cultural heritage documentation projects",
                  "Carbon removal for every traveler km",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1F5E3B]">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MovingBorder>
          </div>
        </div>
      </section>

      {/* Protecting Culture */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-slate-900 dark:text-white">Protecting What We Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="material-symbols-outlined text-5xl text-[#C17C3A] mb-4">group</span>
            <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Limited Group Sizes</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Maximum of 8 travelers per journey to minimize impact and maintain intimacy.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-5xl text-[#C17C3A] mb-4">calendar_month</span>
            <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Limited Journeys</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Each village hosts only 4 times per year to prevent dependency and cultural fatigue.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-5xl text-[#C17C3A] mb-4">verified</span>
            <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Community Consent</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Communities can pause or end the partnership at any time for any reason.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Model Timeline */}
      <section className="py-24 bg-[#C17C3A]/5 dark:bg-[#C17C3A]/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Our Partnership Model</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-px bg-[#C17C3A]/30 -translate-x-1/2" />
            <div className="space-y-16">
              {[
                { num: "1", title: "01. Discovery", desc: "Identifying communities that wish to preserve their culture through sustainable exchange.", left: true },
                { num: "2", title: "02. The Meeting", desc: "Lengthy dialogue with community leaders to establish shared values and rules.", left: false },
                { num: "3", title: "03. Pilot Journey", desc: "A small, focused trip to test logistics and community comfort levels.", left: true },
                { num: "4", title: "04. Long-term Partnership", desc: "Formal agreement and ongoing support for local initiatives.", left: false },
              ].map((step) => (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${step.left ? "" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${step.left ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <h3 className="text-2xl font-bold text-[#C17C3A] mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
                  </div>
                  <div className="relative z-10 size-10 rounded-full bg-[#C17C3A] text-white flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Village Network with BentoGrid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#172211] rounded-[2rem] p-12 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Growing Network</h2>
              <p className="text-slate-300 mb-8">
                We carefully select regions where cultural heritage is rich but under pressure. Every pin is a promise of partnership.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "location_on", color: "#4A7C9E", title: "Himalayan Valleys", desc: "High-altitude heritage preservation" },
                  { icon: "location_on", color: "#C17C3A", title: "Andean Highlands", desc: "Ancient textile and farming traditions" },
                  { icon: "location_on", color: "#1F5E3B", title: "Sub-Saharan Savannahs", desc: "Oral history and nomadic wisdom" },
                ].map((location) => (
                  <div
                    key={location.title}
                    className="flex items-center gap-4 text-white p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="material-symbols-outlined" style={{ color: location.color }}>
                      {location.icon}
                    </span>
                    <div>
                      <h5 className="font-bold">{location.title}</h5>
                      <p className="text-xs text-slate-400">{location.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#1F5E3B]/20 rounded-full blur-3xl" />
              <img
                alt="Map"
                className="relative z-10 max-w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4Mnb2_xBkbViuYm3fDYggGARFR7UgZxq4ERTi0aHNN1PpSoMj_A_174vm0vbcgTe8k8nHOiaIjPnt7ETMG6zpB2PgRoRby5v1ktABhYkDqA-zwEt9ZOvZCyPO72DOz8DpZMhg78WLXqC3vRtmQNMlPKCZpuDf65P9uEdL3DBE-e11Gb6DmudMTEQ4kF6vDpAxuia4oJ-BQcsb-53J5v37bz4xh48iHCQ088DtRZc9IyZB_uU8e25Gq6qHPst9uNAp0-tVqL8YLkLI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with HoverEffect */}
      <section className="py-24 max-w-7xl mx-auto px-6 bg-background-light dark:bg-background-dark">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Voices from Our Partners</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs8CBYTsvgFBRrpPCPmxpBTfR3K4GVW9jS4i2L6MPKUKpYMwaWT4Aw1fDq6TgFdz0DimDbNFlJO--1LBDmInFYgFJvykoEFaquvOowJDSjQ1GYB_ayZHPs3xuPCZxHjUFQRoYRQjEDLN-CR9Oy55uoqB7tGg7tz6CHzi8uzyORcIwogZWbvjNKJHXKV_buMNbJgKWa2NSiaeKB4d2lAJWBHdzxUpATuIC-7X2VxWysY9zRX4QHD1mfEzvLItad-iqFsNqt2Yypzr4S",
              quote: "Working with 50/50 doesn't feel like business. It feels like making new family who want to learn our ways.",
              name: "Pema Tashi",
              role: "Village Elder, Mustang Region",
            },
            {
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU3sEGoWV-HI6ArfFKhH47v5VBXS6Soqa1G_wHjjCpjmRJ4-dItBLs4tumqtADmmlMkN2xKXD3mkypR-dRwbsYDcFgSR-KrfQZcKgpC85ehO87VB_TWhUbUL1Jv2EOLYDzkxJDDenXZgF0jb1QPsGpSyakDIYfDzoyOdKui92v3h1MZ7729Zu55IcXrLsS1NmHe97qdkeiJ-6slEM4yIWR1f9C3MAhAiTFFUbVuVq7qKFSOjtJGkcpL-GEJ2LhBpBn02aeS-gPUnKf",
              quote: "The community fund from our first journey helped us fix the roof of our ancestral gathering hall. Our culture is stronger now.",
              name: "Elena Quinto",
              role: "Host Mother, Sacred Valley",
            },
            {
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD32DDsG3hu2NvM8BP2YMicn5Vx4qkPaP145UPSBUunRmFIeEninK8mxuxr1U9R_jQG18DhPDbHidi7t35EihXHP7o6uUEKwaUVQ0ZrgL13RChn4jf56844VMrOZeRZ4Wqn8UE-Vsr67k9c_bXv__Q0ZolK3XWhl-JypAcQa1khNi9lDKFm4QEln4REapTB-7c9LpIGeAN_i4HMPvZU_5WBIlfRUAnLal70eFms4thk4oYblbNBMd_Rco372dAGKDR6n1_BUNRJjvE",
              quote: "They listen more than they talk. They treat our mountains like temples, just as we do.",
              name: "Dawa Sherpa",
              role: "Lead Guide, Solukhumbu",
            },
          ].map((testimonial) => (
            <Card key={testimonial.name} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col h-full">
              <div
                className="size-16 rounded-full mb-6 bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url('${testimonial.image}')` }}
              />
              <p className="text-slate-600 dark:text-slate-300 italic mb-6 flex-grow">{testimonial.quote}</p>
              <div>
                <CardTitle className="text-lg dark:text-white">{testimonial.name}</CardTitle>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA with Spotlight */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <Spotlight className="-top-20 left-0" fill={PRIMARY} />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 94, 59, 0.8), rgba(23, 34, 17, 0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVUBsW_yGfle880pSqOuEmlmsEUgaN2JN6A1iEek2hdEBdRxs_jh-9PWB4Yz_8erce8CQPkt3vWsMXBiuGDwvobRpFfN7lwipJpNj92V-Cbad4W2AMUOKTxVvDkYbFFV-ZKVem3FvM50a5SzMqWhW1sCL6cSKJIE6QuiGJmLW-bLb5YRf69aTe_k4vLfoDpjlhFKEOZOwYeKnOharkzr3vYf5l8msRXStc4gfUvlzkHMUNmigi-GJNs7LXz60XsV4M3ffQmy_tHftz')`,
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-8">Travel That Preserves Culture</h2>
          <GlowingButton className="bg-white text-[#20603d] px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-2xl">
            Explore Our Journeys
          </GlowingButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
