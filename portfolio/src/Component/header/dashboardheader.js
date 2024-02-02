import React from 'react'

function Dashboardheader() {
  return (
      <div className='bg-gray-800 py-4'>
  <ul className='flex space-x-4 justify-center items-center'>
    <li>
      <a className='text-white hover:text-gray-300' href="/karthik">Karthik</a>
    </li>
    <li>
      <a className='text-white hover:text-gray-300' href="/projects">Projects</a>
    </li>
    <li>
      <a className='text-white hover:text-gray-300' href="/blogs">Blogs</a>
    </li>
    <li>
      <a className='text-white hover:text-gray-300' href="/resume">Resume</a>
    </li>
  </ul>
</div>

    );
}


export default Dashboardheader;