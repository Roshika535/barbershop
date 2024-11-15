import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonial', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <nav className='flex justify-between items-center gap-4 bg-gray-900 lg:px-10 px-4 py-6 sticky top-0 z-50 border-b-8 border-gray-800'>
        <div id="logo">
          <h1 className='text-3xl text-white font-bold'>Barber<span className='italic text-gray-700'>Shop</span></h1>
        </div>

        <ul className='lg:flex justify-center items-center gap-6 hidden'>
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-800 hover:text-white'
                activeClass='bg-gray-800 text-white'
                to={path}
                smooth={true}
                duration={1000}
                onClick={closeMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {open ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className='lg:hidden flex flex-col items-center gap-4 bg-gray-900 p-6 absolute w-full z-50'>
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-gray-800 hover:text-white'
                activeClass='bg-gray-800 text-white'
                to={path}
                smooth={true}
                duration={1000}
                onClick={closeMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Header;
