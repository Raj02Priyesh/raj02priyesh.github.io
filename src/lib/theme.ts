export type Theme = 'light' | 'dark'

export function currentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** Apply and remember the visitor's choice (storage can be unavailable, e.g. in private mode). */
export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0d14' : '#4f46e5')
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // Ignore: the choice just won't persist.
  }
}

/** Absolute URL for a file in /public, respecting Vite's base path. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
