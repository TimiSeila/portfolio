import React from "react";
import { FaChevronDown, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomeSection.css";

const HomeSection = () => {
  const redirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="homesection-container">
      <div className="homesection-socials-container">
        <FaGithub
          className="homesection-socials-icon"
          onClick={() => redirect("https://github.com/TimiSeila")}
        />
        <FaLinkedin
          className="homesection-socials-icon"
          onClick={() =>
            redirect("https://www.linkedin.com/in/timi-seila-aa38bb2a3/")
          }
        />
      </div>
      <div className="homesection-header-container">
        <p className="homesection-header-name">Timi Seila</p>
        <p className="homesection-header-desc">Software developer</p>
      </div>
      <div className="homesection-about-button-container">
        <button className="homesection-about-button">About Me</button>
      </div>
      <div className="homesection-chevron-container">
        <FaChevronDown className="homesection-chevron" />
      </div>
    </div>
  );
};

export default HomeSection;
