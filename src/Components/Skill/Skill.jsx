import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact,FaBootstrap } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const Skill = () => {
  return (
    <div id='Experience' className='p-6 md:p-24  '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#E34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572B6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <RiTailwindCssFill color='#1572B6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaBootstrap color='#1572B6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaGitAlt color='#E34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <VscVscode color='#1572B6' size={50} />
          </span>
        </div>
        <div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg py-4 px-9 items-center'>
            <span className='text-white'>
              <h4 className='font-semibold text-[18px] mb-1'>Language :-</h4>
              <ul className='mb-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>

              <h4 className='font-semibold text-[18px] mb-1'>Libraries :-</h4>
              <ul className='mb-2'>
                <li>React js</li>
              </ul>

              <h4 className='font-semibold text-[18px] mb-1'>Framework :-</h4>
              <ul className='mb-2'>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ul>
              <h4 className='font-semibold text-[18px] mb-1'>Other Skills :-</h4>
              <ul className='mb-2'>
                <li>Git</li>
                <li>Visual Studio</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
