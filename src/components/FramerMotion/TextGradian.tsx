"use client";
import React from "react";
import { motion } from "framer-motion";

const TextGradient = ({ title }: { title: string }) => {
  return (
    <motion.h1
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        background: "linear-gradient(to right, #0a6fd9, #0edcbc)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "200% 200%",
        display: "inline-block",
      }}
    >
      {title}
    </motion.h1>
  );
};

export default TextGradient;
