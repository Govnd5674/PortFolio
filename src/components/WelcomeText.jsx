import React from "react";
import { motion } from "framer-motion";

const WelcomeText = () => {
  const text = "WHATS'UP, WELCOME !".split("");

  return (
    <div className="flex flex-wrap items-center justify-center px-4">
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="text-gray-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-Mogra inline-block mb-4 sm:mb-6 md:mb-8"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WelcomeText;
