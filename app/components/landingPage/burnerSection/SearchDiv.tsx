import React from 'react'

const SearchDiv = () => {
  return (
    <div className='w-1/2 flex flex-col'>
<form className='form-contol w-[40%] mt-8 shadow-md bg-white rounded-md p-2 self-center flex flex-col'>
  <nav className='flex justify-between py-4 border-b'>
    <h1 className='font-semibold'>For Home</h1>
     <h1 className='font-semibold'>For Rent</h1>
   </nav>
   <div className='flex  gap-6 flex-col mt-8 fields pb-5'>
     <input className='p-3 outline-none bg-slate-200 rounded-md' type='text' placeholder='Biryogo, Gikondo etc' />
     <select className='p-3 outline-none bg-slate-200 rounded-md'>
       <option value=''>Property Type</option>
       <option value=''>House</option>
       <option value=''>Apartment</option>
       <option value=''>Office</option>
     </select>
     <select className='p-3 outline-none bg-slate-200 rounded-md'>
     <option value=''>Select Rooms</option>
     <option value=''>1</option>
     <option value=''>2</option>
     <option value=''>3</option>
     <option value=''>4</option>
     </select>
   <button className='bg-[#3A0CA3] text-white p-3 rounded-md'>Search</button>
   </div>
 </form>
</div>
  )
}

export default SearchDiv