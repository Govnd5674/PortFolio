import React from "react";
import { motion } from "framer-motion";

const WelcomeText = () => {
  const text = "WHATS'UP, WELCOME !".split("");

  return (
    <div className="flex items-center justify-center">
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
          className="text-gray-400 text-7xl font-Mogra inline-block mb-8"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WelcomeText;
