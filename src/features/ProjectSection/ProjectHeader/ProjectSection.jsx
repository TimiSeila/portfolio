import React from "react";
import "./ProjectSection.css";
import Technologies from "./Technologies";

const ProjectSection = ({ projectInfo }) => {
  const redirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="project-container">
        <h1 className="project-number">{projectInfo.number}</h1>
        <div className="project-content-container">
          <div className="project-media-container">
            {projectInfo.img ? (
              <img src={projectInfo.img} alt="project-gif" />
            ) : projectInfo.video ? (
              <video autoPlay muted loop>
                <source src={projectInfo.video} type="video/mp4" />
              </video>
            ) : null}
          </div>
          <div className="project-content-divider"></div>
          <div className="project-info-container">
            <h1>{projectInfo.header}</h1>
            <div className="project-desc-container">
              <h2>{projectInfo.type}</h2>
              <p>{projectInfo.desc}</p>
            </div>
            <div>
              <Technologies
                technologies={projectInfo.technologies}
                nameForClass="tech-icon"
              />
            </div>
          </div>
        </div>
        {projectInfo.demo ? (
          <button
            className="demo-btn"
            onClick={() => redirect(projectInfo.demo)}
          >
            Try Demo!
          </button>
        ) : null}
        <p className="source-link" onClick={() => redirect(projectInfo.github)}>
          See source code here!
        </p>
      </div>
    </>
  );
};

export default ProjectSection;
