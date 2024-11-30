
import { useDarkMode } from "./Dartmodetoggle"
import About from "./layout/About"
import Contact from "./layout/Contact"

import Nav from "./layout/Nav"
import Projects from "./layout/Projects"
import SideBar from "./layout/SideBar"
import Skills from "./layout/Skills"

function App() {
  const { isDarkMode } = useDarkMode()
 
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="top">
      <div className="relative w-full min-h-screen bg-white dark:text-white dark:bg-[#030712] md:text-xl ">
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-screen max-w-[1440px] mx-auto">
         <About/>
          <Skills />
          
          <Projects />
          <Contact />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default App