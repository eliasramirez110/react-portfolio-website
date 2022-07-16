import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import outcomestracker from '../assets/outcomestracker.png'
import Kelp from '../assets/Kelp.png'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Work</p>
          <p className='py-6'>Recent work</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Kelp})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Kelp
              </span>
              <br />
              <span>
                A Full-Stack, responsive spinoff of "Yelp". Built with React front-end, and Express.js backend"
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Visit Site</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${outcomestracker})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Outcomes Tracker
              </span>
              <br />
              <span className='text-white tracking-wider'>
                A Full Stack Application built with React front-end and Express.js backend
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Visit Site</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                </a>

              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Kelp})`}} className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Reackt JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Visit Site</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work