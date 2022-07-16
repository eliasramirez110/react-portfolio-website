import React from 'react'
import me from '../assets/me.JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center itmes-center w-full h-full'>
        <div className='max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 '>
            About
          </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-right '>
          <p className='text-4xl font-bold' >Hi I'm Elias nice to meet you</p>
          <p className='ml-10'>I am passionate about building software. I specialize in front-end development</p>
      </div>
      <div>
      <img className='mx-auto opacity-70 h-80' src={me} alt="" />
        
      </div>
    </div>
  </div>
</div>  
  );
};

export default About