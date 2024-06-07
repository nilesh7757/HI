import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#001527] text-white flex relative w-full top-0 h-12 items-center justify-between px-22 md:px-44'>
        <div>
    <div className='Logo font-bold text-2xl  relative'>
        <span className='text-blue-500 '> &lt;</span>
        <span className="outline-4">Pass</span>
        <span className='text-blue-500 '>OP/&gt;</span>
        </div>
        </div>
         <div className=' text-white'>
          <a className=' bg-blue-500 rounded-full p-1 flex justify-center items-center gap-2' href="https://github.com/nilesh7757/PassOP.git">
          <img className="w-8 h-8" src="icons/github.svg" alt="" />
          <span className='font-bold text-xl'>GitHub</span>
          </a>
         </div>
    </nav>
  )
  
}
export default Navbar
