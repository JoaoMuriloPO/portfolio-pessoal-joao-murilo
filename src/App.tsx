import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './sections/HomeComponent/Home'
import About from './sections/AboutComponent/About'
import Projects from './sections/ProjectsComponent/Projects'
import Skills from './sections/SkillsComponent/Skills'
import Certificates from './sections/certificatesComponent/Certificates'
import Contact from './sections/ContactComponent/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'projects',
        'skills',
        'Certificates',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certificates/>
        <Contact />
      </main>
    </div>
  );
}

export default App

