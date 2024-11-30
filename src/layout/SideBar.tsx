

export default function SideBar() {
  return (
    <div className="max-md:hidden">
        
    <div className="fixed left-[3%] bottom-0">
     <ul className="text-center">
       <li><a href="https://github.com/Omo-Akeye">
         <i className="text-2xl transition duration-300 ease-in-out delay-150 fa-brands fa-github hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li className="mt-4"><a href="https://www.linkedin.com/in/akeye001/">
       <i className="text-2xl transition duration-300 ease-in-out delay-150 fa-brands fa-linkedin-in hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li className="mt-4"><a href="https://www.instagram.com/omo_akeye?igsh=MXIxaWYyamNucnFleQ==">
       <i className="text-2xl transition duration-300 ease-in-out delay-150 fa-brands fa-instagram hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
       <li className="mt-4"><a href="https://twitter.com/omo_akeye">
       <i className="text-2xl transition duration-300 ease-in-out delay-150 fa-brands fa-x-twitter hover:text-[#1B9CF1] hover:-translate-y-1"></i>
         </a>
       </li>
 
       <li className="flex justify-center">
         <div className="w-[2px] h-24 back mt-4 bg-black dark:bg-white"></div>
       </li>
     </ul>
    </div>
     <div className="fixed right-[3%] bottom-0" >
     <a href="mailto:akeyesunkanmi@gmail.com" className="font-bold vertical-text hover:text-[#1B9CF1]">akeyesunkanmi@gmail.com</a>
     <span className="flex justify-center">
     <div className="w-[2px] h-24 back mt-4 bg-black dark:bg-white"></div>
     </span>
     </div>
    </div>
  )
}
