"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const AnimatedTabs = ({
  tabs,
  className,
  tabClassName,
}: {
  tabs: { id: string; label: string }[];
  className?: string;
  tabClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={cn("flex items-center gap-1 p-1 bg-white/10 dark:bg-black/20 rounded-full backdrop-blur-sm border border-white/20", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "relative px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-colors duration-200",
            activeTab === tab.id
              ? "text-white"
              : "text-white/60 hover:text-white/80",
            tabClassName
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-full bg-[#20603d]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
