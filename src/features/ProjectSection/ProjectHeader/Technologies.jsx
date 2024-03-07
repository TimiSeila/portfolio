import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { FaUnity, FaGitAlt } from "react-icons/fa";

const Technologies = ({ technologies, nameForClass }) => {
  const iconComponents = {
    react: <FaReact className={nameForClass} color="61dbfb" />,
    javascript: <IoLogoJavascript className={nameForClass} color="#f7df1e" />,
    firebase: <IoLogoFirebase className={nameForClass} color="#ffa000" />,
    unity: <FaUnity className={nameForClass} />,
    git: <FaGitAlt className={nameForClass} color="f1502f" />,
    nodejs: (
      <IoLogoNodejs
        className={nameForClass}
        color="#68a063
    "
      />
    ),
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
