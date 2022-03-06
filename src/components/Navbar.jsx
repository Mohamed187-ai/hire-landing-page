import React, { useState } from 'react'
import { Logo } from './Logo'
import ThemeToggle from './ThemeToggle'
import { GoThreeBars } from 'react-icons/go'


const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <>
      <header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-4'>
        <div className='flex grow-0 basis-1/3 md:hidden'><MenuPopover /></div>
        <div className='flex grow-0 basis-1/3 justify-center md:justify-start'>
          <a href="#" className='my-auto flex w-[140px] md:ml-0'>
            <Logo />
          </a>
          <div className="hidden md:flex gap-2">
            <a href="">
              <button className='hidden md:inline-flex rounded-full px-4 py-1 hover:bg-purple-200 font-bold dark:hover:text-black'>companies</button>
            </a>
            <a href="">
              <button className='hidden md:inline-flex rounded-full px-4 py-1 hover:bg-purple-200 font-bold dark:hover:text-black'>Jobs</button>
            </a> 
          </div>
        </div>
        <div className='flex grow-0 basis-1/3 justify-end'>
          <button className='hidden md:block rounded-full py-0 px-3 border-solid border-2 border-purple-600  mr-2 hover:bg-purple-400 hover:border-purple-400 hover:text-white ease-out duration-300'>For Employers</button>
          <button className='hidden md:block rounded-full py-0 px-3 bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800 text-white mr-2'>Sign In</button>
          <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </div>
      </header>
    </>
  )
}

export default Navbar;

const MenuPopover = () => {
  const [isOpen, setIsOpen] = useState(false)
  return(
    <div>
      <button className='flex ml-auto' onClick={() => setIsOpen(!isOpen)}>
        <GoThreeBars className='h-5 w-5' />
      </button>
      <div></div>
      <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`} onClick={() => setIsOpen()}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80">
          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <a href="#" className="mx-auto flex w-[140px]">
              <Logo />
            </a>
            <ul className="mt-8 space-y-3">
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className='absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100' />
                <a href="#" className="w-full font-medium transition-all group-hover:pl-3">Companies</a>
              </li>  
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className='absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100' />
                <a href="#" className="w-full font-medium transition-all group-hover:pl-3">Jobs</a>
              </li>  
            </ul>
            <ul className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-200/10">
              <li><button className='w-full mb-4 rounded-full py-1 px-3 border-solid border-2 border-purple-600  mr-2 hover:bg-purple-400 hover:border-purple-400 hover:text-white ease-out duration-300'>For Employers</button></li>
              <li><button className='w-full mb-4 rounded-full py-1 px-3 bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800 text-white mr-2'>Sign In</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 