import React from 'react'
import { BsCloudMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';


const ThemeToggle = ({ setDarkTheme, darkTheme }) => {
  return (
    <>
        <div className='flex items-center justify-center'>
            <button  onClick={() => setDarkTheme(!darkTheme)} className='flex items-center justify-center text-gray-500 dark:text-yellow-300 dark:hover:text-yellow-500 hover:text-gray-700 focus:outline-none focus:shadow-outline'>
                {darkTheme ? <MdLightMode size={20} /> : <BsCloudMoonFill size={20} />}
            </button>
        </div>

    </>
  )
}

export default ThemeToggle