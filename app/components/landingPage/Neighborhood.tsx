import React from 'react'
const NeighborhoodSection = () => {
    return (
        <section className='aboutSection space-y-3 py-4  flex flex-col mt-10 w-[90%] self-center'>
            <h1 className='font-medium text-[#3A0CA3] uppercase'>AREAS ACROSS THE TOWN</h1>
            <h1 className='font-semibold text-3xl'>Neighborhood Properties</h1>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row space-x-12 h-[320px]'>
                    <div className='w-[30%] h-full relative'>
                        <img src='/house1.jpg' alt='house' className='w-full filter backdrop-filter fill-stone-800 h-full rounded-md' />
                        <div className='flex flex-col text-white fill-transparent   absolute bottom-3 left-2'>
                            <p className='font-bold text-3xl'>234</p>
                            <p className='text-xl font-medium'>Nyamirambo, Biryogo</p>
                        </div>
                    </div>
                    <div className='w-[30%] h-full relative'>
                        <img src='/house4.jpg' alt='house' className='w-full h-full rounded-md' />
                        <div className='flex flex-col text-white fill-transparent   absolute bottom-3 left-2'>
                            <p className='font-bold text-3xl'>234</p>
                            <p className='text-xl font-medium'>Nyamirambo, Biryogo</p>
                        </div>
                    </div>
                    <div className='w-[40%] h-full relative'>
                        <img src='/house2.jpg' alt='house' className='w-full h-full rounded-md' />
                        <div className='flex flex-col text-white fill-transparent   absolute bottom-3 left-2'>
                            <p className='font-bold text-3xl'>234</p>
                            <p className='text-xl font-medium'>Nyamirambo, Biryogo</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-12 h-[320px] relative'>
                    <div className='w-[40%] h-full'>
                        <img src='/house3.jpg' alt='house' className='w-full h-full rounded-md' />
                        <div className='flex flex-col text-white fill-transparent   absolute bottom-3 left-2'>
                            <p className='font-bold text-3xl'>234</p>
                            <p className='text-xl font-medium'>Nyamirambo, Biryogo</p>
                        </div>
                    </div>
                    <div className='w-[70%] h-full relative'>
                        <img src='/house6.jpg' alt='house' className='w-full h-full rounded-md' />
                        <div className='flex flex-col text-white fill-transparent   absolute bottom-3 left-2'>
                            <p className='font-bold text-3xl'>234</p>
                            <p className='text-xl font-medium'>Nyamirambo, Biryogo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NeighborhoodSection