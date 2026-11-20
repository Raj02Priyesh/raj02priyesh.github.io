import { Footer, Nav } from './components/Layout'
import { About, Contact, Hero, Process, Projects, Services, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#work" className="sr-only z-50 rounded bg-brand-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
