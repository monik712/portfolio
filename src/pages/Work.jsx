import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LightboxModal from '../components/LightboxModal';

const caseStudies = [
  {
    title: '4fett',
    type: 'Web app',
    src: '/images/case-4fett.webp',
    href: '/work/4fett',
  },
  {
    title: 'Togevent',
    type: 'App, Web app',
    src: '/images/case-togevent.webp',
    href: '/work/togevent',
  },
  {
    title: 'Bounty Hunters',
    type: 'Website',
    src: '/images/case-bh.png',
    href: '/work/bounty-hunters',
  },
  {
    title: 'Kiwi',
    type: 'App',
    src: '/images/case-kiwi.webp',
    href: '/work/kiwi',
  },
];

const explorationImages = [
  { src: '/images/fantacalcio1.webp', alt: 'Fantacalcio Exploration 1' },
  { src: '/images/fantacalcio2.webp', alt: 'Fantacalcio Exploration 2' },
  { src: '/images/fantacalcio3.webp', alt: 'Fantacalcio Exploration 3' },
  { src: '/images/napoli1.webp', alt: 'Napoli Exploration 1' },
  { src: '/images/napoli2.webp', alt: 'Napoli Exploration 2' },
  { src: '/images/napoli3.webp', alt: 'Napoli Exploration 3' },
  { src: '/images/lumina1.webp', alt: 'Lumina Exploration 1' },
  { src: '/images/lumina2.webp', alt: 'Lumina Exploration 2' },
];

export default function Work() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* 1. Work Header Intro */}
      <section className="px-4 pt-10 md:pt-14 pb-12 md:pb-25">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6">
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl leading-[1.05] md:leading-[68px] tracking-[-2.56px]">
              <span className="text-[#b2b2b2]">A collection of </span>
              <span className="text-[#111111]">projects</span>
              <span className="text-[#b2b2b2]">, </span>
              <span className="text-[#111111]">explorations</span>
              <span className="text-[#b2b2b2]"> and </span>
              <span className="text-[#111111]">details</span>
              <span className="text-[#b2b2b2]">. Some are case studies. Some are just good work.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Case Studies Grid */}
      <section className="px-4 pb-10 md:pb-12 border-gray-100">
        <div className="site-container flex flex-col gap-y-6">
          <p className="hidden md:block text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Case studies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <Link to={cs.href} className="block group">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg relative mb-3">
                    <img
                      src={cs.src}
                      alt={cs.title}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-sm font-medium text-[#111111]">{cs.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{cs.type}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explorations Gallery */}
      <section className="px-4 py-10 md:py-12 border-t border-gray-100">
        <div className="site-container">
          <p className="text-lg leading-[36.4px] tracking-[-0.64px] text-black mb-6 md:mb-8">
            Explorations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {explorationImages.map((exp, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                onClick={() => openLightbox(idx)}
                aria-label={exp.alt}
                className="aspect-[3/4] relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] cursor-pointer group bg-gray-100"
              >
                <img
                  src={exp.src}
                  alt={exp.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Explorations Lightbox Modal */}
      <LightboxModal
        images={explorationImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : explorationImages.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < explorationImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
