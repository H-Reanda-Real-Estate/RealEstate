import React from 'react'
import { MdCastConnected } from 'react-icons/md'
import { TbUserHexagon } from 'react-icons/tb'

const AboutSection = () => {
  return (
    <section className='aboutSection  flex  mt-10 px-4 w-[90%] self-center'>
        <div className='flex w-1/2 flex-col space-y-2 justify-center items-start'>
          <h1 className='text-xl font-medium text-[#3A0CA3] uppercase'>WHO ARE WE</h1>
          <h2 className='text-3xl font-bold text-[#4F4F4F]'>Assisting individuals in locating the appropriate real estate.</h2>
          <p className='text-[#4F4F4F]'>
            We are a real estate company that specializes in assisting individuals in locating the appropriate real estate.
            We are dedicated to providing the best possible service to our clients.
            Our goal is to make the process of buying, selling, or renting a property as easy as possible.
          </p>
          <div className='flex space-x-2 w-[70%] rounded-md p-2 shadow-sky-600 shadow-sm'>
            <div className='flex flex-col h-full my-auto justify-center text-[#3A0CA3]'>
              <MdCastConnected className='text-4xl' />
              </div>
            <div className='flex flex-col'>
              <h1 className='text-[#3A0CA3] font-bold text-lg'>Get connected with us</h1>
              <h1 className='text-[#4F4F4F]'>Whether you are looking for a new home, an investment property, or a rental, we can help you find the perfect property for your needs</h1>
                </div>
          </div>
          <div className='flex space-x-2 w-[70%] mt-12 rounded-md p-2 shadow-sky-600 shadow-sm'>
            <div className='flex flex-col h-full my-auto justify-center text-[#3A0CA3]'>
              <TbUserHexagon className='text-4xl' />
              </div>
            <div className='flex flex-col'>
              <h1 className='text-[#3A0CA3] font-bold text-lg'>Donec porttitor euismod</h1>
              <h1 className='text-[#4F4F4F]'>We have a team of experienced professionals who are ready to help you with all of your real estate needs.</h1>
                </div>
          </div>
        </div>
        <div className='flex w-1/2 justify-center items-center px-8 space-x-6'>
        <div className='w-1/2 h-[90%] mt-20'>
          <img src='/house1.jpg' alt='house' className='w-full h-full rounded-md' />
        </div>
        <div className='w-1/2 flex flex-col space-y-6'>
        <div className='w-full h-[40%]'>
          <img src='/house2.jpg' alt='house' className='w-full h-full rounded-md' />
        </div>
        <div className='w-full h-[40%]'>
          <img src='/house3.jpg' alt='house' className='w-full h-full rounded-md' />
        </div>
        </div>
        </div>
      </section>
  )
}

export default AboutSection