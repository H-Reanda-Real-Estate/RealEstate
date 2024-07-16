import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const MainNav = () => {
  return (
    <div className='flex justify-between py-4 w-full '>
      <div className='menus flex space-x-4 my-auto justify-start w-[30%]'>
        <p className='flex font-bold'>Home</p>
        <p className='flex font-bold'>About</p>
        <p className='flex font-bold'>Listings</p>
        <p className='flex font-bold'>Services</p>
        <p className='flex font-bold'>Contact us</p>
      </div>
      <div className='logo flex w-[40%] items-center text-center justify-center'>
        <p className='flex font-bold text-2xl'>H-Rwanda</p>
      </div>
      <div className='logout flex w-[30%]'>
        <div className='flex w-full my-auto justify-end self-end'>
          <BiUserCircle className='mt-[1px] text-lg itm' />
          <p className='flex font-bold'>Login</p>
          <p>/</p>
          <p className='flex font-bold'>Register</p>
        </div>

      </div>
    </div>


  )
}

export default MainNav