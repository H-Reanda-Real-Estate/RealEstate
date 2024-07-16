import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  borderRadius: '2%',
  textAlign: 'center',
  background: '#364d79',
};
function MainBurner() {
  return (
    <div className='w-[50%] flex px-4 space-y-3 flex-col'>
            <h1>REAL ESTATE</h1>
            <h1 className='mt-2 text-4xl font-semibold'>Find a perfect home you love..!</h1>
            <h1 className='mt-2'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</h1>
            <div className='slidingImage'>
              <Carousel
                autoplay
                effect='fade'
                infinite
                className='round rounded-md'>
                  {
                    ['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg', 'house6.jpg'].map((image, index) => (
                      <div key={index}>
                        <div style={contentStyle}>
                          <img src={`/${image}`} alt='image' className='h-full w-full' />
                        </div>
                      </div>
                    ))
                  }
              </Carousel>
            </div>
          </div>
  )
}

export default MainBurner