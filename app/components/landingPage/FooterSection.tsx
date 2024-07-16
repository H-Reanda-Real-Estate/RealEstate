import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhone } from 'react-icons/pi'
import { CgEnter } from 'react-icons/cg'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'

const FooterSection = () => {
    return (
        <section className='w-full flex flex-col bg-blue-200 mt-12 max-auto justify-center items-center h-[30vh]'>
            <div className='grid grid-cols-4 w-[90%] justify-center'>
                <div className='flex flex-col'>
                    <div className='log'>
                        <p className='font-bold text-2xl uppercase'>H-Rwanda</p>
                    </div>
                    <div className='loctation flex space-x-1 mt-4'>
                        <CiLocationOn className='my-auto justify-center items-center space-x-1' />
                        <p className='flex'>H-Rwanda, Kigali, Nyamirambo</p>
                    </div>
                    <div className='phone flex space-x-1 mt-3'>
                        <PiPhone className='my-auto justify-center items-center space-x-1' />
                        <p className='flex'>+250 786 684 390</p>
                    </div>
                    <div className='email flex space-x-1 mt-1'>
                        <BiMessage className='my-auto justify-center items-center space-x-1' />
                        <p className='flex'>hrwand@gmail.com</p>
                        <p className='flex'>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='log'>
                        <p className='font-bold text-lg'>Quick Links</p>
                    </div>
                    <ul className='space-y-1 mt-4'>
                        <li className='flex'>Home</li>
                        <li className='flex'>About</li>
                        <li className='flex'>Listings</li>
                        <li className='flex'>Services</li>
                        <li className='flex'>Contact us</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <div className='log'>
                        <p className='font-bold text-lg'>Discovery</p>
                    </div>
                    <ul className='space-y-1 mt-4'>
                        <li className='flex'>Home</li>
                        <li className='flex'>About</li>
                        <li className='flex'>Listings</li>
                        <li className='flex'>Services</li>
                        <li className='flex'>Contact us</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <div className='log'>
                        <p className='font-bold text-xl'>Subscription</p>
                    </div>
                    <div className='mt-4 relative'>
                        <input type='email' placeholder='Enter your email' className='w-full p-2 rounded-md' />
                        <button className=' text-white p-2 rounded-md absolute right-3 top-[3px]'>
                            <CgEnter className='te text-blue-800 text-lg' />
                        </button>
                    </div>
                    <p className='mt-1'>Subscribe to our newsletter</p>
                    <div className='flow-us-on mt-4 flex space-x-2'>
                        <p className='flex font-bold text-lg'>Follow us on:</p>
                        <div className='flex space-x-2 text-blue-700'>
                            <BsTwitterX className='w-6 h-6' />
                            <FaFacebook className='w-6 h-6' />
                            <ImInstagram className='w-6 h-6' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full bg-slate-700 justify-center items-center py-2'>
            <div className='lastFooter flex w-[90%] justify-between text-white text-center py-2'>
                <p className='text-sm'>H-Rwanda &copy; 2021</p>
                <p className='text-sm'>Privacy Policy</p>
                <p className='text-sm'>Terms of Service</p>
                <p className='text-sm'>All rights reserved</p>
            </div>
        </div>
        </section>
    )
}

export default FooterSection