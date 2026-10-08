import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHeroTitle() {
  const words = [
    { text: 'AI', color: '#111111' },
    { text: 'Full-Stack', color: '#b2b2b2' },
    { text: 'Developer', color: '#111111' },
  ];

  let charCount = 0;

  return (
    <h1 className="text-2xl md:max-w-[540px] leading-none tracking-[-2.5px]">
      {words.map((wordObj, wIdx) => {
        const letters = wordObj.text.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, cIdx) => {
              const currentDelay = charCount * 0.016;
              charCount++;
              const isDot = char === '.' && wordObj.dotColor;
              return (
                <motion.span
                  key={cIdx}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: currentDelay,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block"
                  style={{ color: isDot ? wordObj.dotColor : wordObj.color }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </h1>
  );
}
