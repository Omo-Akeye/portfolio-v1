import img from '../assets/avatar.jpg'

export default function About() {
  return (
    <div className="md:w-[80%] sm:min-h-screen flex justify-center items-center w-[90%] max-sm:mt-[25%]">
    <section> 
       <img src={img} alt="avatar"  width={150}  className="mb-5 rounded-full cursor-pointer hover:grayscale"/>
        <h1 className="text-2xl font-bold text-[#1B9CF1]">AKEYE SAHEED</h1>
          <p className="mt-4">
          I am a <span className='text-[#1B9CF1] text-bold uppercase text-2xl'>frontend developer</span>  specialize in creating responsive,fast, accessible and visually appealing websites.
          I have a keen eye for beautiful designs, user-friendly and functionality web applications ,this is reflected in every project I’ve worked on.
 I've successfully collaborated with numerous teams, where I’ve not only contributed as a member but also led many as well. This has helped me grown a very collaborative skills.
Are you're looking to improve your existing website or start from scratch? I’m your go-to person. Let’s use code to solve problems together!
          </p>
  
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

<div className='flex my-2 gap-x-2'>
<h2 className="underline uppercase text-[#1B9CF1]"> Education :</h2>
  <p>B.Sc Mathematics</p>
      
</div>

      </section>

    </div>
  )
}
