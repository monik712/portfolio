import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Header */}
      <header className="px-4 py-4 border-b border-gray-100">
        <div className="site-container grid grid-cols-1 md:grid-cols-2 items-start md:items-end justify-between gap-4">
          <div className="flex flex-col">
            <Link to="/" className="text-md font-medium leading-none">
              RATHOD MONIK
            </Link>
            <p className="block text-sm text-gray-400 mt-1"> — Ahmedabad, Gujarat</p>
          </div>
          <div className="md:justify-end flex">
            <nav aria-label="Main navigation" className="flex gap-4 md:gap-5 shrink-0">
              <Link
                to="/"
                className={`transition-colors text-sm md:text-md ${
                  isActive('/') && location.pathname === '/' ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors text-sm md:text-md ${
                  isActive('/about') ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
                }`}
              >
                About
              </Link>
              <Link
                to="/work"
                className={`transition-colors text-sm md:text-md ${
                  isActive('/work') ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
                }`}
              >
                Work
              </Link>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="transition-colors text-sm md:text-md text-gray-400 hover:text-[#111111]"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Sticky Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 py-4 transition-transform duration-300 ease-in-out ${
          scrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="site-container flex-col md:flex-row flex md:items-center gap-2 justify-between">
          <Link to="/" className="text-md font-medium">
            RATHOD MONIK
          </Link>
          <nav aria-label="Main navigation" className="flex gap-4 md:gap-5 shrink-0">
            <Link
              to="/"
              className={`transition-colors text-sm md:text-md ${
                isActive('/') && location.pathname === '/' ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors text-sm md:text-md ${
                isActive('/about') ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
              }`}
            >
              About
            </Link>
            <Link
              to="/work"
              className={`transition-colors text-sm md:text-md ${
                isActive('/work') ? 'text-[#111111]' : 'text-gray-400 hover:text-[#111111]'
              }`}
            >
              Work
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="transition-colors text-sm md:text-md text-gray-400 hover:text-[#111111]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
