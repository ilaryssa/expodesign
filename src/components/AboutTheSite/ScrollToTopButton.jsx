import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="scrollToTopButton"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <BsArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
