import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null || !images || !images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className="fixed inset-0 z-[999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="1" x2="15" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="15" y1="1" x2="1" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </motion.button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous"
            className="absolute left-4 md:left-6 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polyline points="10,2 4,8 10,14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Image Display */}
        <div
          className="relative z-10 max-h-[85vh] max-w-[90vw] md:max-w-4xl p-2 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            src={typeof currentImage === 'string' ? currentImage : currentImage.src}
            alt={typeof currentImage === 'string' ? 'Exploration Preview' : (currentImage.alt || 'Exploration')}
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next"
            className="absolute right-4 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polyline points="6,2 12,8 6,14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs tracking-wider">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
