import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <video autoplay loop muted playsinline id="background-video">
        <source src="your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video> */}
      <div className="navbar-logo">
        <img src="/assets/logo/logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-button">
        <button>Make your quotation</button>
      </div>
    </div>
  );
};

export default Navbar;
