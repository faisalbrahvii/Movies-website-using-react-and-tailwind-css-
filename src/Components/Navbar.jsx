import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Logo from '../assests/netflix.png'
import Logo2 from '../assests/gbb.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  

  return (
    <>
    <div className='flex justify-between items-center  absolute h-24 w-full mx-auto px-4 bg-transparent text-white'>
    <div>
      <img src={Logo} alt="" className=" h-32 relative left-12 hero"  />
    </div>
    <ul className='hidden  md:flex gap-16 items-center text-gray-200 text-[16px] hero'>
    <li className='text-white p-4'>Home</li>
      <li className='p-4'>Movies</li>
      <li className='p-4'>Series</li>
      <li className='flex items-center gap-1'>My list <FaAngleDown /></li>
      <li><FaSearch size={21} className='text-white' /></li>
        <li><IoIosNotifications size={23} className='text-white' /></li>
        <li><img src={Logo2} alt="" className="h-12 text-white " /></li>
    </ul>
    
  </div>
  <div className='h-24 w-full mob hidden   text-white'>
    <center>
      <img src={Logo} alt="" className=" h-32 relative "  />
    </center>
    
    </div>

    </>
  

  )
}

export default Navbar
