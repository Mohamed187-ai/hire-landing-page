import React, { useState } from 'react';
import Navbar  from './components/Navbar.jsx';
import Banner  from './components/Banner.jsx';
import Featuredjobs  from './components/Featuredjobs.jsx';
import Company   from './components/Company.jsx';
import Footer    from './components/Footer.jsx';
import LatestJobs from './components/LatestJobs.jsx';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-neutral-100 dark:bg-gray-800 text-gray-800 dark:text-white">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Banner />
        <main className='mx-auto mt-16 max-w-screen-lg space-y-20 sm:px-8'>
          <Featuredjobs />
          <LatestJobs />
          <Company />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
