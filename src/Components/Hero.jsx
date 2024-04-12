import React from 'react'
import MainImage from '../assests/rampage.jpeg'
import { MdPlayArrow } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='w-full h-[750px] text-white hero'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[750px] bg-gradient-to-r from-black/60'></div>
        <img className='w-full h-full' src={MainImage} alt='' />
       <div className='absolute w-full top-[10%] p-10 md:p-20' >
            <p className='text-slate-100'>Duration : 1h 47m</p>
            <div className='flex gap-4 items-center mt-3'>
            
            <p className='font-bold flex items-center gap-2'><FaStar className='text-orange-500'/>6.8</p>
            <p className='text-sm text-slate-300'>Action | Advantage | Sci-fi</p>
            </div>
            <h1 className='text-5xl font-bold mt-5 text-white'>Rampage</h1>
            <p className='text-slate-200 mt-7 '>Lorem ipsum dolor lo sit amet consectetur adipisicing elit. Modi, similique!</p>
            <div className='flex gap-2 mt-16'>
                <button className='flex items-center gap-2 py-3 px-7  rounded-3xl bg-red-600 text-[17px] font-bold text-white'><MdPlayArrow /> WATCH</button>
                <button className='flex items-center gap-2 py-3 px-7 rounded-3xl bg-black  font-bold text-[17px] text-white'><FaPlus /> ADD LIST</button>
            </div>
      </div>
    </div>

</div>
  )
}

export default Hero
{/* <div className='absolute w-full top-[20%] p-10 md:p-20' >
            <p className='text-slate-100'>Duration : 1h 47m</p>
            <h1 className='text-5xl font-bold mt-5 text-white'>Rampage</h1>
            <p className='text-slate-200 mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, similique!</p>
            <div className='flex gap-2 mt-10'>
                <button className='flex items-center gap-2 py-3 px-7  rounded-3xl bg-red-600 text-[17px] font-sans text-white'><MdPlayArrow /> WATCH</button>
                <button className='flex items-center gap-2 py-3 px-7 rounded-3xl bg-black font-sans text-[17px] text-white'><FaPlus /> ADD LIST</button>
            </div>
      </div> */}