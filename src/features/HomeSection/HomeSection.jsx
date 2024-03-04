import React, { useEffect, useState } from "react";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import "./HomeSection.css";
import Modal from "../AboutSection/AboutModal";
import Parallax from "../Parallax/Parallax";

const HomeSection = () => {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const openModal = () => {
    setAboutModalOpen(true);
  };

  const closeModal = () => {
    setAboutModalOpen(false);
  };

  const redirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Parallax />
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
          <button className="homesection-about-button" onClick={openModal}>
            About Me
          </button>
        </div>
        <div className="homesection-chevron-container">
          <FaChevronDown className="homesection-chevron" />
        </div>
      </div>
      <Modal isOpen={aboutModalOpen} onClose={closeModal} />
    </>
  );
};

export default HomeSection;
