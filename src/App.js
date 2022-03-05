import Navbar  from './components/Navbar.jsx';
import Banner  from './components/Banner.jsx';
import Carousel  from './components/Carousel.jsx';
import Company   from './components/Company.jsx';
import Footer    from './components/Footer.jsx';



function App() {
  return (
    <div className="bg-neutral-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <Navbar />
      <Banner />
      <div>
        <Carousel />
        <Company />
      </div>
      <Footer />
    </div>
  );
}

export default App;
