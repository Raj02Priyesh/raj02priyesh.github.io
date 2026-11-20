import { useEffect, useRef, useState, type ReactNode } from 'react'
import { profile } from '../data/profile'
import { currentTheme, setTheme, type Theme } from '../lib/theme'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 font-display text-sm font-semibold tracking-widest text-brand-600 uppercase dark:text-brand-400">{eyebrow}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(currentTheme)
  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(next)
        setThemeState(next)
      }}
      className="rounded-full p-2 text-neutral-600 transition hover:bg-neutral-200/70 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled || open ? 'border-b border-neutral-200 bg-neutral-50/85 backdrop-blur dark:border-white/10 dark:bg-[#0b0d14]/85' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm text-white" aria-hidden="true">
            PR
          </span>
          {profile.name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-2 hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm font-medium text-neutral-600 transition hover:text-brand-600 dark:text-neutral-300 dark:hover:text-brand-400">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={profile.freelancer}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            className="rounded-full p-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-nav" className="border-t border-neutral-200 px-5 pb-5 md:hidden dark:border-white/10">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.freelancer} target="_blank" rel="noreferrer" className="mt-2 block rounded-full bg-brand-600 py-3 text-center font-semibold text-white">
              Hire me on Freelancer
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {YEAR} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brand-600">GitHub</a>
          <a href={profile.freelancer} target="_blank" rel="noreferrer" className="hover:text-brand-600">Freelancer</a>
          <a href={`mailto:${profile.email}`} className="hover:text-brand-600">Email</a>
        </div>
      </div>
    </footer>
  )
}
