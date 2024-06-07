import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#001527]  w-full flex flex-col justify-center items-center text-white'>
        <div className='Logo font-bold text-2xl'>
        <span className='text-blue-500 '> &lt;</span>
        <span className="outline-4">Pass</span>
        <span className='text-blue-500 '>OP/&gt;</span>
        </div>
        <div className='flex justify-center items-center'>
            Creted with <img className="px-1 bg-[#001527] h-5 flex justify-center items-center "src="icons/heart.png" alt="" /> By &copy; NileshMori
        </div>
    </div>
  )
}

export default Footer
