import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CaseStudyHero from '../components/CaseStudyHero';
import { caseStudiesData } from '../data/caseStudiesData';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const data = caseStudiesData[slug];

  if (!data) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pb-0">
      {/* 1. Header with title & meta */}
      <CaseStudyHero
        title={data.title}
        year={data.year}
        role={data.role}
        type={data.type}
        link={data.link}
      />

      {/* 2. Hero Image Banner */}
      <section className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="site-container aspect-[10/7] rounded-lg relative bg-gray-100 overflow-hidden"
        >
          <img
            src={data.heroImg}
            alt={data.heroAlt}
            className="object-cover w-full h-full"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* 3. Overview Paragraphs */}
      <section className="px-4 py-10 md:py-16">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1">
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-md leading-relaxed text-gray-500"
          >
            {data.overview.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Banner 1 */}
      {data.banner1 && (
        <section className="px-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container aspect-[10/6] relative rounded-lg overflow-hidden bg-gray-100"
          >
            <img
              src={data.banner1}
              alt={`${data.title} screens`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </section>
      )}

      {/* 5. Design Goals Section */}
      {data.designGoals && (
        <section className="px-4 py-10 md:py-12 border-t border-gray-100">
          <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4">
            <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
              Design Goals
            </p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-md leading-relaxed text-gray-500">{data.designGoals}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Banner 2 (for togevent) */}
      {data.banner2 && (
        <section className="px-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container aspect-[10/6] relative rounded-lg overflow-hidden bg-gray-100"
          >
            <img
              src={data.banner2}
              alt={`${data.title} desktop screens`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </section>
      )}

      {/* 6. Grid 2x2 (4 images) */}
      {data.grid2x2 && (
        <section className="px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container grid grid-cols-2 gap-1"
          >
            {data.grid2x2.map((item, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] md:aspect-square relative overflow-hidden rounded-lg bg-gray-50"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-contain md:object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Grid Custom (Bounty Hunters 3 images with span 2) */}
      {data.gridCustom && (
        <section className="px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container grid grid-cols-2 gap-1"
          >
            {data.gridCustom.map((item, idx) => (
              <div
                key={idx}
                className={`aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-50 ${
                  item.span === 2 ? 'col-span-2' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Banner 3 (for togevent) */}
      {data.banner3 && (
        <section className="px-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container aspect-[10/6] relative rounded-lg overflow-hidden bg-gray-100"
          >
            <img
              src={data.banner3}
              alt={`${data.title} showcase`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </section>
      )}

      {/* Extra Section (The System / The Build) */}
      {data.extraSection && (
        <section className="px-4 py-10 md:py-12 border-t border-gray-100">
          <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-4">
            <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
              {data.extraSection.title}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-md leading-relaxed text-gray-500">{data.extraSection.text}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Design System Banner */}
      {data.dsBanner && (
        <section className="px-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container rounded-lg overflow-hidden"
          >
            <img
              src={data.dsBanner}
              alt={`${data.title} design system`}
              className="w-full h-auto rounded-lg object-contain"
              loading="lazy"
            />
          </motion.div>
        </section>
      )}

      {/* Additional Banners */}
      {data.additionalBanners &&
        data.additionalBanners.map((b, idx) => (
          <section key={idx} className="px-4 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="site-container aspect-[10/6] relative rounded-lg overflow-hidden bg-gray-100"
            >
              <img src={b.src} alt={b.alt} className="object-cover w-full h-full" loading="lazy" />
            </motion.div>
          </section>
        ))}

      {/* Final Banner */}
      {data.finalBanner && (
        <section className="px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="site-container rounded-lg overflow-hidden"
          >
            <img
              src={data.finalBanner}
              alt={`${data.title} screens`}
              className="w-full h-auto rounded-lg object-contain"
              loading="lazy"
            />
          </motion.div>
        </section>
      )}

      {/* 7. Next Project Link */}
      {data.nextProject && (
        <Link
          to={data.nextProject.href}
          className="block bg-[#ffffff] border-t border-gray-100 px-4 py-8 md:py-10 hover:bg-gray-50 transition-colors"
        >
          <div className="site-container flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-800 mb-1">Next project</p>
              <p className="text-2xl tracking-[-2.56px] text-black">
                {data.nextProject.title}
              </p>
            </div>
            <span className="text-sm pb-4 text-black">
              Visualizza →
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
