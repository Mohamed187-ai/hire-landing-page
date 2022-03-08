import React, { useState, useEffect } from 'react'
import { GrFormClose } from 'react-icons/gr'

const Banner = () => {
  return (
    <>
      <div className="relative h-[540px] w-full bg-red-500/20 md:h-[460px] lg:h-[640px] sm:h-[65vh]">
        <img src='./assets/img/corporate.jpg' alt="Hero" className='w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="mx-auto max-w-screen-lg">
            <div className="m-6 min-h-[60px]"><HeroInnerBanner /></div>  
          </div>
          <div className="mx-4 mt-16 text-center flex flex-col items-center">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wide'>discover your future</h1>  
            <span className='text-xl sm:text-2xl text-white'>find your next job</span>
            <div className="mt-8"><SearchFrom /></div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  )
}

export default Banner;

const HeroInnerBanner = () => {
  const [show, setShow] = useState(true);
  return(
    <div className={`${show ? 'relative bg-gradient-to-r from-purple-500 to-indigo-800 text-white py-3 px-8 shadow-lg md:rounded-full md:text-center' : 'hidden'}`}>
      <p>Welcome to <span className='font-bold'>HIRE ME</span> an easier and faster job discovery platform </p>  
      <span className='absolute top-3 right-2 cursor-pointer' onClick={() => setShow()}>
        <GrFormClose className='text-2xl bg-white rounded-full'/>
      </span>
    </div>
  )
}

const items = ["graphic designer", "software developer", "architecture"];
const SearchFrom = () => {
  const [query, setQuery] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if(!isDirty) {
        let value = items[i >= items.length ? (i = 0) : i];
        setQuery(value);
      }
      i++;
    }, 3000);
  }, [isDirty]);
  return(
    <form className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <input 
          type='text' 
          placeholder='Search for a job '
          className='md:w-96 sm:w-full py-2 px-4 font-bold bg-neutral-300 rounded-full text-sm focus:outline-none focus:shadow-outline'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={() => {if(!isDirty) {setIsDirty(true); setQuery("")}}}
        />
        <button type='submit' className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-4 rounded-full duration-500 ease-in-out'>🔎 Search</button>
      </div>
      <div className='relative flex flex-col items-center mt-4'>
        <span className='text-sm text-white before:absolute before:h-0.5 before:w-14 before:bg-gray-200 before:-left-4 before:top-[10px] after:absolute after:h-0.5 after:w-14 after:bg-gray-200 after:-right-4 after:top-[10px] '>or</span>
        <button type='submit' className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4 duration-500 ease-in-out'>Browse jobs</button>
      </div>
    </form>
  )
}

const HeroBottomCard = () => {
  return(
    <div className="bg-neutral-900 p-4">
      <span className='block text-center text-lg text-white'>
        No time to look for jobs? Drop your resume with <span className='bg-gradient-to-t from-fuchsia-700 via-purple-500 to-indigo-500 bg-clip-text align-middle font-bold text-transparent'>HIRE ME</span> headhunters and get hired
      </span>
    </div>
  )
}