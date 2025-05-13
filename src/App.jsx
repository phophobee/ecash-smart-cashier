import React, { useContext, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import MasterBarang from './pages/MasterBarang';
import MasterCustomer from './pages/MasterCustomer';
import Pembelian from './pages/Pembelian';

import { UserContext } from './context/UserContext'; // <- tambahkan ini

function App() {
  const location = useLocation();
  const { scrollTarget, setScrollTarget } = useContext(UserContext); // <- context digunakan

  // Refs ke masing-masing bagian
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  // Scroll otomatis saat scrollTarget berubah
  useEffect(() => {
    if (!scrollTarget) return;

    const refs = {
      promosi: heroRef,
      favourite: sliderRef,
      testimoni: testimonialRef,
      'contact us': footerRef,
    };

    const sectionRef = refs[scrollTarget.toLowerCase()];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollTarget(null); // reset agar tidak scroll ulang
    }
  }, [scrollTarget, setScrollTarget]);

  const showNavbarOnlyOnHome = location.pathname === '/';

  return (
    <>
      {showNavbarOnlyOnHome && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={heroRef}><Hero /></div>
              <div ref={sliderRef}><Slider /></div>
              <div ref={testimonialRef}><Testimonial /></div>
              <div ref={footerRef}><Footer /></div>
            </>
          }
        />
        <Route path="/master-barang" element={<MasterBarang />} />
        <Route path="/master-customer" element={<MasterCustomer />} />
        <Route path="/pembelian" element={<Pembelian />} />
      </Routes>
    </>
  );
}

export default App;
