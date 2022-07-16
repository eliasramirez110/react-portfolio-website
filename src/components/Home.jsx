import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Elias Ramirez</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Engineer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack engineer specializing in front-end development. Currently I'm focused on building responsive web applications using React.js </p>
        <div>
          <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-6 py-3 my-2 flex items-center'>
          View Work 
          <span>
          <HiArrowNarrowRight className='ml-3'/>
          </span> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home