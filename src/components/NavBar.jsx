import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className="text-white p-3 flex justify-between items-center max-w-screen-lg mx-auto">
        <h1 className='text-3xl text-primary-green-500 font-bold uppercase w-full'>{nav ? 'Tommy Le Data finance' : ''}</h1>
        <ul className='lg:flex hidden'>
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">Company</li>
          <li className="p-4 cursor-pointer">Resources</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        <div className='block lg:hidden' onClick={handleNav}>
          {nav === true ?
            <AiOutlineMenu size={20} /> :
            <AiOutlineClose size={20} />
          }
        </div>
        <div className={nav === true ? 'fixed top-0 left-[-100%] bg-default-black w-[60%] h-full p-4 duration-300 ease-in-out' : "fixed top-0 left-0 bg-default-black w-[60%] h-full p-4 duration-300 ease-in-out"}>
          <h1 className='text-2xl p-3 text-primary-green-500 font-bold uppercase w-full '>Tommy Le Data finance</h1>
          <ul className='p-4 uppercase'>
            <li className="p-3 border-b border-gray-500 cursor-pointer"> Home</li>
            <li className="p-3 border-b border-gray-500 cursor-pointer">Company</li>
            <li className="p-3 border-b border-gray-500 cursor-pointer">Resources</li>
            <li className="p-3 border-b border-gray-500 cursor-pointer">About</li>
            <li className="p-3 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
