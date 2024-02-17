import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Dashboardheader() {
  const [showMenu, setShowMenu] = useState(false);
 
  return (
    <div className='fixed top-0 w-full text-white p-4 z-50'>
      <div className="flex justify-between items-center">
        <div>
          <a className='text-red hover:text-gray-300 font-bold font-caveat text-4xl	' href="#">KV</a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <FaBars className="text-white" />
          </button>
        </div>

        {/* Dropdown menu for navigation links */}
        <div className={`lg:flex ${showMenu ? "flex flex-col mt-2" : "hidden"} items-center lg:ml-4`}>
          <ul className='space-y-2 lg:flex lg:space-x-8 lg:space-y-0'>
            <li>
              <a className='text-red hover:text-gray-300 text-2xl' href="#projects">Projects</a>
            </li>
            <li>
              <a className='text-red hover:text-gray-300 text-2xl' href="#experience">Experience</a>
            </li>
            <li>
              <a className='text-red hover:text-gray-300 text-2xl' href="#blogs">Blogs</a>
            </li>
            <li>
              <a className='text-red hover:text-gray-300 text-2xl' href="https://drive.google.com/file/d/1-shMEHQ2exjTC5Ld-yvsUI6_79N8KYYs/view?usp=drive_link" target="_blank">Resume</a>
            </li>
            <li>
              <a className='text-red hover:text-gray-300 text-2xl' href="https://github.com/Karthikvanabhojana1" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboardheader;
