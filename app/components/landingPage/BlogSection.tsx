import React from 'react'
import {GoArrowRight } from 'react-icons/go'
const BlogSection = () => {
  return (
    <div className='w-full flex mx-auto bg-[#3A0CA3] mt-10 items-center justify-center'>
    <section className='aboutSection  text-white space-y-6 py-8  flex flex-col mt-10 px-4 w-[90%] self-center'>
            <h1 className='font-medium uppercase text-center'>WHAT’S TRENDING</h1>
            <h1 className='font-semibold text-3xl text-center'>Latest Blogs & Posts</h1>
            <div className='grid gap-16 grid-cols-3 mt-4 mx-auto ju'>
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className='flex rounded-md  flex-col space-y-1 '>
                        <div className='w-[340px] h-[240px]'>
                            <img src='/house1.jpg' alt='t' className='w-full h-full rounded-md ' />
                        </div>
                        <div className='flex flex-col space-y-1 h-fit relative pb-12'>
                            <h1 className='font-bold text-lg'>Top 10 Home Buying Mistakes to Avoid</h1>
                            <p className='text-gray-400'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                            <button className='circledArrow absolute right-8 -bottom-4 flex justify-center items-center text-[#3A0CA3] bg-white rounded-full  h-10 w-10'>
                                <GoArrowRight className='text-[#3A0CA3] text-3xl font-bold' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default BlogSection