import getricht from '../assets/getricht.png'
import multistep from '../assets/multiformlink.png'
import finohub from '../assets/finohub.png'
import usersettings from '../assets/Screenshot (54).png'
import crappo from "../assets/Screenshot (55).png"
import bime from "../assets/bime.png"


const projects = [
  {
    title: "GETRICHT FOOD WEB-APP",
    image: getricht,
    description:
      "This a fully functional single page application built with React JS featuring the comprehensive recipe for over 100 meal recipes. Users can filter, search and save the recipe of meals from different categories,providing a seamless and user-friendly experience. I used React Router for dynamic route for smooth navigation around the web page and React query for data fetching.",
    technologies: ["React", "Tailwindcss", "React Query", "React Router"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://getricht-akey.netlify.app/",
  },
  {
    title: "BIME WEBSITE REVAMP",
    image: bime,
    description:
      "A fully reponsive website with a landing page, sign up and login page",
    technologies: ["NextJS", "Tailwindcss"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://revamp-xi.vercel.app/",
  },
  {
    title: "User Settings Dashboard",
    image: usersettings,
    description:
      "This is a dashboard with create,edit,delete,update and filter functionality",
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
        <li key={index} className='grid items-center p-2 my-6 border-2 md:my-10 lg:grid-cols-2 '>
          <div>
            <img src={project.image} alt=""  />
          </div>
          <div className='p-5'>
            <div className='flex justify-between '>
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
            <li key={index} className='p-2 text-white bg-gray-700 rounded-xl max-md:text-sm'>{tech}</li>
            )}
            </ul>
            
            
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
