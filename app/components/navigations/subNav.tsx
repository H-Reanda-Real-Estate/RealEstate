import React from 'react'
import { BiLocationPlus, BiPhone } from 'react-icons/bi'
import { BsEnvelopeFill } from 'react-icons/bs'

const SubNav = () => {
  return (
    <div className='flex text-sm w-full z-10 py-3 px-16 bg-[#3A0CA3] text-white justify-between'>
        <div className='flex w-[30%] space-x-2'>
            <BiLocationPlus className=' my-auto justify-center items-center space-x-1' />
            <p className='flex'>H-Rwanda, Kigali, Nyamirambo</p>
        </div>
        <div className='flex w-[70%] justify-end items-end space-x-6'>
            <div className='flex space-x-2'>
                <BiPhone className='m-auto justify-center items-center space-x-1' />
                <p className='flex'>+250 786 684 390</p>
            </div>
            <div className='flex space-x-2'>
                <BsEnvelopeFill className='m-auto justify-center items-center space-x-1' />
                <p className='flex'>support@hrwanda.com</p>
            </div>
        </div>
    </div>
  )
}

export default SubNav