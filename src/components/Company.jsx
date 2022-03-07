import React from 'react'

const topCompaniesItems = [
  {
    companyName: "Rempel and Sons",
    category: "Media & Marketing",
    image: "./assets/img/08.jpg",
    logo: "./assets/img/logo.jpg",
  },
  {
    companyName: "Dietrich, Beahan and Connelly",
    category: "Tourism",
    image: "./assets/img/09.jpg",
    logo: "./assets/img/logo.jpg",
  },
  {
    companyName: "Gutmann LLC",
    category: "Oil & Gas",
    image: "./assets/img/10.jpg",
    logo: "./assets/img/logo.jpg",
  },
  {
    companyName: "Kerluke Group",
    category: "Accounting",
    image: "./assets/img/11.jpg",
    logo: "./assets/img/logo.jpg",
  },
  {
    companyName: "Hahn LLC",
    category: "Food & Beverage",
    image: "./assets/img/12.jpg",
    logo: "./assets/img/logo.jpg",
  },
  {
    companyName: "Ziemann, Nicolas and Grady",
    category: "Construction",
    image: "./assets/img/04.jpg",
    logo: "./assets/img/logo.jpg",
  },
];

const Company = () => {
  return (
    <section id='top-companies'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl font-bold'>Top Companies</h2>
        <button className='font-bold py-1 px-2 border-2 border-purple-400 rounded-full hover:bg-purple-400 '>View All</button>
      </div>
      <div id='top-companies__items' className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {topCompaniesItems.map((item, index) => (
          <a href="#" className='group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700 hover:-translate-y-1'>
            <div className='overflow-hidden relative block'>
              <img src={item.image} alt={item.companyName} />
            </div>
            <div className='relative flex flex-col border-t p-4 dark:border-slate-400'>
              <span className='absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg border shadow-sm dark:border-slate-600'>
                <div className='relative block overflow-hidden bg-slate-200 w-full h-full'>
                  <img src={item.logo} alt={item.companyName} className=' w-full h-full object-cover' />
                </div>
              </span>
              <h5 className="block truncate text-xl font-semibold capitalize">{item.companyName}</h5>
              <span className="block truncate text-slate-500 dark:text-slate-400">{item.category}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Company