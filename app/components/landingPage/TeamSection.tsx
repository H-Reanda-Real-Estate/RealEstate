import React from 'react'
const TeamSection = () => {
    return (
        <section className='aboutSection space-y-4 py-4  flex flex-col mt-10 px-4 w-[90%] self-center'>
            <h1 className='font-medium uppercase text-center text-[#3A0CA3]'>Introduce yourself to </h1>
            <h1 className='font-semibold text-2xl text-center'>Our Team of Experts</h1>
            <div className='grid gap-12 grid-cols-5 mt-4'>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className='flex rounded-md bg-slate-n bg-slate-400 p-2 flex-col space-y-1 h-[330px] w-[200px]'>
                        <div className='w-full h-[80%]'>
                            <img src='/fab.jpg' alt='team' className='w-full h-full object-cover rounded-tl-[100px] rounded-3xl' />
                        </div>
                        <h1 className='text-center font-bold text-lg'>Fabrice M</h1>
                        <p className='text-center text-gray-700'>CEO and coufounder</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default TeamSection