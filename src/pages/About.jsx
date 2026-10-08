import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    name: 'Kadi Sarva Vishwavidyalaya (KSV)',
    role: 'B.E. in Computer Science and Engineering',
    icon: '/images/ksv.png',
    period: 'Present',
    paragraphs: [
      'Currently pursuing a degree in Computer Science and Engineering with a focus on practical software development and engineering concepts.',
      'The program is helping build a strong foundation in problem-solving, system thinking, software architecture, and real-world technical implementation.',
    ],
  },
  {
    name: 'Self-Projects / Hackathons',
    role: 'Developer & Problem Solver',
    icon: '/images/hackathon.png',
    period: '2024 — Present',
    paragraphs: [
      'Built practical web applications and worked on user-focused product development using React.js, Python, Django, JavaScript, and modern web tools.',
      'Participated in hackathons and technical competitions to improve innovation, teamwork, and rapid product thinking under real constraints.',
      'Projects include a service marketplace app and a Python-based e-commerce concept focused on practical web development and user experience.',
    ],
  },
  {
    name: 'Adobe India Hackathon 2026',
    role: 'Participant',
    icon: '/images/adobe.png',
    period: '2026',
    paragraphs: [
      'Participated in Adobe India Hackathon 2026 and gained exposure to competitive problem-solving, innovation, and technology-based development.',
    ],
  },
  {
    name: 'MSME Idea Hackathon 6.0',
    role: 'Participant',
    icon: '/images/msme.png',
    period: '2025',
    paragraphs: [
      'Submitted an AI-based production planning idea in MSME Idea Hackathon 6.0, focusing on real-world impact and innovation-driven solution design.',
    ],
  },
  {
    name: 'Smart India Hackathon',
    role: 'Participant',
    icon: '/images/sih.png',
    period: '2024',
    paragraphs: [
      'Participated in Smart India Hackathon, gaining hands-on experience in collaborative problem-solving, innovation, and solution development under team-driven conditions.',
    ],
  },
];

const clients = [
  { name: 'Adobe', src: '/images/adobe.png' },
  { name: 'MSME', src: '/images/msme.png' },
  { name: 'SIH', src: '/images/sih.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Python', src: '/images/python.png' },
  { name: 'Django', src: '/images/django.png' },
  { name: 'MySQL', src: '/images/mysql.png' },
  { name: 'Firebase', src: '/images/firebase.png' },
  { name: 'GitHub', src: '/images/github.png' },
  { name: 'Git', src: '/images/git.png' },
  { name: 'VS Code', src: '/images/vscode.png' },
  { name: 'Postman', src: '/images/postman.png' },
  { name: 'Tailwind', src: '/images/tailwind.png' },
  { name: 'Bootstrap', src: '/images/bootstrap.png' },
  { name: 'AI Tools', src: '/images/ai.png' },
  { name: 'Portfolio', src: '/images/portfolio.png' },
  { name: 'Sahyog', src: '/images/sahyog.png' },
  { name: 'E-Commerce', src: '/images/ecommerce.png' },
  { name: 'Projects', src: '/images/projects.png' },
  { name: 'Growth', src: '/images/growth.png' },
];

export default function About() {
  return (
    <div>
      {/* 1. Hero Portrait */}
      <section className="px-4 pb-4 md:pb-14 pt-4">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] md:aspect-[2/1] rounded-lg relative overflow-hidden bg-gray-100"
          >
            <img
              src="/images/about-hero.png"
              alt="Portrait of RATHOD MONIK"
              className="object-cover w-full h-full"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Info Section */}
      <section className="px-4 py-10 pt-4 md:py-12 border-t border-gray-100">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6">
          <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Info
          </p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-md leading-relaxed text-gray-500"
          >
            <p>
              I'm RATHOD MONIK, an AI-Full-Stack Developer based in Ahmedabad, Gujarat. I build responsive,
              user-focused web applications using modern frontend and backend technologies.
            </p>
            <p>
              I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, React.js, Python, Django, PHP,
              REST APIs, MySQL, SQLite, and developer tools like Git, GitHub, VS Code, Postman, and XAMPP.
            </p>
            <p>
              My focus is on practical product development: building clean interfaces, scalable backend logic, smooth
              workflows, and reliable user experiences that solve real-world problems.
            </p>
            <p>
              I enjoy turning ideas into working digital experiences through real projects, hackathons, and continuous
              learning in software engineering, AI-assisted development, and product implementation.
            </p>
            <p>
              My work is driven by problem-solving, adaptability, and a strong desire to keep improving technical skills
              while building useful products for users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Work Experience Section */}
      <section className="px-4 py-10 md:py-12 border-t border-gray-100">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6">
          <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Work Experience
          </p>
          <div className="divide-y divide-gray-100">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="py-10 first:pt-0"
              >
                <div className="flex items-end justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0 border border-gray-100">
                      <img src={exp.icon} alt={exp.name} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="text-md font-medium text-[#111111]">{exp.name}</p>
                      <p className="text-sm text-gray-400 mt-0.5">{exp.role}</p>
                    </div>
                  </div>
                  {exp.period && (
                    <span className="text-xs text-gray-400 shrink-0 ml-4">{exp.period}</span>
                  )}
                </div>
                <div className="space-y-3">
                  {exp.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-gray-500 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Clients Section */}
      <section className="px-4 py-10 md:py-12 border-t border-gray-100">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6">
          <p className="md:sticky md:self-start md:top-4 text-lg leading-[36.4px] tracking-[-0.64px] text-black">
            Clients
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 items-center">
            {clients.map((c) => (
              <div key={c.name} className="relative h-15 md:h-20 w-full flex items-center justify-start">
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-12 md:max-h-16 w-auto max-w-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
