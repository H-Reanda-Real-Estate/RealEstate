import React from 'react'
import { BiSearch } from 'react-icons/bi'

const ServicesPage = () => {
    return (
        <section className='aboutSection bg-[#D4D4D4] space-y-6 py-12  flex flex-col mt-10 px-4 w-[90%] self-center'>
            <h1 className='font-medium uppercase text-center'>Our Services</h1>
            <h1 className='font-semibold text-3xl text-center'>Donec porttitor euismod dignissim</h1>
            <div className='grid gap-12 grid-cols-3'>
                <div className='flex flex-col p-6 space-y-3 px-16 py-10 bg-white rounded-md shadow-md'>
                    <div className='w-16 bg-[#3A0CA3] m-auto rounded-full flex items-center text-white h-16'>
                        <BiSearch className='m-auto font-bold text-2xl flex justify-center' />
                    </div>
                    <h1 className=' text-center font-semibold'>Buy a New Home</h1>
                    <p className='text-center text-gray-700'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                </div>
                <div className='flex flex-col p-6 space-y-3 px-16 py-10 bg-white rounded-md shadow-md'>
                    <div className='w-16 bg-[#3A0CA3] m-auto rounded-full flex items-center text-white h-16'>
                        <BiSearch className='m-auto font-bold text-2xl flex justify-center' />
                    </div>
                    <h1 className=' text-center font-semibold'>Buy a New Home</h1>
                    <p className='text-center text-gray-700'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                </div>
                <div className='flex flex-col p-6 space-y-3 px-16 py-10 bg-white rounded-md shadow-md'>
                    <div className='w-16 bg-[#3A0CA3] m-auto rounded-full flex items-center text-white h-16'>
                        <BiSearch className='m-auto font-bold text-2xl flex justify-center' />
                    </div>
                    <h1 className=' text-center font-semibold'>Buy a New Home</h1>
                    <p className='text-center text-gray-700'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                </div>
            </div>
        </section>
    )
}
export default ServicesPage