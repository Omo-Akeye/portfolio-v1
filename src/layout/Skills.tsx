import html from '../assets/html.svg'
import js from '../assets/js.svg'
import css from '../assets/css.png'
import react from '../assets/react.svg1.svg'
import redux from '../assets/redux.svg'
import tailwind from '../assets/tailwind.svg'
import figma from '../assets/figma.svg'
import typescript from '../assets/ts.png'
import supabase from '../assets/supabase.jpg'
import express from "../assets/express-facebook-share.png"
import node from '../assets/node.jpg'
import mongoDB from "../assets/mongodb.svg"
import next from "../assets/nextjs.webp"


const skills = [
    {
        name:'NextJS',
        src: next
    },
    {
        name: 'HTML',
        src: html
    },
    {
        name: 'Css',
        src: css
    },
    {
        name:' Javascript',
        src: js
    },
    {
        name:' Typescript',
        src: typescript
    },
    {
        name:' Node js',
        src: node
    },
    {
        name: 'React',
        src: react
    },
    {
        name: 'MongoDB',
        src: mongoDB
    },
    {
        name: 'Express',
        src: express
    },
    {
        name: 'Redux',
        src: redux
    },
    {
        name: 'Tailwindcss',
        src: tailwind
    },
    {
        name:' Supabase',
        src: supabase
    },
    {
        name: 'Figma',
        src: figma
    },
    
]
export default function Skills() {
  return (
    <div className="md:w-[80%] m-auto md:my-12 my-4 w-[90%]" id='skills'>
    <h1 className="font-bold text-7xl text-[#1B9CF1] max-md:text-4xl">SKILLS</h1>
    <p>I make use of languages and technologies such as:</p>
    <ul className='flex gap-4 flex-wrap md:w-[80%] m-auto md:justify-center mt-4 md:text-xl'>

        {skills.map(skill => 
            <li className='flex border-[1px] md:p-2 p-1 gap-4 items-center max-md:text-xs font-semibold' key={skill.name}>
                <img src={skill.src} alt="" className='w-[30px]'/>
                <h2>{skill.name}</h2>
            </li>
        )}
    </ul>
   </div>
  )
}
