import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Squeezed logo-03.png';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-gray-900 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 ">
            {/* Logo */}
            <img className="mx-auto" src={Logo} width="75" height="20" alt="Hero" />
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a href="/" className="text-[#B1DCA7] font-bold hover:text-[#FFF962] ml-3">Home</a>
              </li>
              <li>
                <a href="#features" className="text-[#B1DCA7] font-bold hover:text-[#FFF962] ml-3">
                  <span>Learn More</span>                 
                </a>
              </li>
              <li>
                <a href="#team" className="text-[#B1DCA7] font-bold hover:text-[#FFF962] ml-3">
                  <span>Team</span>               
                </a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
