import React from 'react'
import { Carousel } from 'antd';
import { FaQuoteLeft } from 'react-icons/fa';

const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    borderRadius: '2%',
    width: '90%',
    justifyContent: 'center',
    margin: 'auto',
  };
const TestmonialsSection = () => {
    
    return (
        <section className='aboutSection py-12  flex justify-between mt-10 px-4 w-[90%]
         self-center'>
            <div className='flex flex-col space-y-1 w-1/2'>
                <div className='flex flex-col w-[60%] space-y-1'>
                    <h1 className='font-medium uppercase text-[#3A0CA3]'>TESTIMONIALS</h1>
                    <h1 className='font-semibold text-3xl'>Look What Our Customers Say!</h1>
                    <p className='text-gray-700'>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </p>
                    <div className='aboutAndContatusButtons flex mt-12 gap-4'>
                        <button className='bg-[#3A0CA3] text-white rounded-md mt-8 py-2 px-3 h-fit w-fit'>SEE ABOUT US</button>
                        <button className='bg-[#3A0CA3] text-white rounded-md mt-8 py-2 px-3 h-fit w-fit'>CONTACT US</button>
                    </div>
                </div>
            </div>
            <div className='slidingImage items-center w-[40%]'>
              <Carousel
                autoplay
                effect='fade'
                infinite
                dotPosition='right'
                className='round rounded-md my-auto justify-center'>
                  {
                    ['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg', 'house6.jpg'].map((image, index) => (
                      <div key={index} className='justify-center items-center my-auto w-full bg-gray-400 rounded-3xl'>
                        <div style={contentStyle} className='justify-center items-center my-auto'>
                          <div className='w-[95%] p-3 space-y-5 justify-center items-center my-auto'>
                            <FaQuoteLeft className='text-4xl text-white' />
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis</p>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis</p>
                            <div className='line h-[1px] bg-white w-full m-auto'></div>
                            <div className='imageAndName flex my-auto '>
                              <img src={`/${image}`} alt='image' className='w-16 h-16 rounded-full' />
                              <div className='flex flex-col ml-4 mt-2'>
                                <h1 className='text-white font-semibold'>John Doe</h1>
                                <p className='text-white'>CEO, Company</p>
                              </div>
                              <div className='starsRatings flex ml-4 mt-4 justify-end '>
                                <p className='text-white'>⭐️⭐️⭐️⭐️⭐️</p>
                                </div>

                              </div>
                            </div>
                        </div>
                      </div>
                    ))
                  }
              </Carousel>
            </div>
        </section>
    )
}

export default TestmonialsSection