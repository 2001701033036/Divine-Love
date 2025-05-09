import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import logo from '../asset/logo.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="bg-neutral-800 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full bg-white"
            src={logo}
            alt="Logo"
          />
          <span className="text-white text-xl font-bold">Divine Love Church</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 text-white text-base font-medium ">
            <li className='hover:text-orange-300'><a href="/" >Events</a></li>
            <li className='hover:text-orange-300'> <a href="#about">About</a></li>
            <li className='hover:text-orange-300'><a href="#Pastor">Our Pastor</a></li>
            <li className='hover:text-orange-300'><a href="#Gallery">Photo Gallery</a></li>
            <li className='hover:text-orange-300'><a href="#Contact">Contacts</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden block">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="block md:hidden bg-white text-black w-full shadow-md">
          <ul
            className="flex flex-col items-center gap-4 py-4"
            onClick={() => setToggleMenu(false)}
          >
            <li><a href="/">Events</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Pastor">Our Pastor</a></li>
            <li><a href="#Gallery">Photo Gallery</a></li>
            <li><a href="#Contact">Contacts</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
