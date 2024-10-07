import getricht from '../assets/getricht.png'
import multistep from '../assets/multiformlink.png'
import finohub from '../assets/finohub.png'
import usersettings from '../assets/Screenshot (54).png'
import crappo from "../assets/Screenshot (55).png"


const projects = [
  {
    title: "GETRICHT FOOD WEB-APP",
    image: getricht,
    description:
      "This is a meal website over 100.Users can also view,seach,filter over 100 meals from different categories. It also entails the recipe for all the meals",
    technologies: ["React", "Tailwindcss", "React Query", "React Router"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://getricht-akey.netlify.app/",
  },
  {
    title: "User Settings Dashboard",
    image: usersettings,
    description:
      "This is dashboard with create,edit,delete,update and filter functionality",
    technologies: ["React","MongoDB","Express","Node js","TypeScript","Tailwindcss","ShadCN ui"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://usersettings-akeye.netlify.app/",
  }, {
    title: "Crappo Crypto",
    image: crappo,
    description:
      "Landing page for crappo crypto",
    technologies: ["HTML", "Tailwindcss", "AOS library"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://crappo-akeye.netlify.app/",
  },
  {
    title: "Multi-Step Form",
    image: multistep,
    description:
      "A custom subscription form",
    technologies: ["React", "Tailwindcss", "Custom Form Validation"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://mutlistep-akeye.netlify.app/",
  },
  {
    title: "FINO HUB Landing Page",
    image: finohub,
    description:
      "A landing page for a financial company",
    technologies: ["React", "Tailwindcss"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://finohub-akey.netlify.app/",
  },
];
export default function Projects() {
  return (
    <div className="md:w-[80%] m-auto md:mt-12 mt-4 w-[90%]" id='projects'>
       <h1 className="font-bold text-right md:text-7xl text-[#1B9CF1] mb-8 text-4xl">...PROJECTS</h1>

       <ul >
      {projects.map((project, index) => (
        <li key={index} className='grid items-center p-2 my-6 border-2 md:my-10 md:grid-cols-2 max-md:text-sm '>
          <div>
            <img src={project.image} alt=""  />
          </div>
          <div className='p-5'>
            <div className='flex justify-between font-fera'>
              <a href={project.githubLink}>
                Github
              <i className="ml-1 transition duration-300 ease-in-out delay-150 bg-transparent t fa-brands fa-github hover:text-white hover:-translate-y-1"></i>
              </a>
              <a href={project.liveDemoLink}>
                
                Live Link
                <i className="ml-1 duration-300 ease-in-out delay-150 bg-transparent tansition fa-solid fa-up-right-from-square hover:text-white hover:-translate-y-1"></i>
                </a>
            </div>
            <h1 className='my-3 font-bold'>{project.title}</h1>
            <p className='md:text-xl'>{project.description}</p>
            <ul className='flex flex-wrap gap-2 mt-2'>
            {project.technologies.map((tech,index) => 
            <li key={index} className='p-2 text-xs text-white bg-gray-700 md:text-base font-fera rounded-xl'>{tech}</li>
            )}
            </ul>
            
            
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
