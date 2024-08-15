import getricht from '../assets/getricht.png'
import multistep from '../assets/multiformlink.png'
import finohub from '../assets/finohub.png'


const projects = [
  {
    title: "GETRICHT FOOD WEB-APP",
    image: getricht,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, autem. Odit doloremque cupiditate tenetur esse quisquam modi magnam, ipsam earum iste cum dolorum error consequatur corporis eaque id commodi assumenda?",
    technologies: ["React", "Tailwindcss", "React Query", "React Router"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://getricht-akey.netlify.app/",
  },
  {
    title: "Multi-Step Form",
    image: multistep,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, autem. Odit doloremque cupiditate tenetur esse quisquam modi magnam, ipsam earum iste cum dolorum error consequatur corporis eaque id commodi assumenda?",
    technologies: ["React", "Tailwindcss", "Custom Form Validation"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://mutlistep-akeye.netlify.app/",
  },
  {
    title: "FINO HUB Landing Page",
    image: finohub,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, autem. Odit doloremque cupiditate tenetur esse quisquam modi magnam, ipsam earum iste cum dolorum error consequatur corporis eaque id commodi assumenda?",
    technologies: ["React", "Tailwindcss"],
    githubLink: "https://github.com/Omo-Akeye",
    liveDemoLink: "https://finohub-akey.netlify.app/",
  },
];
export default function Projects() {
  return (
    <div className="md:w-[80%] m-auto md:mt-12 mt-4 w-[90%]" id='projects'>
       <h1 className="font-bold text-right md:text-7xl text-[#1B9CF1] mb-8 text-4xl">...PROJECTS</h1>

       <ul>
      {projects.map((project, index) => (
        <li key={index} className='grid items-center p-2 my-4 border-2 md:grid-cols-2 max-md:text-sm'>
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
            <p>{project.description}</p>
            <ul className='flex flex-wrap gap-2 mt-2'>
            {project.technologies.map((tech,index) => 
            <li key={index} className='p-2 text-xs text-white bg-gray-700 md:text-sm font-fera rounded-xl'>{tech}</li>
            )}
            </ul>
            
            
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
