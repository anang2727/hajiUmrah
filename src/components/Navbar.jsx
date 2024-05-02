import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-[#212121] flex justify-between items-center h-24 fixed w-full z-20 md:px-32 font-[poppins] mx-auto px-6 text-white'>
      {/* Logo */}
      <h1 className='w-full text-2xl font-bold text-white'>Jabbar.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-500'
          >
            {item.text}
          </li>
        ))}
      </ul>
        <button className='md:px-2 md:py-1 px-2 py-1 hidden md:block bg-white text-[#212121] mt-2 rounded-sm font-bold md:text-lg'>Daftar</button>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#212121] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
      <h1 className='w-full text-2xl font-bold text-white m-4'>Jabbar.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
                <button className='md:px-3 md:py-2 px-2 py-1 bg-white w-full  md:hidden text-[#212121] mt-2 rounded-sm font-bold md:text-lg'>Daftar</button>
      </ul>
    </div>
  );
};

export default Navbar;