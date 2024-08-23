
import { useDarkMode } from "./Dartmodetoggle"
import Contact from "./layout/Contact"
import Intro from "./layout/Intro"
import Nav from "./layout/Nav"
import Projects from "./layout/Projects"
import SideBar from "./layout/SideBar"
import Skills from "./layout/Skills"

function App() {
  const { isDarkMode } = useDarkMode()
 
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="top">
      <div className="relative w-full min-h-screen bg-white dark:text-white dark:bg-[#030712]">
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Intro />
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