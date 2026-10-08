# Monik Portfolio Data Template

This file is filled with Monik’s actual CV data and is ready to be used as the content base for the portfolio site.

---

## 1. Basic Personal Information

```js
export const siteProfile = {
  name: "RATHOD MONIK",
  title: "AI-FULL-STACK DEVELOPER",
  location: "Ahmedabad, Gujarat",
  phone: "+91 9106638851",
  email: "rmonik748@gmail.com",
  linkedin: "ADD_LINKEDIN_URL",
  github: "ADD_GITHUB_URL",
  bio: "Motivated and enthusiastic Full Stack Developer with a strong foundation in modern web development and hands-on knowledge of frontend and backend technologies.",
  heroTagline: "Designer crafting digital experiences from UX to UI systems.",
  introParagraph: "Motivated and enthusiastic Full Stack Developer with a strong foundation in modern web development and hands-on knowledge of frontend and backend technologies. Skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Python, Django, PHP, REST APIs, MySQL and SQLite. Interested in developing responsive, user-focused web applications and continuously improving technical and problem-solving skills through real-world projects, hackathons and collaborative activities.",
};
```

### Actual details from CV
- Name: RATHOD MONIK
- Title: AI-FULL-STACK DEVELOPER
- Location: Ahmedabad, Gujarat
- Phone: +91 9106638851
- Email: rmonik748@gmail.com
- LinkedIn: add actual URL
- GitHub: add actual URL
- Career objective: included above

---

## 2. Header and Navigation Data

```js
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '#contact' },
];
```

---

## 3. Home Page Data

```js
export const homeData = {
  hero: {
    headline: "AI-FULL-STACK DEVELOPER",
    subheadline: "Building responsive, user-focused web experiences with modern frontend and backend technologies.",
    ctaPrimary: "View work",
    ctaSecondary: "About me",
  },
  aboutPreview: {
    title: "Info",
    text: "I am a Full Stack Developer focused on building practical, responsive, and user-friendly digital products using React.js, Python, Django, JavaScript, and modern web tools.",
    linkLabel: "Discover more",
    linkHref: "/about",
  },
  services: [
    {
      number: "001",
      title: "Frontend Development",
      shortText: "Responsive and polished interfaces.",
      description: "Creating clean and engaging user interfaces using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.",
    },
    {
      number: "002",
      title: "Backend Development",
      shortText: "Reliable data and logic layers.",
      description: "Building scalable backend services and APIs using Django, Python, PHP, REST APIs, MySQL, and SQLite.",
    },
    {
      number: "003",
      title: "Full Stack Projects",
      shortText: "End-to-end product thinking.",
      description: "Developing complete digital products from frontend flows to database integration, authentication, and application workflows.",
    },
    {
      number: "004",
      title: "Problem Solving",
      shortText: "Build with logic and clarity.",
      description: "Applying real-world engineering thinking to create practical, user-oriented solutions and improve product reliability.",
    },
  ],
};
```

---

## 4. About Page Data

```js
export const aboutData = {
  pageTitle: "About",
  heroImage: "/images/about/monik-portrait.webp",
  intro: [
    "Motivated and enthusiastic Full Stack Developer with a strong foundation in modern web development and hands-on knowledge of frontend and backend technologies.",
    "Skilled in HTML, CSS, JavaScript, Bootstrap, React.js, Python, Django, PHP, REST APIs, MySQL and SQLite.",
    "Interested in developing responsive, user-focused web applications and continuously improving technical and problem-solving skills through real-world projects, hackathons and collaborative activities.",
  ],
  experience: [
    {
      company: "Kadi Sarva Vishwavidyalaya (KSV)",
      role: "B.E. in Computer Science and Engineering",
      years: "Present",
      description: "Currently pursuing a degree in Computer Science and Engineering with focus on practical software development and engineering concepts.",
    },
    {
      company: "Self-Projects / Hackathons",
      role: "Developer & Problem Solver",
      years: "2024 — Present",
      description: "Built practical web applications, participated in hackathons, and worked on user-focused product development using modern technologies.",
    },
  ],
  clients: [
    "Adobe India Hackathon 2026",
    "MSME Idea Hackathon 6.0",
    "Smart India Hackathon",
    "Project Portfolio",
  ],
};
```

### Education data
```js
export const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Kadi Sarva Vishwavidyalaya (KSV)",
    campus: "VSITR – Vidush Somany Institute of Technology and Research",
    status: "Present",
  },
];
```

---

## 5. Work / Projects Data

```js
export const caseStudiesData = {
  sahyog: {
    slug: 'sahyog',
    title: 'Sahyog',
    year: '2025',
    role: 'Full Stack Developer',
    type: 'Service Marketplace',
    link: { href: 'https://example.com', label: 'View project' },
    heroImg: '/images/sahyog/hero.webp',
    heroAlt: 'Sahyog service marketplace',
    overview: [
      'Sahyog is a service marketplace web application focused on connecting customers with local service providers and simplifying service booking and management.',
      'The project demonstrates practical frontend development, user authentication, dashboard design, and application workflow implementation.',
      'Developed a service marketplace platform for discovering and booking local services.',
      'Implemented customer dashboards for browsing services and managing bookings.',
      'Designed responsive and user-friendly interfaces using React and Bootstrap.',
      'Implemented user authentication and role-based application functionality.',
      'Applied practical web development concepts to build a real-world service-based application.',
      'Focused on creating a simple and convenient experience for customers and service providers.',
    ],
    banner1: '/images/sahyog/banner-1.webp',
    designGoals: 'The goal of Sahyog was to build a real-world service marketplace that connects customers with local providers while ensuring a smooth booking process, clear user experience, and responsive interface design. The project highlights practical full-stack thinking, frontend polish, and application flow design.',
    grid2x2: [
      { src: '/images/sahyog/shot-1.webp', alt: 'Sahyog dashboard view' },
      { src: '/images/sahyog/shot-2.webp', alt: 'Sahyog service listing' },
      { src: '/images/sahyog/shot-3.webp', alt: 'Sahyog booking flow' },
      { src: '/images/sahyog/shot-4.webp', alt: 'Sahyog provider dashboard' },
    ],
    additionalBanners: [
      { src: '/images/sahyog/detail-1.webp', alt: 'Sahyog detail screen' },
      { src: '/images/sahyog/detail-2.webp', alt: 'Sahyog final UI' },
    ],
    nextProject: { title: 'E-Commerce Website', href: '/work/ecommerce-website' },
  },

  ecommerce: {
    slug: 'ecommerce-website',
    title: 'E-Commerce Website',
    year: '2025',
    role: 'Full Stack Developer',
    type: 'Python Web App',
    link: { href: 'https://example.com', label: 'View project' },
    heroImg: '/images/ecommerce/hero.webp',
    heroAlt: 'Python e-commerce website',
    overview: [
      'Developed a Python-based e-commerce website project focused on online clothing shopping and practical web application development.',
      'The project demonstrates understanding of e-commerce workflows, application structure and backend development using Python.',
      'Developed an e-commerce concept focused on clothing and online shopping.',
      'Used Python as the primary development technology.',
      'Applied practical web development concepts to build a real-world project.',
      'Focused on creating a user-oriented shopping experience.',
    ],
    banner1: '/images/ecommerce/banner-1.webp',
    designGoals: 'The objective was to build a practical e-commerce concept centered around online clothing shopping, with a user-friendly experience and a clear understanding of shopping workflows, catalog structure, and backend development patterns.',
    grid2x2: [
      { src: '/images/ecommerce/shot-1.webp', alt: 'E-commerce home page' },
      { src: '/images/ecommerce/shot-2.webp', alt: 'E-commerce product listing' },
      { src: '/images/ecommerce/shot-3.webp', alt: 'E-commerce cart flow' },
      { src: '/images/ecommerce/shot-4.webp', alt: 'E-commerce checkout concept' },
    ],
    additionalBanners: [
      { src: '/images/ecommerce/detail-1.webp', alt: 'E-commerce detail section' },
      { src: '/images/ecommerce/detail-2.webp', alt: 'E-commerce UI final view' },
    ],
    nextProject: { title: 'Sahyog', href: '/work/sahyog' },
  },
};
```

---

## 6. Technical Skills

```js
export const technicalSkills = {
  languages: ['Python', 'JavaScript', 'SQL'],
  frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  backend: ['Django', 'REST APIs'],
  databases: ['MySQL', 'Firebase'],
  developerTools: ['Git', 'GitHub', 'VS Code', 'Postman', 'XAMPP'],
  aiTools: ['ChatGPT', 'Claude AI', 'Google Gemini'],
  softSkills: ['Communication', 'Time management', 'Problem Solving', 'Leadership'],
};
```

---

## 7. Certifications

```js
export const certifications = [
  {
    title: 'Adobe India Hackathon 2026',
    description: 'Participated in Adobe India Hackathon 2026, gaining exposure to competitive problem-solving, innovation and technology-based development.',
  },
  {
    title: 'MSME Idea Hackathon 6.0',
    description: 'Submitted an AI-based production planning idea in MSME Idea Hackathon 6.0.',
  },
  {
    title: 'Smart India Hackathon',
    description: 'Participated in Smart India Hackathon (SIH), gaining experience in collaborative problem-solving and innovation.',
  },
];
```

---

## 8. Activities and Engagement

```js
export const activities = [
  {
    title: 'Expert Lecture',
    detail: 'SN-116',
  },
];
```

---

## 9. Languages

```js
export const languages = ['English', 'Hindi', 'Gujarati'];
```

---

## 10. Final Ready-to-Use Summary

```js
export const portfolioContent = {
  profile: siteProfile,
  nav: navItems,
  home: homeData,
  about: aboutData,
  projects: caseStudiesData,
  skills: technicalSkills,
  certifications,
  activities,
  languages,
};
```

This data is now filled with actual Monik CV content and can be used to update the portfolio pages while keeping the same spacing and layout logic as the design reference.

### Remaining optional items to add later
- Actual LinkedIn URL
- Actual GitHub URL
- Real project deployment URLs
- Final profile image / portrait image
- Project screenshots in public/images folder
