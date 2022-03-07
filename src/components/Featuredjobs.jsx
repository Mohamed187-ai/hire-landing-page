import React from 'react'
import { FreeMode, Mousewheel, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const featuredJobsCategories = [
  "Sales (Corporate, Real Estate, Telesales, etc.)",
  "Customer Service",
  "Other",
  "Creative Writing",
  "Project Management",
  "Marketing - Digital",
  "IT - Software Development",
  "Human Resources",
  "Accounting & Finance",
];
const featuredJobsItems = [
  {
    companyName: "Kerluke Group",
    jobTitle: "Actuary",
    image: "./assets/img/01.jpg",
  },
  {
    companyName: "Witting, Bauch and Cartwright",
    jobTitle: "Accounting Assistant II",
    image: "./assets/img/02.jpg",
  },
  {
    companyName: "Hahn LLC",
    jobTitle: "Environmental Specialist",
    image: "./assets/img/03.jpg",
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
  {
    companyName: "Kassulke, Reynolds and Armstrong",
    jobTitle: "Structural Analysis Engineer",
    image: "./assets/img/06.jpg",
  },
  {
    companyName: "Kihn-Jast",
    jobTitle: "Technical Writer",
    image: "./assets/img/07.jpg",
  },
];
const Featuredjobs = () => {
  return (
    <>
      <section id='featured-jobs'>
        <div className="flex items-center justify-between">
          <h2 className='text-2xl font-bold'> Featured Jobs</h2>
          <button className='font-bold py-1 px-2 border-2 border-purple-400 rounded-full hover:bg-purple-400 '>View All</button>
        </div>
        <div id='featured-jobs__categories' className="">
          <Swiper
            modules={[FreeMode, Scrollbar, Mousewheel]}
            spaceBetween={8}
            freeMode={true} 
            mousewheel={true}
            slidesPerView='auto'
            scrollbar={{draggable: true, hide: true}}
            direction='horizontal'
            id='featured-jobs__categories__swiper'
            className='!py-4'
          >
            <SwiperSlide className='!w-auto'>
              <span className='border-2 border-purple-400 bg-purple-400 rounded-full py-0 px-3 font-bold '>All</span>
            </SwiperSlide>
            {featuredJobsCategories.map((category, index) => {
              return (
                <SwiperSlide key={index} className='!w-auto'>
                  <span className='border-2 border-purple-400 rounded-full py-0 px-3 font-bold '>{category}</span>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div id="featured-jobs__items" className='-m-4'>
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
            {featuredJobsItems.map((item, index) => (
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

export default Featuredjobs