"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GlowingButton, MovingBorder } from "@/components/ui/moving-border";

const PRIMARY = "#20603d";
const MOUNTAIN_BLUE = "#4A7C9E";
const WARM_EARTH = "#C17C3A";

// Expedition data
const EXPEDITIONS: Record<string, {
  id: string;
  title: string;
  subtitle: string;
  expeditionNumber: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  season: string;
  heroImage: string;
  overview: string[];
  quickFacts: { icon: string; text: string }[];
  bentoItems: { type: "image" | "color"; image?: string; color?: string; title: string; desc: string; span?: string }[];
  timeline: { num: string; title: string; desc: string; image: string }[];
  missions: { icon: string; title: string; desc: string }[];
  knownItems: string[];
  mysteryItems: string[];
  prepItems: { icon: string; title: string; desc: string }[];
  availability: { current: number; total: number };
  months: { label: string; available: boolean; spots?: number }[];
}> = {
  "silent-valley": {
    id: "silent-valley",
    title: "The Silent Valley",
    subtitle: "EXPEDITION",
    expeditionNumber: "#042",
    duration: "3 Days / 2 Nights",
    groupSize: "4 - 7 Explorers",
    difficulty: "Moderate",
    season: "Spring / Autumn",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLxcXtojhLy9o18kFqVGQ4rlI4P9mpUqoQ0BwIWpttAjZVn3tPt1Ri7ikZC121Xm0mRtTcz5s4utZc5IgjpDyEpGBR6wx3-cJV_dsrE9Xp3tc36hytDMZ2bIukEVnptPdkOVSTeJX4nuW92iYmiUZDgicNGwnhLBfTO4Lapk1j3eRLh4ezOH-d1caHsM8hNS0ce6y3OwQ-TxsVc_hYGU2Zjdwurg5fgen4-WxXfNMx7c_HhcmTYV8IcCXg-Br6nxFzahrKY2mlunmT",
    overview: [
      "The Silent Valley is not just a destination; it's a temporal enclave where the pace of the modern world dissolves into the rhythmic sounds of the forest. Located in a high-altitude sanctuary accessible only by foot, this journey challenges you to surrender control.",
      "You will not receive a map. You will not have a GPS. You will have a mission, a local guide, and the shared curiosity of six other souls."
    ],
    quickFacts: [
      { icon: "no_photography", text: "Digital Detox: No phones or cameras allowed during the expedition. Analog cameras provided." },
      { icon: "home_pin", text: "Stay: Traditional stone-and-timber mountain huts with communal dining." },
      { icon: "forest", text: "Terrain: Alpine meadows, dense cedar forests, and rocky ridgelines." }
    ],
    bentoItems: [
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFOEau7lMahw9K02dpxsqkUafu_T0ZrioKrCkugBxUuzoymwelBzYi2qPnZ7GDk4uddsMFRLy8INrzqJ9-HFSqu7T8wOkm1nMv3car6yNizFPGERD9vp_6VG1We2bkrNw1UeXk1m912A-WMZW1454c9wGRS3ekyHDc-qlESVcp2T-wIvsU_EVSqaCi4OqbXfrtwKbHU7eKWzCCrYHkPJMsB5OKDJOEzLW905NI74EJlawVIbs7jfLSCC2g9a6EDq7Wv2sneeUDeCR", title: "Village Life", desc: "Become part of a lineage, not just a visitor.", span: "md:col-span-2" },
      { type: "color", color: WARM_EARTH, title: "Storytelling Nights", desc: "Oral histories shared around the central hearth." },
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjDYw1v4gB_GTg6sjyd8Gb0RYqRa4aGTiyltP7TYNueRDtZm8ZaRBJEADDMSeT_lX6uNLnwPT4GdNGCVdgRSGkGxAQ-OyQVhNZNsZb0Kf_bPt3qns1GzTmAIRiaYGO8xIpi7GVnolLL8XfjNymvZaR1vu4NQLqosQLBOc9fJ8ELxtqsEyKJf4ohzcnag5H0Q5L8lYjRw-3E_Ddw8qrqHYFf5hJt6Ccj-UCecxCucNSlCj0xVp_JcnK7OIaWC_RLBC6tXdqKCbLDBCQ", title: "Nature Exploration", desc: "Off-trail navigation through primal landscapes.", span: "md:row-span-2" },
      { type: "color", color: "slate-100", title: "Cultural Missions", desc: "Collaborative tasks that bridge the gap between you and the local community through skill-sharing.", span: "md:col-span-3" }
    ],
    timeline: [
      { num: "01", title: "The Arrival Ritual", desc: "Crossing the bridge where technology is left behind. A purification by the falls.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB26aNu4AuK9FFPk6XZcaz2X__MHY9TbKEYyknRY5npamoIcnBHwXc8z-V2perdJ6isWQwLK5bf9gzyLvb_BYg1BOsom5zZFuHCVr9L8dn1COQCXmjaFS1QiaqEdUjk9ShqMHQIpgprnmdlEaaCD3T39ehij5dkiUOV9hszUYSf9br5jfkWbNgiV_1bejSa2q9qzYgQmTN1KKb-2CnTnrp0_Wau17r4RNM08IFcI5n0NtYqPBKNFwHLPFIbFEWwHv-eys3H2meJLFHI" },
      { num: "02", title: "The First Mission", desc: "Finding your host family using only a hand-drawn map and local landmarks.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAm_mw8Ew3aUvNUxbJGX-7ZH0HTFgXuZwRIScmuChK7Yvn3Vd5qOBIA2VYi8wx-DHEj_APvPlBPTyS0h-9W5lUP5ejtmici3p-bYiKnN6LZNpGyJM0xsrcDq6dY0WinyrB0fTC3lL8O-luvMNXbbr-QuEJ6maOCCG-1UGSxevBhIwNvjjpHTl5kEvf2HyIS2-0QwzuOq2NehAjOzTDb0jiMrqUtj2S98lK7yoU2U9RzqhConPJRMy1bmvWdn6RbmJqFo5dUuDJRUk" },
      { num: "03", title: "Exploration Day", desc: "Summiting the Whisper Peak to witness the valley's true scale at dawn.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ex-YGY58YGm9SuFBf00VO4aLbU0_gHhX4Mk6Mk9skWXhrLvNJgwuBFuUImJdyvO_XIyGuqqm_47tBYSHr2zF6yhc_Ehqmz8UiqdLPMrkLSy9uEz6MRFkU335eQoTu2XXzGZWVtTPz0M8tfaGBJPTXEYUO3-pkZC8XwWIFX4lFtPrEDSW8t8JtGg5-pEcXQBs80iZP20ULd67kH3gslGjiKpGo7TMfqE_irq51-D_X8ojEEoIlVpCw9ms_S0IrTEjqStFJiJCTU0w" },
      { num: "04", title: "The Final Reveal", desc: "The gathering of all explorers to piece together the valley's secret history.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDTtqVrXgjf_T8EXoCv1fvg-NMiMp2hyfRhYISTwK1Sqc4UHdqoC4AhNasCiMkE6-xzI15-joovgjvglxtJYR0jXOW_knMkaIcvFL43LYZlTrvG9KellcRiEzXVVxKmn3ol7BPdUGg4YQOv0i_4_DiFqeyj6Ehl4q_ott5Are0Qi8ZmFmKMe7sAoMMeaPIGKKV6iRDDp2l7yrpKUVIvNIkn3_w0zAMKvdiz2I8QimqXrZqfPuS8BdR-gv1gnGSpJIrBEL7nIoAYlQ" }
    ],
    missions: [
      { icon: "skillet", title: "Traditional Cooking", desc: "Learn to prepare forest-foraged meals over open fire with Grandma Elara." },
      { icon: "temple_buddhist", title: "Hidden Shrines", desc: "Locate the three moss-covered shrines marking the valley's energetic points." },
      { icon: "ink_pen", title: "Legacy Journaling", desc: "Contribute your own observations to the 50/50 Valley Archive." }
    ],
    knownItems: ["The Departure Point", "The Required Gear", "Your Fellow Explorers"],
    mysteryItems: ["The Final Destination", "The Local Hosts' Identities", "The \"Great Reveal\" Mission"],
    prepItems: [
      { icon: "hiking", title: "Sturdy Boots", desc: "Broken-in waterproof hiking boots are mandatory." },
      { icon: "backpack", title: "40L Pack", desc: "Comfortable for 6-8 hours of trekking per day." },
      { icon: "water_drop", title: "Water Filter", desc: "Personal filtration for glacial stream replenishment." },
      { icon: "flashlight_on", title: "Headlamp", desc: "Essential for evening missions and cabin life." }
    ],
    availability: { current: 3, total: 12 },
    months: [
      { label: "June - Fully Booked", available: false },
      { label: "July - Fully Booked", available: false },
      { label: "September - 2 Spots", available: true, spots: 2 },
      { label: "October - 1 Spot", available: true, spots: 1 }
    ]
  },
  "forgotten-orchard": {
    id: "forgotten-orchard",
    title: "The Forgotten Orchard",
    subtitle: "EXPEDITION",
    expeditionNumber: "#043",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 4 Explorers",
    difficulty: "Easy",
    season: "Summer / Autumn",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATf5uGmAZOcuim59Imgm46SLvvA-tiB-YRiTxJ55ymUtx8fLgi8Q6x84sYrPWNgT1mk7DWTnTldIYVHOqju8t9thBf2cU9eU705CUVuoPTGxh94Dqxxu2yKHCbFBExREc6z6mkB2ybO2DhDQ0SZWSPOLEppXpit75tykt9jD7wzuYcruEZAL-uIy17YwH0M8AXhCEpkg247oRwukUWSzbDyRg2ld3EY5PGdfyOInTpRz64DjRiV8OG6wOi5zw5_kg7nY60PT_2-RYq",
    overview: [
      "The Forgotten Orchard is a hidden gem nestled in the rolling hills of an ancient agricultural region. This journey invites you to rediscover the lost art of traditional farming and the secrets of heritage crops.",
      "You will work alongside local farmers, learning techniques passed down through generations while helping to preserve endangered varieties of fruits and grains."
    ],
    quickFacts: [
      { icon: "no_photography", text: "Digital Detox: Limited phone use for emergency contact only. Focus on hands-on learning." },
      { icon: "home_pin", text: "Stay: Converted barn lodgings with authentic rural charm." },
      { icon: "forest", text: "Terrain: Gentle orchard slopes, meadows, and traditional farmsteads." }
    ],
    bentoItems: [
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFOEau7lMahw9K02dpxsqkUafu_T0ZrioKrCkugBxUuzoymwelBzYi2qPnZ7GDk4uddsMFRLy8INrzqJ9-HFSqu7T8wOkm1nMv3car6yNizFPGERD9vp_6VG1We2bkrNw1UeXk1m912A-WMZW1454c9wGRS3ekyHDc-qlESVcp2T-wIvsU_EVSqaCi4OqbXfrtwKbHU7eKWzCCrYHkPJMsB5OKDJOEzLW905NI74EJlawVIbs7jfLSCC2g9a6EDq7Wv2sneeUDeCR", title: "Orchard Life", desc: "Tend to ancient trees and learn the rhythms of nature.", span: "md:col-span-2" },
      { type: "color", color: PRIMARY, title: "Harvest Rituals", desc: "Participate in seasonal harvest ceremonies." },
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjDYw1v4gB_GTg6sjyd8Gb0RYqRa4aGTiyltP7TYNueRDtZm8ZaRBJEADDMSeT_lX6uNLnwPT4GdNGCVdgRSGkGxAQ-OyQVhNZNsZb0Kf_bPt3qns1GzTmAIRiaYGO8xIpi7GVnolLL8XfjNymvZaR1vu4NQLqosQLBOc9fJ8ELxtqsEyKJf4ohzcnag5H0Q5L8lYjRw-3E_Ddw8qrqHYFf5hJt6Ccj-UCecxCucNSlCj0xVp_JcnK7OIaWC_RLBC6tXdqKCbLDBCQ", title: "Nature Walks", desc: "Explore the surrounding wilderness.", span: "md:row-span-2" },
      { type: "color", color: "slate-100", title: "Seed Saving", desc: "Learn the ancient art of preserving heirloom varieties.", span: "md:col-span-3" }
    ],
    timeline: [
      { num: "01", title: "Arrival & Welcome", desc: "Meet your host family and settle into your rustic accommodation.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB26aNu4AuK9FFPk6XZcaz2X__MHY9TbKEYyknRY5npamoIcnBHwXc8z-V2perdJ6isWQwLK5bf9gzyLvb_BYg1BOsom5zZFuHCVr9L8dn1COQCXmjaFS1QiaqEdUjk9ShqMHQIpgprnmdlEaaCD3T39ehij5dkiUOV9hszUYSf9br5jfkWbNgiV_1bejSa2q9qzYgQmTN1KKb-2CnTnrp0_Wau17r4RNM08IFcI5n0NtYqPBKNFwHLPFIbFEWwHv-eys3H2meJLFHI" },
      { num: "02", title: "Orchard Work", desc: "Begin your hands-on training in traditional orchard management.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAm_mw8Ew3aUvNUxbJGX-7ZH0HTFgXuZwRIScmuChK7Yvn3Vd5qOBIA2VYi8wx-DHEj_APvPlBPTyS0h-9W5lUP5ejtmici3p-bYiKnN6LZNpGyJM0xsrcDq6dY0WinyrB0fTC3lL8O-luvMNXbbr-QuEJ6maOCCG-1UGSxevBhIwNvjjpHTl5kEvf2HyIS2-0QwzuOq2NehAjOzTDb0jiMrqUtj2S98lK7yoU2U9RzqhConPJRMy1bmvWdn6RbmJqFo5dUuDJRUk" },
      { num: "03", title: "Harvest Day", desc: "Participate in the communal harvest and learn preservation techniques.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ex-YGY58YGm9SuFBf00VO4aLbU0_gHhX4Mk6Mk9skWXhrLvNJgwuBFuUImJdyvO_XIyGuqqm_47tBYSHr2zF6yhc_Ehqmz8UiqdLPMrkLSy9uEz6MRFkU335eQoTu2XXzGZWVtTPz0M8tfaGBJPTXEYUO3-pkZC8XwWIFX4lFtPrEDSW8t8JtGg5-pEcXQBs80iZP20ULd67kH3gslGjiKpGo7TMfqE_irq51-D_X8ojEEoIlVpCw9ms_S0IrTEjqStFJiJCTU0w" },
      { num: "04", title: "Farewell Feast", desc: "Celebrate your journey with a farm-to-table dinner.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDTtqVrXgjf_T8EXoCv1fvg-NMiMp2hyfRhYISTwK1Sqc4UHdqoC4AhNasCiMkE6-xzI15-joovgjvglxtJYR0jXOW_knMkaIcvFL43LYZlTrvG9KellcRiEzXVVxKmn3ol7BPdUGg4YQOv0i_4_DiFqeyj6Ehl4q_ott5Are0Qi8ZmFmKMe7sAoMMeaPIGKKV6iRDDp2l7yrpKUVIvNIkn3_w0zAMKvdiz2I8QimqXrZqfPuS8BdR-gv1gnGSpJIrBEL7nIoAYlQ" }
    ],
    missions: [
      { icon: "agriculture", title: "Tree Care", desc: "Learn pruning and grafting techniques from master orchardists." },
      { icon: "restaurant", title: "Preservation", desc: "Master the art of canning, drying, and fermenting." },
      { icon: "spa", title: "Natural Remedies", desc: "Discover traditional uses for orchard herbs and fruits." }
    ],
    knownItems: ["The Region", "The Season", "Your Host Family's Trade"],
    mysteryItems: ["The Exact Location", "The Secret Recipe", "The Hidden Grove"],
    prepItems: [
      { icon: "checkroom", title: "Work Clothes", desc: "Comfortable, durable clothing for farm work." },
      { icon: "backpack", title: "Day Pack", desc: "For carrying tools and harvested goods." },
      { icon: "water_drop", title: "Water Bottle", desc: "Stay hydrated during outdoor activities." },
      { icon: "umbrella", title: "Rain Gear", desc: "Weather can change quickly in the orchards." }
    ],
    availability: { current: 1, total: 12 },
    months: [
      { label: "August - Fully Booked", available: false },
      { label: "September - 1 Spot", available: true, spots: 1 },
      { label: "October - Fully Booked", available: false },
      { label: "November - Waitlist", available: false }
    ]
  },
  "whispers-coast": {
    id: "whispers-coast",
    title: "Whispers of the Coast",
    subtitle: "EXPEDITION",
    expeditionNumber: "#044",
    duration: "6 Hours",
    groupSize: "8 - 10 Explorers",
    difficulty: "Easy",
    season: "Year Round",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRIbWVGlo4aUSDFa3U3ZJK3p-0yvTXvNJPu_SZIrh_MILBIFoZciNws66h8ckFP5wxxpg7jdb0AIflJRYBu372RnV32LY0TpbsuM2454v9va22Wzi413AV4N78x1KwcR1jQyW2qIeY7tNkiXJiL4BBLcCkORHc_4DSyCTQESmiYzD_GMfWh45kLtLTpA3iiAU7IeNBGcNoVnTFGJw-jVDQTNsQpMO25dMEYcIMPfXI180Kf8WWe0jtVE3B0ky1fNq_H6mfJod23i0q",
    overview: [
      "Whispers of the Coast is a half-day immersive experience along a hidden shoreline known only to local fishermen. This journey offers a taste of the 50/50 philosophy in a condensed format.",
      "You will explore tide pools, learn traditional fishing methods, and share a beachside meal prepared with the morning's catch."
    ],
    quickFacts: [
      { icon: "no_photography", text: "Phones allowed but encouraged to be kept away. Professional photos provided." },
      { icon: "home_pin", text: "Meeting Point: Revealed 24 hours before departure." },
      { icon: "forest", text: "Terrain: Sandy beaches, rocky coves, and coastal trails." }
    ],
    bentoItems: [
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFOEau7lMahw9K02dpxsqkUafu_T0ZrioKrCkugBxUuzoymwelBzYi2qPnZ7GDk4uddsMFRLy8INrzqJ9-HFSqu7T8wOkm1nMv3car6yNizFPGERD9vp_6VG1We2bkrNw1UeXk1m912A-WMZW1454c9wGRS3ekyHDc-qlESVcp2T-wIvsU_EVSqaCi4OqbXfrtwKbHU7eKWzCCrYHkPJMsB5OKDJOEzLW905NI74EJlawVIbs7jfLSCC2g9a6EDq7Wv2sneeUDeCR", title: "Coastal Walk", desc: "Traverse hidden paths along dramatic cliffs.", span: "md:col-span-2" },
      { type: "color", color: MOUNTAIN_BLUE, title: "Tide Pooling", desc: "Discover the micro-ecosystems of the intertidal zone." },
      { type: "image", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjDYw1v4gB_GTg6sjyd8Gb0RYqRa4aGTiyltP7TYNueRDtZm8ZaRBJEADDMSeT_lX6uNLnwPT4GdNGCVdgRSGkGxAQ-OyQVhNZNsZb0Kf_bPt3qns1GzTmAIRiaYGO8xIpi7GVnolLL8XfjNymvZaR1vu4NQLqosQLBOc9fJ8ELxtqsEyKJf4ohzcnag5H0Q5L8lYjRw-3E_Ddw8qrqHYFf5hJt6Ccj-UCecxCucNSlCj0xVp_JcnK7OIaWC_RLBC6tXdqKCbLDBCQ", title: "Ocean Views", desc: "Witness the raw power of the sea.", span: "md:row-span-2" },
      { type: "color", color: "slate-100", title: "Beach Feast", desc: "Share a communal meal prepared from the day's catch.", span: "md:col-span-3" }
    ],
    timeline: [
      { num: "01", title: "Dawn Gathering", desc: "Meet at the secret location as the sun rises.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB26aNu4AuK9FFPk6XZcaz2X__MHY9TbKEYyknRY5npamoIcnBHwXc8z-V2perdJ6isWQwLK5bf9gzyLvb_BYg1BOsom5zZFuHCVr9L8dn1COQCXmjaFS1QiaqEdUjk9ShqMHQIpgprnmdlEaaCD3T39ehij5dkiUOV9hszUYSf9br5jfkWbNgiV_1bejSa2q9qzYgQmTN1KKb-2CnTnrp0_Wau17r4RNM08IFcI5n0NtYqPBKNFwHLPFIbFEWwHv-eys3H2meJLFHI" },
      { num: "02", title: "Coastal Walk", desc: "Journey along hidden paths with your local guide.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAm_mw8Ew3aUvNUxbJGX-7ZH0HTFgXuZwRIScmuChK7Yvn3Vd5qOBIA2VYi8wx-DHEj_APvPlBPTyS0h-9W5lUP5ejtmici3p-bYiKnN6LZNpGyJM0xsrcDq6dY0WinyrB0fTC3lL8O-luvMNXbbr-QuEJ6maOCCG-1UGSxevBhIwNvjjpHTl5kEvf2HyIS2-0QwzuOq2NehAjOzTDb0jiMrqUtj2S98lK7yoU2U9RzqhConPJRMy1bmvWdn6RbmJqFo5dUuDJRUk" },
      { num: "03", title: "Fishing Lesson", desc: "Learn traditional techniques from local fishermen.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ex-YGY58YGm9SuFBf00VO4aLbU0_gHhX4Mk6Mk9skWXhrLvNJgwuBFuUImJdyvO_XIyGuqqm_47tBYSHr2zF6yhc_Ehqmz8UiqdLPMrkLSy9uEz6MRFkU335eQoTu2XXzGZWVtTPz0M8tfaGBJPTXEYUO3-pkZC8XwWIFX4lFtPrEDSW8t8JtGg5-pEcXQBs80iZP20ULd67kH3gslGjiKpGo7TMfqE_irq51-D_X8ojEEoIlVpCw9ms_S0IrTEjqStFJiJCTU0w" },
      { num: "04", title: "Beach Feast", desc: "Share stories over a freshly prepared seafood meal.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHDTtqVrXgjf_T8EXoCv1fvg-NMiMp2hyfRhYISTwK1Sqc4UHdqoC4AhNasCiMkE6-xzI15-joovgjvglxtJYR0jXOW_knMkaIcvFL43LYZlTrvG9KellcRiEzXVVxKmn3ol7BPdUGg4YQOv0i_4_DiFqeyj6Ehl4q_ott5Are0Qi8ZmFmKMe7sAoMMeaPIGKKV6iRDDp2l7yrpKUVIvNIkn3_w0zAMKvdiz2I8QimqXrZqfPuS8BdR-gv1gnGSpJIrBEL7nIoAYlQ" }
    ],
    missions: [
      { icon: "phishing", title: "Traditional Fishing", desc: "Learn casting nets and line fishing from local experts." },
      { icon: "science", title: "Marine Discovery", desc: "Identify coastal species and their ecological roles." },
      { icon: "restaurant", title: "Beach Cooking", desc: "Prepare a simple feast over an open beach fire." }
    ],
    knownItems: ["The Duration", "The General Region", "What to Bring"],
    mysteryItems: ["The Exact Beach", "Your Guide's Story", "The Secret Fishing Spot"],
    prepItems: [
      { icon: "checkroom", title: "Comfortable Clothes", desc: "Dress in layers for changing coastal weather." },
      { icon: "hiking", title: "Water Shoes", desc: "For navigating rocky tide pools safely." },
      { icon: "water_drop", title: "Water Bottle", desc: "Stay hydrated during the coastal walk." },
      { icon: "wb_sunny", title: "Sun Protection", desc: "Hat, sunscreen, and sunglasses recommended." }
    ],
    availability: { current: 8, total: 20 },
    months: [
      { label: "This Week - 4 Spots", available: true, spots: 4 },
      { label: "Next Week - 4 Spots", available: true, spots: 4 },
      { label: "Weekend - Waitlist", available: false },
      { label: "Custom - Available", available: true, spots: 8 }
    ]
  }
};

export default function ExpeditionPage() {
  const params = useParams();
  const expeditionId = params.id as string;
  const expedition = EXPEDITIONS[expeditionId] || EXPEDITIONS["silent-valley"];

  return (
    <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Hero Section with Spotlight */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill={PRIMARY} />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10" />
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${expedition.heroImage}')` }}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#20603d] animate-pulse" />
            Mystery Expedition {expedition.expeditionNumber}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-4xl">
            {expedition.title.toUpperCase()} <span className="text-[#20603d]">{expedition.subtitle}</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-10">
            {[
              { label: "Duration", value: expedition.duration },
              { label: "Group Size", value: expedition.groupSize },
              { label: "Difficulty", value: expedition.difficulty },
              { label: "Season", value: expedition.season }
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
                <span className="text-white text-lg font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h3 className="text-[#20603d] font-bold tracking-widest text-xs uppercase mb-4">The Spirit of the Journey</h3>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">A whisper in the fog, a story waiting to be told.</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {expedition.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <MovingBorder
            as="div"
            containerClassName="rounded-2xl"
            className="bg-[#20603d] p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
              <span className="material-symbols-outlined text-[200px]">auto_stories</span>
            </div>
            <h4 className="text-2xl font-bold mb-6">Quick Facts</h4>
            <div className="space-y-6 relative z-10">
              {expedition.quickFacts.map((fact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#C17C3A]">{fact.icon}</span>
                  <p className="text-sm">{fact.text}</p>
                </div>
              ))}
              <button className="w-full bg-white text-[#20603d] font-bold py-4 rounded-xl mt-4 hover:bg-background-light transition-colors">
                Download Preparation Guide
              </button>
            </div>
          </MovingBorder>
        </div>
      </section>

      {/* Experience Bento Grid */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">The Experience Architecture</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Four pillars designed to strip away the superficial and reconnect you with the essential.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {expedition.bentoItems.map((item, i) => (
              <div
                key={i}
                className={`${item.span || ""} bento-card relative rounded-2xl overflow-hidden group`}
              >
                {item.type === "image" ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                      <h5 className="text-white text-2xl font-bold">{item.title}</h5>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <div
                    className="h-full p-8 flex flex-col justify-between text-white"
                    style={{ backgroundColor: item.color === "slate-100" ? undefined : item.color }}
                  >
                    {item.color === "slate-100" ? (
                      <div className="h-full flex flex-col md:flex-row gap-8 items-center border border-slate-200 dark:border-slate-700 p-8 rounded-2xl bg-slate-100 dark:bg-slate-800">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-[#20603d]/10 text-[#20603d] text-[10px] font-bold uppercase rounded-full mb-4 tracking-widest">Active Discovery</span>
                          <h5 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h5>
                          <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                        <div className="w-full md:w-64 h-32 bg-[#20603d]/5 rounded-xl border-2 border-dashed border-[#20603d]/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#20603d]/40 text-4xl">grid_view</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl">fireplace</span>
                        <div>
                          <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Narrative Timeline */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-black">The Narrative Arc</h2>
        </div>
        <div className="flex overflow-x-auto pb-12 gap-8 px-6 lg:px-20 scrollbar-hide">
          {expedition.timeline.map((step) => (
            <div key={step.num} className="flex-shrink-0 w-80 group">
              <div className="text-[#20603d] font-bold mb-4 flex items-center gap-2">
                <span className="text-xs">{step.num}</span>
                <div className="h-px w-full bg-[#20603d]/20" />
              </div>
              <h6 className="text-xl font-bold mb-3">{step.title}</h6>
              <p className="text-slate-500 text-sm mb-6">{step.desc}</p>
              <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt={step.title} src={step.image} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Spotlight Grid */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black mb-16">Expedition Missions</h2>
          <HoverEffect
            className="grid-cols-1 md:grid-cols-3"
            items={expedition.missions.map((m) => ({
              title: m.title,
              description: m.desc,
              icon: <span className="material-symbols-outlined text-[#20603d] text-3xl">{m.icon}</span>,
            }))}
          />
        </div>
      </section>

      {/* Knowledge Comparison */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border-l-4 border-slate-400">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6 block">What You Know</span>
            <ul className="space-y-4">
              {expedition.knownItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#20603d] p-10 rounded-3xl text-white border-l-4 border-[#C17C3A]">
            <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-6 block">What Remains a Mystery</span>
            <ul className="space-y-4">
              {expedition.mysteryItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C17C3A]">help</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Digital Detox Section with Spotlight */}
      <section className="relative py-48 overflow-hidden bg-background-dark">
        <Spotlight className="-top-20 left-0" fill={PRIMARY} />
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="Dense dark green pine forest under fog"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhPKcT0NY_3BuJ783Ppww0bJVd7cUJ51mdLJjQjvB7YCK3aCjUeyg7qwB7TMk8rGz_7J9Akgegx9D5lGrBVidpH_IyEjkLetXyaxE5nVHAfYXMibkPDopKOEGl9rU2W2DyhDacIseIAs-kGvpuoEcey8QTL0IlAltLXcs3LxDNLv1oFbwyRX7ekHFSAudXqi0v4rwEDYNX5ndyQWh4aSRMCX25CZe6Bmp651KGx9i8KQnq2bS7VnjM-S-YUnmEFxZ8AskdAmZxLoW"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">DISCONNECT TO RECONNECT</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">No notifications. No emails. No scrolling. Just the wind in the trees and the sound of your own heartbeat.</p>
          <div className="flex justify-center">
            <div className="px-8 py-4 border border-white/20 rounded-full text-white font-bold flex items-center gap-4 bg-white/5 backdrop-blur-md">
              <span className="material-symbols-outlined">signal_cellular_off</span>
              <span>100% Offline Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation & Scarcity */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black mb-10">Essential Preparation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {expedition.prepItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-[#20603d]">{item.icon}</span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/30 p-10 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-black mb-6">Limited Availability</h2>
            <p className="text-slate-500 mb-8">To preserve the sanctity of the valley and ensure authentic connection with local families, we only run 12 expeditions per year.</p>
            <div className="relative pt-4">
              <div className="flex justify-between text-sm font-bold mb-2">
                <span>Current Openings (2024 Season)</span>
                <span className="text-[#20603d]">{expedition.availability.current} / {expedition.availability.total} Remaining</span>
              </div>
              <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#20603d]"
                  style={{ width: `${(expedition.availability.current / expedition.availability.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {expedition.months.map((month) => (
                <span
                  key={month.label}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    month.available
                      ? "bg-[#20603d] text-white"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {month.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#20603d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 L50 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Your next adventure begins with mystery.</h2>
          <p className="text-xl text-white/80 mb-12">Applications for the Autumn season are now open. Are you ready to step into the silent valley?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowingButton className="bg-white text-[#20603d] px-10 py-5 rounded-full font-black text-lg hover:bg-background-light transition-all transform hover:scale-105">
              Start Your Application
            </GlowingButton>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
              Talk to an Alchemist
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
