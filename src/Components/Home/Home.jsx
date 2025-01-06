import React from 'react'
import avatarImg from '../../assets/7358602-removebg-preview.png'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div
      className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start p-6 md:p-20'
      id='Home'
    >
      {/* Text Section */}
      <div className='md:w-2/4 text-center md:text-left md:pt-10'>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <p className='text-base md:text-xl lg:text-2xl mt-3 tracking-tight'>
          Frontend Developer
        </p>
        <a href='#Footer'>
          <button className='mt-5 md:mt-10 py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
            Contact Me
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className='w-3/4 md:w-1/3 mb-6 md:mb-0 md:mt-0 mt-[70px]'>
        <img
          className='w-full h-auto object-cover rounded-full shadow-lg'
          src={avatarImg}
          alt='Avatar'
        />
      </div>
    </div>
  )
}

export default Home
