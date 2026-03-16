export default function Footer() {
  const PRIMARY = "#20603d";
  const BG_DARK = "#0c1410";

  return (
    <footer
      className="py-20 px-6 md:px-12 border-t"
      style={{ backgroundColor: BG_DARK, color: "#94a3b8", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              <span className="material-symbols-outlined text-sm">
                landscape
              </span>
            </div>
            <span className="font-display font-bold tracking-tighter text-white">
              50/50 JOURNEYS
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Redefining modern travel through the lens of mystery and profound
            inner wellness. Founded in the mountains, serving the soul.
          </p>
        </div>

        {[
          {
            title: "Explore",
            links: ["Destinations", "The Missions", "Our Guides", "Testimonials"],
          },
          {
            title: "Philosophy",
            links: ["Wellness Ethos", "Mystery Logic", "Impact Report", "Sustainability"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              {col.title}
            </h5>
            <ul className="space-y-4 text-sm">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#20603d]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
            Connect
          </h5>
          <div className="flex gap-4 mb-6">
            {["public", "camera"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#20603d] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {icon}
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs mb-2">Newsletter for the curious:</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-l-lg p-2 text-xs w-full focus:outline-none focus:border-[#20603d] text-slate-300"
            />
            <button
              className="p-2 rounded-r-lg text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto border-t mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p>© 2026 50/50 Journeys. All rights reserved.</p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
