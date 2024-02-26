import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";

const Technologies = ({ technologies }) => {
  const iconComponents = {
    react: <FaReact className="tech-icon" />,
    javascript: <IoLogoJavascript className="tech-icon" />,
    firebase: <IoLogoFirebase className="tech-icon" />,
  };

  const filteredTechnologies = Object.keys(iconComponents).filter((tech) =>
    technologies.includes(tech)
  );

  return (
    <div>
      {filteredTechnologies.map((tech, index) => (
        <React.Fragment key={index}>{iconComponents[tech]}</React.Fragment>
      ))}
    </div>
  );
};

export default Technologies;
