import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
  return (
    <div
      id='About'
      className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'
    >
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={AboutImg} alt='About img' />

          <ul>
            <div className='flex gap-3 py-4'>
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal mb-3'>
                  Frontend developer
                </h1>
                <p>
                  I am a Frontend Developer with expertise in Javascript,React
                  js. With a basic background in front-end development, I enjoy
                  building scalable web applications and solving complex
                  technical challenges. As a Tech Team Lead, I thrive in
                  mentoring teams and driving projects from concept to
                  completion with a focus on clean architecture and innovative
                  solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
        <a className='button' href='./assets/Nikhil Resume.pdf' download>
          <button className='bg-[#465697] md:mt-10 block mx-auto text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  )
}

export default About
