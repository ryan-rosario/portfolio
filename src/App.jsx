import { Component, useState } from "react"

import Platform from "./components/Platform"
import Beam from "./components/Beam"

import Welcome from "./sections/Welcome"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"


const SECTIONS = {
  welcome: { label: "Welcome", component: <Welcome /> },
  about: { label: "About", component: <About /> },
  experience: { label: "Experience", component: <Experience /> },
  projects: { label: "Projects", component: <Projects /> },
  skills: { label: "Skills", component: <Skills /> },
  contact: { label: "Contact", component: <Contact /> }
}


function App() {

  const [active, setActive] = useState("welcome")



  return (
    <>
      <Platform />
      <Beam />
      <nav>
        {Object.entries(SECTIONS).map(([key, { label }]) => (
          <button key={key} type="button" onClick={() => setActive(key)}>
            {label}
          </button>
        ))}
      </nav>
      {SECTIONS[active].component}
    </>
  )
}

export default App
