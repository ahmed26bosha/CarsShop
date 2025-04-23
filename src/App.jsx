import {React , useState, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Explore from './components/Explore';
import Vehicless from './components/Vehicless';
import Fair from './components/Fair';
import Sale from './components/Sale';
import Choose from './components/Choose';
import Popular from './components/Popular';
import ShopBoxCar from './components/ShopBoxCar';
import CustomerReviews from './components/Customer';
import Blog from './components/Blog';
import Look from './components/Look';
import Footer from './components/Footer';
import Loader from './components/Loader'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 ثواني

    return () => clearTimeout(timer);
  }, []);
  return (
  
    <div className="App">
        {loading ? <Loader/> : null}
     <div className="Header">
  <Navbar />
  <div className="hero-section fade-in">
    <p className="subheading fade-in delay-1">Find cars for sale and for rent near you</p>
    <h1 className="main-heading fade-in delay-2">Find Your Perfect Car</h1>

    <section className="tabs fade-in delay-3">
      <a href="#all" className="active">All</a>
      <a href="#new">New</a>
      <a href="#used">Used</a>
    </section>

    <div className="search-box fade-in delay-4">
      <select><option>Any Makes</option></select>
      <select><option>Any Models</option></select>
      <select><option>Prices: All Prices</option></select>
      <button className="search-btn">🔍 Search Cars</button>
    </div>

    <p className="browse-text fade-in delay-5">Or Browse Featured Model</p>

    <div className="featured-models fade-in delay-6">
      <button>SUV</button>
      <button>Sedan</button>
      <button>Hatchback</button>
      <button>Coupe</button>
      <button>Hybrid</button>
    </div>
  </div>
</div>

      <div className="content"> 
        <Explore />
      </div>
      <Vehicless/>
      <Fair/>
      <Sale/>
      <Choose/>
      <Popular/>
      <ShopBoxCar/>
      <CustomerReviews/>
      <Blog/>
      <Look/>
      <Footer/>
    </div>
  );
}

export default App;
