import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; 
import { motion } from 'framer-motion';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 z-20 right-10 bg-[#154849] text-white p-4 rounded-full shadow-lg hover:bg-[#3d6768] transition"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: -800 }} 
          animate={{ opacity: 1, y: 0 }}   
          exit={{ opacity: 0, y: -100 }}   
          transition={{ duration: 0.5, ease: 'easeInOut' }} 
        >
          <ArrowUp className="h-8 w-8" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTopButton;

