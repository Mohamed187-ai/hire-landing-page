import React from 'react'
import { FreeMode, Mousewheel, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const latestJobsCategories = [
    "IT - Software Development",
    "Customer Service",
    "Human Resources",
    "Other",
    "Accounting & Finance",
    "Marketing - Digital",
    "Creative Writing",
    "Sales (Corporate, Real Estate, Telesales, etc.)",
    "Project Management",
];
const latestJobsItems = [
    {
        companyName: "Rempel and Sons",
        jobTitle: "Computer Systems Analyst I",
        image: "./assets/img/08.jpg",
    },
    {
        companyName: "Dietrich, Beahan and Connelly",
        jobTitle: "VP Quality Control",
        image: "./assets/img/09.jpg",
    },
    {
        companyName: "Gutmann LLC",
        jobTitle: "Quality Engineer",
        image: "./assets/img/10.jpg",
    },
    {
        companyName: "Kerluke Group",
        jobTitle: "Actuary",
        image: "./assets/img/11.jpg",
    },
    {
        companyName: "Hahn LLC",
        jobTitle: "Environmental Specialist",
        image: "./assets/img/12.jpg",
    },
    {
        companyName: "Ziemann, Nicolas and Grady",
        jobTitle: "Web Designer IV",
        image: "./assets/img/04.jpg",
    },
    {
        companyName: "Bernhard and Sons",
        jobTitle: "Teacher",
        image: "./assets/img/05.jpg",
    },
];

const LatestJobs = () => {
  return (
    <>
        <section id='latest-jobs'>
        <div className="flex items-center justify-between">
          <h2 className='text-2xl font-bold'> latest Jobs</h2>
          <button className='font-bold py-1 px-2 border-2 border-purple-400 rounded-full hover:bg-purple-400 '>View All</button>
        </div>
        <div id='latest-jobs__categories' className="">
          <Swiper
            modules={[FreeMode, Scrollbar, Mousewheel]}
            spaceBetween={8}
            freeMode={true} 
            mousewheel={true}
            slidesPerView='auto'
            scrollbar={{draggable: true, hide: true}}
            direction='horizontal'
            id='latest-jobs__categories__swiper'
            className='!py-4'
          >
            <SwiperSlide className='!w-auto'>
              <span className='border-2 border-purple-400 bg-purple-400 rounded-full py-0 px-3 font-bold '>All</span>
            </SwiperSlide>
            {latestJobsCategories.map((category, index) => {
              return (
                <SwiperSlide key={index} className='!w-auto'>
                  <span className='border-2 border-purple-400 rounded-full py-0 px-3 font-bold '>{category}</span>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div id="latest-jobs__items" className='-m-4'>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className='!p-4'
            breakpoints={{
              475: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {latestJobsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <a href="#" className='group overflow-hidden rounded-2xl block border border-slate-200 bg-white shadow-md hover:-translate-y-1 hover:drop-shadow-lg dark:border-slate-900 dark:bg-gray-900'>
                  <div className="relative overflow-hidden block">
                    <img src={item.image} alt={item.companyName} className='object-cover transition-all duration-500 group-hover:scale-[120%] group-hover:rotate-6' />
                  </div>
                  <div className='flex flex-col border-t p-4 dark:border-slate-600'>
                    <h5 className='block truncate text-xl font-semibold capitalize'>{item.jobTitle}</h5>
                    <span className='block truncate to-slate-500 dark:text-slate-400'>{item.companyName}</span>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default LatestJobs