"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import tokenize from "../helper";

type Segment = {
  text: string;
  highlight?: boolean;
};

interface SlideInTextProps {
  segments?: Segment[];
  centered?: boolean;
  textSize?: string; // e.g., "text-lg", "text-4xl"
}

export const SlideInText = ({
  segments = [{ text: "Simplicity is the ultimate sophistication." }],
  centered = false,
  textSize = "text-xl md:text-3xl",
}: SlideInTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  let charIndex = 0;

  console.log(centered)
  return (
    <h2
      ref={ref}
      className={`${textSize} font-light flex flex-wrap gap-x-1 leading-relaxed ${
        centered ? "justify-center" : "justify-start lg:justify-start"
      } items-center`}
    >
      {segments.map((segment, i) => {
        const words = tokenize(segment.text);

        return (
          <span
            key={`segment-${i}`}
            className={`flex flex-wrap ${
              segment.highlight
                ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            {words.map((word, wIdx) => (
              <span
                key={`word-${i}-${wIdx}`}
                className="mr-1 whitespace-nowrap"
              >
                {word.split("").map((char, cIdx) => {
                  const index = charIndex++;
                  return (
                    <motion.span
                      key={`char-${index}`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.03, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </span>
        );
      })}
    </h2>
  );
};
