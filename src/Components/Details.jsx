import React from 'react'
import Logo from '../assests/netflix.png'
import { FaSearch } from "react-icons/fa";
import Logo2 from '../assests/ab.png'
import { IoIosNotifications } from "react-icons/io";
import Batman from '../assests/row/1.jpeg';
import { BsTrophy } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillLike ,AiFillDislike } from "react-icons/ai";
import { GoDot , GoDotFill } from "react-icons/go";

const Details = () => {
  return (
    <div>
    <div className='container mx-auto  w-full '>
      <div className='flex justify-between'>
        <div className='flex gap-6  items-center'>
            <div className='flex items-center '>
            <img src={Logo} alt="" className="h-28 "  />
            </div>
            <div>
                <ul className='flex gap-8 items-center text-slate-300'>
                    <li><FaSearch  /></li>
                    <li  >BROWSER</li>
                    <li  >KIDS</li>
                </ul>
            </div>    
        </div>
        <div className='flex items-center'>
            <div>
                <ul className='text-slate-300'>
                <li><IoIosNotifications  /></li>
                </ul>
          
            </div>
            <div className='flex items-center '>
            <img src={Logo2} alt="" className="h-12 "  />
            </div>
        </div>
      </div>
    </div>
   <div className='p-8'>
   <div className='grid grid-cols-2'>
        <div className='grid grid-cols-2 gap-4'>
           <div>
           <img src={Batman} alt="" className='rounded-lg ' />
           </div>
           <div className=''>
              <h1 className='text-white text-2xl font-bold'>American Sniper</h1>
              <div className='flex gap-3 mt-3 text-[14px] text-slate-600 items-center'>
                <p>2012</p>
                <p >16+</p>
                <p>2h 12m</p>
              </div>
              <p className='text-slate-600 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='flex items-center mt-3 gap-6 p-2 tro'>
              <BsTrophy  className='text-white text-2xl' />
              <p className='text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className='flex items-center gap-2 mt-8'>
                <button className='flex items-center gap-3  border py-3 px-6 text-white '><FaArrowAltCircleRight />  Add to List</button>
                <button className='flex items-center gap-3 rounded-3xl border py-3 px-3 text-white '><AiFillLike  /> </button>
                <button className='flex items-center gap-3 rounded-3xl border py-3 px-3 text-white '><AiFillDislike /> </button>
              </div>
           </div>     
        </div>
        <div className='flex justify-end items-center mb-44 '>
            <div className='text-white'>
            <GoDotFill />
            <GoDot />
            <GoDot />
            <GoDot />
            <GoDot />
            </div>
        </div>
    </div>    
   </div>
  
    </div>
  )
}

export default Details
