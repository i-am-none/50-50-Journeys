"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-[#0c1a10] bg-white border border-[#20603d]/8 dark:border-[#20603d]/20 flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {header && <div className="flex-1">{header}</div>}
      <div className="group-hover/bento:translate-x-1 transition duration-200 mt-auto">
        {icon}
        <div className="font-bold font-display text-slate-900 dark:text-slate-100 mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-light text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
