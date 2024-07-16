import React from 'react'

const BecomAgent = () => {
    return (
        <section className='w-[90%] rounded-3xl mt-12 mx-auto h-[260px] flex justify-between self-center bg-[#3A0CA3] p-2 px-12 relative'>
            <div className='imageContainer w-[25%] h-[303px] absolute -top-11'>
                <img src='/fab.jpg' alt='t' className='w-full h-full object-cover rounded-3xl' />
            </div>
            <div className='flex flex-col w-[40%] h-full justify-center absolute left-[35%]'>
                <h1 className='text-white text-3xl font-bold'>Become an Agent</h1>
                <p className='text-white text-lg'>Join our team of expert agents and start earning money today by selling and renting properties.</p>
            </div>
            <button className='bg-white text-[#3A0CA3] text-xl rounded-full py-1 px-3 h-fit w-fit justify-center flex my-auto bottom-[40%] absolute right-12'>Join Now</button>
        </section>
    )
}

export default BecomAgent