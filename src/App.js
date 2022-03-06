import React, { useState } from 'react';
import Navbar  from './components/Navbar.jsx';
import Banner  from './components/Banner.jsx';
import Carousel  from './components/Carousel.jsx';
import Company   from './components/Company.jsx';
import Footer    from './components/Footer.jsx';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-neutral-100 dark:bg-gray-800 text-gray-800 dark:text-white">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Banner />
        <div>
          <Carousel />
          <Company />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
