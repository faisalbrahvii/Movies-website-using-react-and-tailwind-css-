import React from 'react';
import { FaArrowTrendUp, FaPlus, FaStar, FaFire, FaHeart, FaEye, FaLessThan, FaGreaterThan } from "react-icons/fa6";
import  { trends } from '../Data/Data'; 

const Trends = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 hero lg:p-14 md:p-14 gap-16'>
          <div className='flex justify-center gap-4'>
            <FaArrowTrendUp className='text-white items-center text-2xl' />
            <p className='text-slate-100 font-sans text-[16px]'>Trends Now</p>
          </div>
          <div className='flex justify-center items-center  gap-2'>
            <FaFire className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Popular</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <FaStar className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Premires</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <FaPlus className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Recently Added</p>
          </div>
        </div>
        <hr className='bg-gray-600 ' />
        <div className='flex gap-10 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-9'>
          <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white'>Action</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Adventure</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Animation</button>
          <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white'>Biography</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Crime</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Comedy</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Documentary</button>
          <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white'>Drama</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>Horror</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>News</button>
          <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white'>StandUp Comedy</button>
        </div>
      </div>
      <div className='mt-9'>
        <div className='flex items-center gap-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          <div>
            <FaLessThan className='text-white text-5xl absolute p-2 left-0' />
          </div>
          {trends.map((items, index) => (
           <div key={index} className='w-[14%]'>
             <div>
               <img src={items.image} alt="" className='rounded-lg' />
               <div className='mt-4'>
                 <p className='text-white text-[16px] font-bold'>{items.name}</p>
                 <div className='text-white flex gap-10'>
                   <div>
                     <p className='text-[14px]'>{items.year}</p>
                   </div>
                   <div className='flex justify-between items-center gap-2'>
                     <FaHeart className='text-[12px]' />
                     <FaEye className='text-[12px] text-red-700' />
                     <FaStar className='text-[12px] text-yellow-300' />
                     <p className='text-[12px] text-yellow-300'>{items.rate}</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           ))}
          <div  >
            <FaGreaterThan className='text-white  text-5xl absolute right-0  p-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trends;
