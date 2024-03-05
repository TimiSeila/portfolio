import React, { useEffect, useRef, useState } from "react";
import {
  IoTriangleOutline,
  IoSquareOutline,
  IoEllipseOutline,
} from "react-icons/io5";

const Parallax = () => {
  const iconColors = ["#ccde85", "#34c45a", "#ff8f5c"];
  const pContainer = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(pContainer.current.offsetWidth);
    setHeight(pContainer.current.offsetHeight);
    const handleResize = () => {
      setWidth(pContainer.current.offsetWidth);
      setHeight(pContainer.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateRandomNumber = (min, max, excludeZero = false) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return excludeZero
      ? randomNumber == 0
        ? randomNumber + 1
        : randomNumber
      : randomNumber;
  };

  const generateRandomIcon = () => {
    switch (generateRandomNumber(1, 3)) {
      case 1:
        return (
          <IoSquareOutline
            data={generateRandomNumber(-10, 10, true)}
            className="parallax-item"
            size={width / 25}
            color={iconColors[generateRandomNumber(0, 2)]}
          />
        );
      case 2:
        return (
          <IoTriangleOutline
            data={generateRandomNumber(-10, 10, true)}
            className="parallax-item"
            size={width / 25}
            color={iconColors[generateRandomNumber(0, 2)]}
          />
        );
      case 3:
        return (
          <IoEllipseOutline
            data={generateRandomNumber(-10, 10, true)}
            className="parallax-item"
            size={width / 25}
            color={iconColors[generateRandomNumber(0, 2)]}
          />
        );
    }
  };

  const renderImages = () => {
    const imageArray = Array.from(
      {
        length:
          Math.round(height / (width / 25)) * Math.round(width / (width / 25)),
      },
      (_, index) => (
        <React.Fragment key={index}>{generateRandomIcon()}</React.Fragment>
      )
    );

    return imageArray;
  };

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

  return (
    <div className="homesection-parallax" ref={pContainer}>
      {renderImages()}
    </div>
  );
};

export default Parallax;
