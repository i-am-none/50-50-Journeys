"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < words.length) {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, duration * 1000 / words.length);

    return () => clearTimeout(timeout);
  }, [currentIndex, words, duration]);

  return (
    <motion.span
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
      style={{
        display: "inline-block",
      }}
    >
      {displayedText.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
          }}
          animate={{
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          }}
          transition={{
            duration: 0.3,
            delay: idx * 0.02,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
