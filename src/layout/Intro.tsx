import img from '../assets/IMG_0916-removebg-preview.png'

export default function Intro() {
  return (
    <>
    
<div className="md:flex md:items-center md:w-[80%] md:h-[80vh] mx-auto mt-20 w-[95%] md:justify-center md:gap-x-11">
  <img src={img} alt="Akeye Saheed" className="rounded-lg max-w-60 max-md:mr-4 max-sm:mr-2 max-md:float-left max-md:w-44 max-sm:w-32" />
  <div className="md:ml-4">
    <h3 className="font-bold md:text-xl font-fera">Hi I am</h3>
    <h1 className="md:text-3xl font-extrabold uppercase font-fera text-[#1B9CF1] text-xl max-sm:my-1">Akeye Saheed.</h1>
    <p className='max-sm:text-sm'>
      I am a <span className="md:text-xl font-bold uppercase text-[#1B9CF1] text-base">frontend developer</span> specializing in creating responsive and functional websites. Driven by curiosity, I transitioned from a Mathematics graduate to a full-time Frontend Developer. With a strong foundation in problem-solving, I thrive on crafting exceptional digital experiences. My passion for collaboration has led me to successfully lead and contribute to numerous development teams.
    </p>
    
  </div>
</div>

<div className='flex justify-center w-full gap-2 mt-4 md:hidden'>
  <p>Connect with me:</p>
  <ul className='flex justify-center gap-x-2'>
<li><a href="https://github.com/Omo-Akeye">
         <i className=" transition duration-300 ease-in-out delay-150 fa-brands fa-github hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li ><a href="https://www.linkedin.com/in/akeye001/">
       <i className="transition duration-300 ease-in-out delay-150 fa-brands fa-linkedin-in hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li ><a href="https://www.instagram.com/omo_akeye?igsh=MXIxaWYyamNucnFleQ==">
       <i className="transition duration-300 ease-in-out delay-150 fa-brands fa-instagram hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li ><a href="https://twitter.com/omo_akeye">
       <i className="transition duration-300 ease-in-out delay-150 fa-brands fa-x-twitter hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
</ul>
</div>

</>
  ) }