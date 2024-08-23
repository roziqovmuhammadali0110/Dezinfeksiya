import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll holatini tekshirish va ko'rinishni boshqarish
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sahifani yuqoriga qaytarish
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg">
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
