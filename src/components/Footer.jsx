import React from 'react'
import { FaFacebookSquare, FaYoutube, FaInstagramSquare, FaLinkedin, FaTiktok } from 'react-icons/fa'

const footerNav = {
  Company: [
    {
      title: "About Us",
      href: "/#",
    },
    { title: "Contact Us", href: "/#" },
    { title: "Newsroom", href: "/#" },
    { title: "FAQ", href: "/#" },
  ],
  "Job Seeker": [
    {
      title: "Jobs by Specialisation",
      href: "/#",
    },
    { title: "Jobs by Location", href: "/#" },
    { title: "Jobs by Type", href: "/#" },
    { title: "Jobs by Experience Level", href: "/#" },
    { title: "Companies", href: "/#" },
    { title: "Advice", href: "/#" },
  ],
  Employers: [
    {
      title: "Start Hiring Today",
      href: "/#",
    },
    { title: "Headhunting Services", href: "/#" },
  ],
};
const SocialLinks = [
  {
    title: "Instagram",
    link: "https://instagram.com/",
    Icon: <FaInstagramSquare />,
  },
  {
    title: "Facebook",
    link: "https://facebook.com/",
    Icon: <FaFacebookSquare />,
  },
  {
    title: "Tiktok",
    link: "https://tiktok.com/",
    Icon: <FaTiktok />,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/",
    Icon: <FaLinkedin />,
  },
  {
    title: "Youtube",
    link: "https://youtube.com/",
    Icon: <FaYoutube />,
  },
];


const Footer = () => {
  return (
    <footer className='mt-20 bg-white dark:bg-slate-900'>
      <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 lg:!grid-cols-6 md:!grid-cols-3 md:gap-8 xs:grid-cols-2">
          <div className="mb-4 flex flex-col sm:col-span-2">
            <span className="text-xl font-bold capitalize">Hire Me</span>
            <p className="mt-4 max-w-screen-xs text-sm">
              We are on an unwavering mission to be Asia’s most loved job search
              platform, helping people discover any job with any employer in the
              market.
            </p>
            <ul id="social-media-links" className="mt-4 flex items-center space-x-4">
              {SocialLinks.map((item) => (
                <li key={item.title}>
                  <a href={item.link} className="transition-all duration-150 hover:text-purple-700 ">{item.Icon}</a>
                </li>
              ))}
            </ul>
          </div>
          {Object.entries(footerNav).map(([title, items]) => {
            return(
              <div key={title}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <a href="#" className='transition-all duration-150 hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white'>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <div className="flex flex-col space-y-2">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Get Our App</h2>
            <a href="#">
              <img src="./assets/img/app_store_download_button.svg" alt="download app" className='h-12' />
            </a>
            <a href="#">
              <img src="./assets/img/google_play_download_button.svg" alt="download app" className='h-12' />
            </a>
            <a href="#">
              <img src="./assets/img/app_gallery_download_button.svg" alt="download app" className='h-12' />
            </a>
          </div>
        </div>
        <div id='footer-copyright' className="mt-2 border-t border-slate-200 py-4 dark:border-slate-600">
            <p className="text-center text-sm dark:text-gray-300">
              © 2022 Hire Me. All rights reserved, Mo.Hassan.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer