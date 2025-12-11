import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

export default function RootLayout() {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.scrollTo(0, { duration: 0, disableLerp: true });

    // Cleanup on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [pathname]);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}