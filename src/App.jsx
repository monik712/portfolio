import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      <ScrollToTop />
      {/* Skip to content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-[#111111] focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
