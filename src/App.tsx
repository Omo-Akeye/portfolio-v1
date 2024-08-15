
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
      <div className="relative min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:text-white">
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