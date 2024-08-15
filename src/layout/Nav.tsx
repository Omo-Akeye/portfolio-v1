import { Link } from "react-scroll";
import { useDarkMode } from "../Dartmodetoggle";

export default function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();


  return (
    <nav className="fixed w-full py-3 shadow-lg bg-inherit">
      <div className="flex justify-between w-[80%] m-auto font-semibold ">
      <Link to="top" spy={true} smooth={true} duration={500} className="font-bold cursor-pointer font-fera">
        Akeye.
        </Link>
        
        <ul className="flex justify-between gap-6">

        <li  className="cursor-pointer">
            <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} onClick={toggleDarkMode}></i>
          </li>
        
          <li className="cursor-pointer" >
            <Link   to="skills"  spy={true}  smooth={true}   duration={500} 
            offset={-window.innerHeight / 12} >
            Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="projects"  spy={true}  smooth={true}   duration={500} 
            offset={-window.innerHeight / 12}>
            Project
            </Link></li>

        </ul>
      </div>
    </nav>
  );
}
