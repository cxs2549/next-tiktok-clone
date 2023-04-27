'use client'

import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`bg-red-300 h-20 w-20 rounded-full transition-opacity duration-200 ease-in-out fixed bottom-10 right-10 ${isVisible ? 'visible' : 'opacity-0'}`} onClick={handleClick}>
      Back to Top
    </button>
  );
};

export default BackToTopButton;
