import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Highlights from './components/Highlights';
import Booking from './components/Booking';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Menu />
      <Highlights />
      <Booking />
      <Location />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
