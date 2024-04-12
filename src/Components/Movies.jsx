import React from 'react'
import { FaArrowTrendUp , FaPlus , FaStar , FaFire ,FaHeart ,FaEye , FaCheck  } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";

import Batman from '../assests/row/1.jpeg';
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaChevronUp , FaChevronDown } from "react-icons/fa6";
import  { movies } from '../Data/Data'; 


const Movies = () => {
  return (
    <div>
      <div className='container mx-auto mt-10' >
      <div className='w-full grid grid-cols-3 gap-16 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-4  md:p-14'>
        <div className='flex justify-center items-center gap-2'>
          <BiSolidMoviePlay className='text-white text-2xl' />
          <p className='text-slate-100 font-sans text-[16px]'>Movies</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <RiMovie2Line className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Series</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <FaCheck className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Original Series</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <FaSearch className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Search</p>
        </div>
      </div>
      <hr className='bg-gray-600' />
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
      <div className='grid sm:grid-cols-1 items-center mt-9'>
        <div className='flex items-center gap-3 p-4'>
          <p className='text-slate-400'>Sort by:</p>
          <button className='bg-red-600 px-6 py-2 font-sans rounded-3xl text-white'>Latest</button>
          <button className='bg-gray-900 px-6 py-2 font-sans rounded-3xl text-white flex items-center gap-2'>Year <FaChevronDown /></button>
          <button className='bg-gray-900 px-6 py-2 font-sans rounded-3xl text-white flex items-center gap-2'>News <FaChevronDown /></button>
        </div>
      </div>
    </div>
    <div className='m-3 p-4 mt-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-5'>
        {movies.map((items, index)=>{
           return (
            <div className=''>
            <div>
              <img src={items.image} alt="" className='rounded-lg' />
            </div>
            <div className='mt-4'>
              <p className='text-white text-[16px] font-bold'>{items.name}</p>
              <div className='text-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-2'>
      <p className='text-[14px] sm:text-[12px] md:text-[14px] lg:text-[14px]'>{items.year}</p>
      <div className='flex items-center gap-2'>
        <FaHeart className='text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]' />
        <FaEye className='text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]' />
        <FaStar className='text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]' />
        <p className='text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]'>{items.rate}</p>
      </div>
    </div>

            </div>
          </div>
           )  
      })}
          
        </div>
    </div>
    </div>
  )
}

export default Movies
