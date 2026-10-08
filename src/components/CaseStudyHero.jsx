import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudyHero({ title, year, role, type, link }) {
  const letters = title.split('');

  return (
    <section className="px-4 pt-10 md:pt-14 pb-8 md:pb-12">
      <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6">
        <h1 className="text-2xl leading-[1.05] tracking-[-2.56px] text-[#111111]">
          {letters.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1 md:pt-2"
        >
          <div>
            <p className="text-gray-400 mb-1">Year</p>
            <p className="text-[#111111] font-medium">{year}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Role</p>
            <p className="text-[#111111] font-medium leading-tight">{role}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">Type</p>
            <p className="text-[#111111] font-medium">{type}</p>
          </div>
          {link ? (
            <div>
              <p className="text-gray-400 mb-1">Link</p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-[#111111] hover:text-gray-500 transition-colors"
              >
                {link.label}
              </a>
            </div>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </section>
  );
}
