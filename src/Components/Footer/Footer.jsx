import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineLocalPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-[#465697] text-white text-center'>
      <div
        id='Footer'
        className='flex flex-col sm:flex-row justify-around p-6 sm:p-10 md:p-12 items-center gap-6'
      >
        <div className='text-center sm:text-left'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>
            Contact
          </h1>
          <h3 className='text-sm md:text-lg lg:text-2xl font-normal'>
            Feel Free To Reach Out!
          </h3>
        </div>

        <ul className='text-sm md:text-lg lg:text-xl mb-0 sm:mb-3 space-y-3 sm:space-y-0 '>
          <li className='flex gap-2 items-center justify-center sm:justify-start'>
            <MdOutlineEmail size={20} />
            <a href='mailto:nikhil774267@gmail.com' className='hover:underline'  target='_blank'>
              nikhil774267@gmail.com
            </a>
          </li>
          <li className='flex gap-2 items-center justify-center sm:justify-start'>
            <CiLinkedin size={20} />
            <a
              href='https://www.linkedin.com/in/nikhil-kumar-5a96b333b'
              className='hover:underline'
              target='_blank'
            >
              https://www.linkedin.com/in/ <br className='sm:hidden block'/> nikhil-kumar-5a96b333b
            </a>
          </li>
          <li className='flex gap-2 items-center justify-center sm:justify-start'>
            <FaGithub size={20} />
            <a href='https://github.com/Nikhil7742' className='hover:underline'  target='_blank'>
              https://github.com/Nikhil7742
            </a>
          </li>
          <li className='flex gap-2 items-center justify-center sm:justify-start'>
            <MdOutlineLocalPhone size={20} />
            <a href='tel:+917742670194' className='hover:underline'>
              +91 7742670194
            </a>
          </li>
        </ul>
      </div>

      <div className='text-sm md:text-base p-4 border-t border-white'>
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
        <p>Device Type: Desktop or Laptop</p>
      </div>
    </footer>
  )
}

export default Footer
