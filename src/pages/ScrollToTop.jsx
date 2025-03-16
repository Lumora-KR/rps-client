import React, { useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [scrollVisible, setScrollVisible] = useState(true);
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function scrollViewHandler() {
    if (window.scrollY >= 150) {
      setScrollVisible(false);
    } else {
      setScrollVisible(true);
    }
  }
  window.addEventListener("scroll", scrollViewHandler);
  return (
    !scrollVisible && (
      <div className="scroll-top-circle" onClick={scrollToTop}>
        <FaArrowUp className="scroll-top-icon" />
      </div>
    )
  );
}
