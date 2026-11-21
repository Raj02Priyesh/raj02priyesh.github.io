// All portfolio content lives here - edit this file to update the site.

export interface Link {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  kind: string
  summary: string
  highlights: string[]
  stack: string[]
  links: Link[]
  /** Screenshots in /public/images/projects (first is the cover). Omit to show a code preview instead. */
  images?: { src: string; alt: string; phone?: boolean }[]
}

export const profile = {
  name: 'Priyesh Raj',
  title: 'Full Stack Developer',
  tagline: 'Design to deployment',
  intro:
    'I build web apps, mobile apps and APIs for startups and small businesses - from the first Figma screen to a tested, deployed product with CI/CD.',
  location: 'Pune, India · works with clients worldwide (IST)',
  photo: 'images/priyesh.jpg',
  email: 'freelancerpriyesh@gmail.com',
  phone: '+91 62044 04307',
  phoneHref: 'tel:+916204404307',
  freelancer: 'https://www.freelancer.com/u/Raj02Priyesh',
  github: 'https://github.com/Raj02Priyesh',
  stats: [
    { value: '4', label: 'live projects you can try now' },
    { value: '120+', label: 'REST endpoints shipped' },
    { value: 'CI/CD', label: 'tests & deploys on every push' },
  ],
}

export const services = [
  { icon: '🎨', title: 'UI/UX design', text: 'Wireframes, prototypes and polished interfaces in Figma that are ready to build.' },
  { icon: '🖥️', title: 'Web frontends', text: 'Fast, responsive React + TypeScript sites and web apps, styled with Tailwind CSS.' },
  { icon: '📱', title: 'Mobile apps', text: 'Cross-platform Android, iOS and web apps from one Flutter codebase.' },
  { icon: '⚙️', title: 'Backends & APIs', text: 'Secure REST APIs in Node.js / Express, Go or Python with JWT auth and role-based access.' },
  { icon: '🗄️', title: 'Databases', text: 'Schema design and data modelling with MongoDB and PostgreSQL.' },
  { icon: '🚀', title: 'CI/CD & deployment', text: 'GitHub Actions pipelines, automated tests and hosting on Render, GitHub Pages and more.' },
]

export const featured: Project[] = [
  {
    slug: 'slotwise',
    title: 'Slotwise - appointment booking SaaS',
    kind: 'Full-stack SaaS',
    summary:
      'Online booking for salons, clinics and studios. Any business can sign up, add services, team and opening hours, and share its own booking page; customers pick a service, person and free time in a few taps.',
    highlights: [
      'Double bookings blocked by the database itself, proven by a concurrency test',
      'Availability computed in each business’s time zone with notice and booking-window rules',
      'CI runs unit, integration and Playwright tests, then ships a Docker image that deploys only when checks pass',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Playwright', 'GitHub Actions'],
    links: [
      { label: 'Book a demo slot', href: 'https://slotwise-6hrk.onrender.com/book/velvet-vine' },
      { label: 'Owner dashboard', href: 'https://slotwise-6hrk.onrender.com/login' },
      { label: 'Code', href: 'https://github.com/Raj02Priyesh/slotwise' },
    ],
    images: [
      { src: 'images/projects/slotwise-booking.jpg', alt: 'Slotwise customer booking page with free time slots' },
      { src: 'images/projects/slotwise-dashboard.jpg', alt: 'Slotwise owner dashboard listing upcoming bookings' },
    ],
  },
  {
    slug: 'cartzy-app',
    title: 'Cartzy - Flutter shopping app',
    kind: 'Mobile & web app',
    summary:
      'A complete shopping app for Android and the web: catalog, search, product pages, cart, wishlist, checkout with saved addresses, and order tracking - running on my live e-commerce API.',
    highlights: [
      'Full shopping flow tested end-to-end against the live API',
      'Session restore, friendly error and cold-start states',
      'CI deploys the web build to GitHub Pages; tagged releases publish the Android APK',
    ],
    stack: ['Flutter', 'Dart', 'Provider', 'REST', 'GitHub Actions'],
    links: [
      { label: 'Open the app', href: 'https://raj02priyesh.github.io/cartzy-shop-app/' },
      { label: 'Android APK', href: 'https://github.com/Raj02Priyesh/cartzy-shop-app/releases/latest' },
      { label: 'Code', href: 'https://github.com/Raj02Priyesh/cartzy-shop-app' },
    ],
    images: [
      { src: 'images/projects/cartzy-app-home.jpg', alt: 'Cartzy app home screen', phone: true },
      { src: 'images/projects/cartzy-app-product.jpg', alt: 'Cartzy product details', phone: true },
      { src: 'images/projects/cartzy-app-tracking.jpg', alt: 'Cartzy order tracking', phone: true },
    ],
  },
  {
    slug: 'bakery-salon',
    title: 'Bakery & salon website',
    kind: 'Small-business website',
    summary:
      'A responsive one-page site for local businesses. One React codebase ships two complete brands - a cosy bakery and a calm salon - with menus, galleries, reviews, maps and a smart order/booking form.',
    highlights: [
      'Re-skin for a new client by editing one data file',
      'Booking form checks opening days, hours and notice, then hands off to WhatsApp',
      'Live "Open now" badge in the business’s time zone',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
    links: [
      { label: 'Bakery demo', href: 'https://raj02priyesh.github.io/bakery-salon-website/?brand=bakery' },
      { label: 'Salon demo', href: 'https://raj02priyesh.github.io/bakery-salon-website/?brand=salon' },
      { label: 'Code', href: 'https://github.com/Raj02Priyesh/bakery-salon-website' },
    ],
    images: [
      { src: 'images/projects/bakery-desktop.jpg', alt: 'Bakery theme of the website' },
      { src: 'images/projects/salon-desktop.jpg', alt: 'Salon theme of the website' },
    ],
  },
  {
    slug: 'cartzy-api',
    title: 'Cartzy - e-commerce REST API',
    kind: 'Backend & DevOps',
    summary:
      'The production-style backend behind the Cartzy app: products, categories, cart, wishlist, orders with tracking, returns, ratings and a full admin API.',
    highlights: [
      '120+ endpoints with JWT auth and role-based access control',
      '68-check end-to-end test suite runs on every push in GitHub Actions',
      'Deployed on Render with MongoDB Atlas; 0 known npm vulnerabilities',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'GitHub Actions', 'Render'],
    links: [
      { label: 'Live API', href: 'https://cartzy-ecommerce-backend.onrender.com/api/user/products/all' },
      { label: 'Code', href: 'https://github.com/Raj02Priyesh/cartzy-ecommerce-backend' },
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Android', 'Responsive web'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Go', 'Python', 'REST APIs', 'JWT auth'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose'] },
  { group: 'DevOps', items: ['Git & GitHub', 'GitHub Actions', 'CI/CD', 'Docker', 'Render', 'GitHub Pages'] },
  { group: 'Design', items: ['Figma', 'UI/UX', 'Wireframes', 'Prototyping'] },
]

export const process = [
  { step: '01', title: 'Understand', text: 'A short call or chat to agree on goals, scope, budget and a milestone plan - before any code.' },
  { step: '02', title: 'Design', text: 'Wireframes or a clickable Figma prototype so you see the product early and cheaply.' },
  { step: '03', title: 'Build & test', text: 'Working builds you can try every few days, with automated tests guarding each change.' },
  { step: '04', title: 'Launch & support', text: 'Deployment, handover of clean documented code you own, and help with fixes after launch.' },
]

export const education = {
  degree: 'Bachelor of Technology',
  school: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
  years: '2022 – 2026',
}
