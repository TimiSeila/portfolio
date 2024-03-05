import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaUnity } from "react-icons/fa";

const Technologies = ({ technologies, nameForClass }) => {
  const iconComponents = {
    react: <FaReact className={nameForClass} color="61dbfb" />,
    javascript: <IoLogoJavascript className={nameForClass} color="#f7df1e" />,
    firebase: <IoLogoFirebase className={nameForClass} color="#ffa000" />,
    unity: <FaUnity className={nameForClass} />,
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
