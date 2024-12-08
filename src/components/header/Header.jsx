import React from "react";
import AnnouncementBar from "./AnouncementBar";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const Header = ({ children }) => {
  return (
    <header className="text-colors-text-3 ">
      <AnnouncementBar />
      <NavBar />
      {children}
    </header>
  );
};

export default Header;
