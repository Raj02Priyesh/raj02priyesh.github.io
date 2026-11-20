import { useState } from 'react'
import { education, featured, moreWork, process, profile, services, skills, type Project } from '../data/profile'
import { asset } from '../lib/theme'
import { Reveal, Section } from './Layout'

const chip = 'rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300'
const card = 'rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.03]'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance projects
          </p>
          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I’m {profile.name.split(' ')[0]}.
            <span className="block bg-gradient-to-r from-brand-600 via-violet-500 to-pink-500 bg-clip-text text-transparent dark:from-brand-400 dark:via-violet-400 dark:to-pink-400">
              {profile.title}.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-400">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700">
              See my work
            </a>
            <a
              href={profile.freelancer}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 font-semibold transition hover:border-brand-500 hover:text-brand-600 dark:border-white/20 dark:hover:text-brand-400"
            >
              Hire me on Freelancer <ArrowIcon />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold">{s.value}</dd>
                <dd className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-brand-500 to-pink-500 opacity-30 blur-xl" aria-hidden="true" />
            <img
              src={asset(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              width={560}
              height={560}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_30%] shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-neutral-900">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">B.Tech, MANIT Bhopal</p>
              <p className="font-display font-semibold">{profile.tagline}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ApiPreview() {
  // A stylised terminal showing a real request to the live API.
  return (
    <div className="flex h-full min-h-64 flex-col overflow-hidden rounded-xl bg-[#0d1117] font-mono text-[13px] leading-relaxed text-neutral-300 shadow-inner" aria-hidden="true">
      <div className="flex gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      </div>
      <pre className="overflow-x-auto p-4 whitespace-pre">
        <span className="text-emerald-400">$</span> curl cartzy-ecommerce-backend.onrender.com{'\n'}
        {'    '}/api/user/products/all{'\n\n'}
        <span className="text-neutral-500">{'{'}</span>{'\n'}
        {'  '}<span className="text-sky-300">"message"</span>: <span className="text-amber-200">"Products fetched successfully."</span>,{'\n'}
        {'  '}<span className="text-sky-300">"products"</span>: [{'{'}{'\n'}
        {'    '}<span className="text-sky-300">"name"</span>: <span className="text-amber-200">"Nova X5 Smartphone"</span>,{'\n'}
        {'    '}<span className="text-sky-300">"MRP"</span>: <span className="text-violet-300">24999</span>, <span className="text-sky-300">"price"</span>: <span className="text-violet-300">21999</span>,{'\n'}
        {'    '}<span className="text-sky-300">"brand"</span>: {'{ '}<span className="text-sky-300">"name"</span>: <span className="text-amber-200">"Nova"</span>{' }'}, …{'\n'}
        {'  }'}, …]{'\n'}
        <span className="text-neutral-500">{'}'}</span>{'\n\n'}
        <span className="text-emerald-400">✓ 68/68 API checks passed</span>
      </pre>
    </div>
  )
}

function ProjectMedia({ project }: { project: Project }) {
  const [index, setIndex] = useState(0)
  if (!project.images) return <ApiPreview />
  const phone = project.images[0].phone
  if (phone) {
    return (
      <div className="flex items-end justify-center gap-3 rounded-xl bg-gradient-to-br from-brand-100 to-pink-100 p-5 dark:from-brand-500/15 dark:to-pink-500/10">
        {project.images.map((img, i) => (
          <img
            key={img.src}
            src={asset(img.src)}
            alt={img.alt}
            loading="lazy"
            className={`w-1/3 max-w-40 rounded-2xl border-4 border-neutral-900 shadow-xl ${i === 1 ? 'mb-6' : ''}`}
          />
        ))}
      </div>
    )
  }
  return (
    <div>
      <img
        src={asset(project.images[index].src)}
        alt={project.images[index].alt}
        loading="lazy"
        className="aspect-[16/10] w-full rounded-xl border border-neutral-200 object-cover object-top shadow-lg dark:border-white/10"
      />
      {project.images.length > 1 && (
        <div className="mt-3 flex gap-2" role="tablist" aria-label={`${project.title} screenshots`}>
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                i === index ? 'bg-brand-600 text-white' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-neutral-300'
              }`}
            >
              {img.alt.replace(/ (theme )?of the website/, '').replace(' theme', '')}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="work" eyebrow="Selected work" title="Live projects you can try right now" intro="Every project below is deployed, tested in CI and open source — click through and use them.">
      <div className="space-y-10">
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <article className={`${card} grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center`}>
              {/* min-w-0 lets wide content (the terminal preview) scroll instead of stretching the grid on phones. */}
              <div className={`min-w-0 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ProjectMedia project={p} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">{p.kind}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm">
                      <span className="mt-0.5 text-emerald-500" aria-hidden="true">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.stack.map((s) => (
                    <li key={s} className={chip}>{s}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.map((l, li) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        li === 0
                          ? 'bg-brand-600 text-white hover:bg-brand-700'
                          : 'border border-neutral-300 hover:border-brand-500 hover:text-brand-600 dark:border-white/20 dark:hover:text-brand-400'
                      }`}
                    >
                      {l.label} <ArrowIcon />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className="font-display text-xl font-bold">More work</h3>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">Earlier projects across backend, machine learning and desktop apps.</p>
      </Reveal>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {moreWork.map((w, i) => (
          <li key={w.href}>
            <Reveal delay={(i % 2) * 80} className="h-full">
              <a href={w.href} target="_blank" rel="noreferrer" className={`${card} group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-brand-400`}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-lg font-semibold">{w.title}</h4>
                  <span className="text-neutral-400 transition group-hover:text-brand-500"><ArrowIcon /></span>
                </div>
                <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">{w.summary}</p>
                <p className="mt-4 text-xs font-medium text-neutral-500">{w.stack.join(' · ')}</p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="One developer, the whole product" intro="Hire me for a single piece or the full build — design, frontend, mobile, backend and deployment.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={(i % 3) * 80} className={`${card} h-full p-6`}>
              <span className="text-3xl" aria-hidden="true">{s.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 80} className={`${card} p-6`}>
            <h3 className="font-display font-semibold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className={chip}>{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="process" eyebrow="How I work" title="Clear steps, no surprises">
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.step}>
            <Reveal delay={i * 80} className="h-full">
              <p className="font-display text-4xl font-bold text-brand-600/30 dark:text-brand-400/30">{p.step}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400">
          <p>
            I’m {profile.name}, a full stack developer from India. I like owning a product end to end: sketching the screens, building
            the frontend and mobile app, writing the API and database, and setting up the tests and deployments that keep it running.
          </p>
          <p>
            For clients that means one person who understands the whole system, clear communication, and code that’s documented,
            tested and fully yours at handover.
          </p>
        </Reveal>
        <Reveal delay={120} className={`${card} p-6`}>
          <h3 className="font-display font-semibold">Education</h3>
          <p className="mt-3 font-medium">{education.degree}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{education.school}</p>
          <p className="mt-1 text-sm text-neutral-500">{education.years}</p>
          <h3 className="mt-6 font-display font-semibold">Based in</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{profile.location}</p>
        </Reveal>
      </div>
    </Section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  const items = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉️' },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: '📞' },
    { label: 'Freelancer', value: 'freelancer.com/u/Raj02Priyesh', href: profile.freelancer, icon: '💼', external: true },
    { label: 'GitHub', value: 'github.com/Raj02Priyesh', href: profile.github, icon: '🧑‍💻', external: true },
  ]
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something" intro="Tell me about your project — the more detail, the better my first estimate.">
      <Reveal className="rounded-3xl bg-gradient-to-br from-brand-600 to-violet-700 p-8 text-white shadow-2xl shadow-brand-600/20 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold sm:text-3xl">Have a project in mind?</p>
            <p className="mt-2 text-white/80">Send me the idea — I’ll reply with a plan, timeline and estimate.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}?subject=Project%20enquiry`} className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">
              Email me
            </a>
            <button type="button" onClick={copy} className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10" aria-live="polite">
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
          </div>
        </div>
      </Reveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((c, i) => (
          <li key={c.label}>
            <Reveal delay={i * 60} className="h-full">
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`${card} flex h-full items-center gap-4 p-5 transition hover:border-brand-400`}
              >
                <span className="text-2xl" aria-hidden="true">{c.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs text-neutral-500">{c.label}</span>
                  <span className="block truncate font-medium">{c.value}</span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
