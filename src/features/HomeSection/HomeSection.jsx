import React, { useEffect } from "react";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoTriangleOutline, IoSquareOutline } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";
import "./HomeSection.css";

const HomeSection = () => {
  const redirect = (url) => {
    window.open(url, "_blank");
  };

  function generateRandomNumber() {
    const randomNumber = Math.random() * 21 - 10;

    const wholeNumber = Math.round(randomNumber);

    return wholeNumber == 0 ? 1 : wholeNumber;
  }

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".parallax-item").forEach((item) => {
        let moving_value = item.getAttribute("data");
        let x = (e.clientX * moving_value) / 100;
        let y = (e.clientY * moving_value) / 100;

        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  const renderImages = () => {
    const imageArray = Array.from({ length: 28 }, (_, index) => (
      <React.Fragment key={index}>
        <IoTriangleOutline
          data={generateRandomNumber()}
          className="parallax-item"
          size={60}
          color="#000"
        />
        <IoSquareOutline
          data={generateRandomNumber()}
          className="parallax-item"
          size={60}
          color="#ff8f5c"
        />
        <MdOutlineCircle
          data={generateRandomNumber()}
          className="parallax-item"
          size={60}
          color="#34c45a"
        />
      </React.Fragment>
    ));

    return imageArray;
  };

  return (
    <>
      <div className="homesection-parallax">{renderImages()}</div>
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
    </>
  );
};

export default HomeSection;
