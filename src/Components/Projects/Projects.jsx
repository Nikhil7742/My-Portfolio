import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-6 md:p-24 text-white '>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard
          title='Dice Game'
          main='This is a Dice game created in react js and used some component library used some component library'
        />
        <ProjectCard
          title='Todo-App'
          main='This is a Todo app created javascript and used some component library used some component library'
        />
        <ProjectCard
          title='Movie Search Site'
          main='This is a movie search site created in javascript and used some component library used some component library'
        />
      </div>
      <a href='https://github.com/Nikhil7742' target='_blank'>
        <button className=' mx-auto block py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          More Projects
        </button>
      </a>
    </div>
  )
}

export default Projects
