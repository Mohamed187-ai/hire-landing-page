import React from 'react'
import { Logo } from './Logo'


const Navbar = () => {
  return (
    <>
      <header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900'>
        <div className='flex grow-0 basis-1/3'>Menu btn</div>
        <div className='flex grow-0 basis-1/3 justify-center'><Logo /></div>
        <div className='flex grow-0 basis-1/3 justify-end'><Theme btn></div>
      </header>
    </>
  )
}

export default Navbar