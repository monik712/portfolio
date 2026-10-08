import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedHeroTitle from '../components/AnimatedHeroTitle';
import Marquee from '../components/Marquee';
import LightboxModal from '../components/LightboxModal';

const explorationImages = [
  { src: '/images/napoli3.webp', alt: 'Napoli Exploration 3' },
  { src: '/images/napoli2.webp', alt: 'Napoli Exploration 2' },
  { src: '/images/fantacalcio2.webp', alt: 'Fantacalcio Exploration 2' },
  { src: '/images/fantacalcio3.webp', alt: 'Fantacalcio Exploration 3' },
];

const services = [
  {
    num: '001',
    title: 'Frontend Development',
    subtitle: 'Responsive and polished interfaces.',
    desc: 'Building clean, modern interfaces using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V22C26 24.2091 24.2091 26 22 26H10C7.79086 26 6 24.2091 6 22V10Z" stroke="#111111" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="4" stroke="#111111" strokeWidth="1.5"/>
        <path d="M16 6V12M16 20V26M6 16H12M20 16H26" stroke="#111111" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '002',
    title: 'Backend Development',
    subtitle: 'Reliable logic and data layers.',
    desc: 'Creating scalable backend systems and APIs with Django, Python, PHP, REST APIs, MySQL, and SQLite.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="8" height="8" rx="1.5" stroke="#111111" strokeWidth="1.5"/>
        <rect x="18" y="6" width="8" height="8" rx="1.5" stroke="#111111" strokeWidth="1.5"/>
        <rect x="6" y="18" width="8" height="8" rx="1.5" stroke="#111111" strokeWidth="1.5"/>
        <rect x="18" y="18" width="8" height="8" rx="1.5" fill="#111111"/>
      </svg>
    ),
  },
  {
    num: '003',
    title: 'Full Stack Projects',
    subtitle: 'End-to-end product thinking.',
    desc: 'Developing complete digital products from UI flows and auth to database integration and real-world workflows.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="8" r="3" stroke="#111111" strokeWidth="1.5"/>
        <circle cx="7" cy="24" r="3" stroke="#111111" strokeWidth="1.5"/>
        <circle cx="25" cy="24" r="3" stroke="#111111" strokeWidth="1.5"/>
        <path d="M16 11V18M16 18L10 21M16 18L22 21" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '004',
    title: 'Problem Solving',
    subtitle: 'Build with logic and clarity.',
    desc: 'Applying engineering thinking to deliver practical, user-focused solutions through real-world projects and hackathons.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="7" r="2.5" stroke="#111111" strokeWidth="1.5"/>
        <path d="M9 13H23" stroke="#111111" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 13L10 26M20 13L22 26" stroke="#111111" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 13L16 20L20 13" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentExpIndex, setCurrentExpIndex] = useState(0);

  const openLightbox = (idx) => {
    setCurrentExpIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="px-4 pt-4 pb-2">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6 items-stretch">
          <div className="flex flex-col justify-end py-4 md:py-16 gap-6 md:gap-10 md:h-full">
            <AnimatedHeroTitle />
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-md md:max-w-[540px] leading-relaxed text-gray-400">
                Motivated and enthusiastic Full Stack Developer with a strong foundation in modern web development,
                frontend and backend technologies, and hands-on experience building responsive, user-focused web apps.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="aspect-[3/4] md:aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              <img
                src="/images/home-hero-right-img.webp"
                alt="Portrait"
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Hero Mockup Banner */}
      <section className="px-4 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="site-container aspect-square md:aspect-[2/1] relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/images/home-hero-left.webp"
              alt="App design mockup"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Info Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4">
          <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Info
          </p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-md leading-relaxed text-gray-500">
              I'm RATHOD MONIK, an AI-Full-Stack Developer based in Ahmedabad, Gujarat. I build responsive,
              practical, and modern web applications using React.js, Python, Django, JavaScript, MySQL, Firebase, and
              related tools.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 text-md underline underline-offset-4 text-gray-400 hover:text-[#111111] transition-colors"
            >
              Discover more
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100">
        <div className="site-container">
          <p className="text-lg leading-[36.4px] tracking-[-0.64px] text-black mb-6 md:mb-8">Services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {services.map((srv, idx) => (
              <motion.div
                key={srv.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between min-h-[280px] border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors duration-200"
              >
                <p className="text-xs text-gray-400">{srv.num}</p>
                <div className="flex flex-col gap-5">
                  <div className="text-[#111111]">{srv.icon}</div>
                  <div>
                    <p className="text-xl font-medium text-[#111111]">{srv.title}</p>
                    <p className="text-sm font-medium text-[#111111] mt-1 mb-3">{srv.subtitle}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Work Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4 mb-6 md:mb-8">
            <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
              Work
            </p>
            <div>
              <p className="text-sm leading-relaxed text-gray-500">
                A selection of projects across product design, interfaces and design systems — built with teams that
                care about how things look.
              </p>
              <Link
                to="/work"
                className="inline-block mt-4 text-sm underline underline-offset-4 text-gray-400 hover:text-[#111111] transition-colors"
              >
                View all
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* 4fett Card */}
            <Link to="/work/4fett" className="block group">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden rounded-lg relative mb-3">
                <img
                  src="/images/case-4fett.webp"
                  alt="4fett"
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm font-medium text-[#111111]">4fett</p>
              <p className="text-xs text-gray-400 mt-0.5">Web app</p>
            </Link>

            {/* Togevent Card */}
            <Link to="/work/togevent" className="block group">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg relative mb-3">
                <img
                  src="/images/case-togevent.webp"
                  alt="Togevent"
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm font-medium text-[#111111]">Togevent</p>
              <p className="text-xs text-gray-400 mt-0.5">App, Web app</p>
            </Link>

            {/* Explorations 4-grid */}
            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 grid grid-cols-2 gap-1 bg-gray-50">
                {explorationImages.map((exp, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    aria-label={`View exploration ${idx + 1}`}
                    className="relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] cursor-pointer group"
                  >
                    <img
                      src={exp.src}
                      alt={exp.alt}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm font-medium text-[#111111]">Explorations</p>
              <p className="text-xs text-gray-400 mt-0.5">Design passions &amp; experiments</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Marquee */}
      <Marquee />

      {/* Explorations Lightbox Modal */}
      <LightboxModal
        images={explorationImages}
        currentIndex={currentExpIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentExpIndex((prev) => (prev > 0 ? prev - 1 : explorationImages.length - 1))}
        onNext={() => setCurrentExpIndex((prev) => (prev < explorationImages.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
