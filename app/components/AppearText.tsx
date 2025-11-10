"use client";
import { motion } from "framer-motion";

export const AppearText = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-xl md:text-2xl font-light leading-relaxed text-white mt-10"
    >
      Each project I’ve worked on tells a story of
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        challenges faced
      </span>
      , solutions crafted, and{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        lessons learned
      </span>
      . Whether leading{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        frontend efforts
      </span>
      , diving deep into{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        API integration
      </span>
      , or optimizing for{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        performance
      </span>
      , I approach every task with{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        focus
      </span>{" "}
      and{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        curiosity
      </span>
      . Here are some highlights from my journey so far:
    </motion.p>
  );
};
