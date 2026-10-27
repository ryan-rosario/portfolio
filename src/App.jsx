import { useState } from "react"
import Platform from "./components/Platform"

import Welcome from "./sections/Welcome"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

function App() {

  const [active, setActive] = useState(<Welcome />)


  return (
    <>
      <Platform />
    </>
  )
}

export default App
