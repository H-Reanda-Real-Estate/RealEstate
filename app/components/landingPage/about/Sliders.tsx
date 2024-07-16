import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa6';
import { BsFire } from 'react-icons/bs';
const SlidingCards: React.FC = () => {
  const settings: { current: number, responsive: any, dots: boolean, dotsClass: string, infinite: boolean, speed: number, slidesToShow: number, slidesToScroll: number, autoplay: boolean, autoplaySpeed: number, pauseOnHover: boolean } = {
    current: 0,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // prevArrow: <NextArrow />,
    // nextArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
  };
  return (
    <div className="lg:w-[100%] z-0 w-full justify-center self-center py-12 lg:mt-4 md:mt-4 xl:mt-4 2xl:mt-4 mt-[1%] flex-col lg:relative block">
      <Slider {...settings}
        className="flex justify-center"
      >
        {['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg', 'house6.jpg'].map((image, index) => (
          <div key={index} className='px-3 rounded-md'>
            <div className="flex flex-col justify-center w-[280px] h-[250px] self-center relative">
              <img
                src={`/${image}`}
                height={152}
                width={172}
                alt=""
                className=" h-full w-full object-full rounded-3xl mb-4"
              />
              <div className='absolute bottom-8 left-4 flex space-x-1 bg-white p-2 rounded-xl'>
                <BsFire className='text-[#f61717]' />
                <p className='text-[#f61717] font-semibold'>Popular</p>
              </div>
            </div>
            <div className='px-2 '>
              <h1 className='text-md font-semibold'>$ 340</h1>
              <h1 className='font-semibold'>House for sale</h1>
              <h1 className='t text-gray-700'>Kigali, Nyamirambo Mubiryogo</h1>
              <div className='flex w-full mt-2 justify-between'>
                <div className='w-1/2 space-x-2 flex'>
                  <FaBed className='my-auto justify-center' />
                  <p>4 bed</p>
                </div>
                <div className='w-1/2 space-x-2 flex'>
                  <FaBath className='my-auto justify-center' />
                  <p>3 bed</p>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </Slider>
    </div>
  );
};

export default SlidingCards;