import React from 'react'
import SlidingCards from './Sliders'

const CheckoutPage = () => {
  return (
    <section className='aboutSection  flex flex-col mt-10 px-4 w-[90%] self-center'>
      <div className='flex w-full justify-between'>
        <div className='flex w-1/2 flex-col'>
          <h1 className='text-xl font-medium text-[#3A0CA3] uppercase'>Checkout our new</h1>
          <h2 className='text-3xl font-bold text-[#4F4F4F]'>Latest Listed Properties</h2>
          <p className='text-[#4F4F4F]'>
            We have a wide range of properties available for sale and rent.
            Whether you are looking for a new home, an investment property, or a rental, we can help you find the perfect property for your needs.
          </p>
        </div>
        <div className='flex w-1/2 px-12 justify-center m-auto gap-8'>
          <button className='bg-[#3A0CA3] text-white rounded-full py-1 px-3 h-fit w-fit'>All</button>
          <button className='bg-[#3A0CA3] text-white rounded-full py-1 px-3 h-fit w-fit'>Sale</button>
          <button className='bg-[#3A0CA3] text-white rounded-full py-1 px-3 h-fit w-fit'>Rent</button>
        </div>
      </div>
      <SlidingCards />
    </section>
  )
}

export default CheckoutPage