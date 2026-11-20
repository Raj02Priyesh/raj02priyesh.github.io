import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { featured, moreWork, profile, services, skills } from './profile'

const publicFile = (p: string) => fileURLToPath(new URL(`../../public/${p}`, import.meta.url))

describe('portfolio content', () => {
  it('uses https for every external link', () => {
    const links = [
      profile.freelancer,
      profile.github,
      ...featured.flatMap((p) => p.links.map((l) => l.href)),
      ...moreWork.map((w) => w.href),
    ]
    for (const href of links) expect(href).toMatch(/^https:\/\//)
  })

  it('has valid contact details', () => {
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/)
    expect(profile.phoneHref).toMatch(/^tel:\+91\d{10}$/)
    expect(profile.phoneHref.replace('tel:', '')).toBe(`+${profile.phone.replace(/\D/g, '')}`)
  })

  it('references images that exist in /public', () => {
    expect(existsSync(publicFile(profile.photo))).toBe(true)
    for (const p of featured) for (const img of p.images ?? []) expect(existsSync(publicFile(img.src)), img.src).toBe(true)
  })

  it('gives every featured project a live link, highlights and a stack', () => {
    for (const p of featured) {
      expect(p.links.length).toBeGreaterThan(0)
      expect(p.highlights.length).toBeGreaterThanOrEqual(2)
      expect(p.stack.length).toBeGreaterThan(0)
    }
    expect(new Set(featured.map((p) => p.slug)).size).toBe(featured.length)
  })

  it('has no empty sections', () => {
    expect(services.length).toBeGreaterThan(0)
    expect(skills.every((g) => g.items.length > 0)).toBe(true)
  })
})
