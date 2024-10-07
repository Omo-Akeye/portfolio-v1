import img from '../assets/IMG_0916-removebg-preview.png'
import About from './About'

export default function Intro() {
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
    
<section>
<div className=" w-[80%]  mx-auto mt-24  grid-cols-1 grid md:grid-cols-2 place-items-center " data-aos="fade-up">
  <img src={img} alt="Akeye Saheed" className="rounded-lg max-w-64 max-md:w-52" />
  <div className='max-md:mt-4' >
    <h3 className="font-bold md:text-xl font-fera">Hi I am</h3>
    <h1 className="md:text-4xl font-extrabold uppercase font-fera text-[#1B9CF1] text-xl ">Akeye Saheed.</h1>
    <p className=' md:text-xl'>
      I am a <span className="md:text-xl font-bold uppercase text-[#1B9CF1] text-base">frontend developer</span> specialize in creating responsive,fast, accessible and visually appealing websites.Providing valuable solutions and amazing UI's to world problems through codes.
    </p>
    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 my-2">
               <span className="w-2 h-2 bg-green-500 rounded-full me-1"></span>
                Available
            </span> 

            <div className='flex items-center gap-3'>
            <i className="fa-solid fa-location-dot"></i> Nigeria
            </div>
  </div>
</div>


<div className='flex justify-center gap-2 mt-4 w-[80%] md:hidden'>
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
<About/>
</section>
</div>
  ) }