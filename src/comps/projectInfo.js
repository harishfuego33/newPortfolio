// import { useState } from "react";
import { NavLink } from "react-router-dom";
const ProjectInfo = ({ projectInfo }) => {
  return (
    <section className="project__info">
      <nav className="flex align-center image__gallery-navbar">
        <NavLink to="/" className="project__nav-link">
          &#8592;
          <span className="toolkit ff-Robot">Ticket to home</span>
        </NavLink>
        <div className="nextprev">
          <NavLink
            className={`nextprev-btn ${
              projectInfo.prev === null ? " hidden " : ""
            }`}
            to={projectInfo.prev}
          >
            &#8592;
            <span className="toolkit toolkit-prev ff-Robot">Previous</span>
          </NavLink>
          <span
            className={`lessthan ${
              projectInfo.prev === null || projectInfo.next === null
                ? " hidden "
                : ""
            }`}
          >
            &#47;
          </span>
          <NavLink
            className={`nextprev-btn "${
              projectInfo.next === null ? " hidden " : ""
            }`}
            to={projectInfo.next}
          >
            &#8594;
            <span className="toolkit toolkit-next ff-Robot">Next</span>
          </NavLink>
        </div>
      </nav>
      <article className="flex flex-col justify-space-between h-90">
        <div>
          <div className="techStacks">
            <p className="techs ff-Robot ">{projectInfo.techs}</p>
          </div>
          <h1 className="project-title ff-size-4rem ff-Robot">
            {projectInfo.title}
          </h1>
          <p className="project-description ff-Robot">
            {projectInfo.description}
          </p>
          <a
            className="resume"
            href={projectInfo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resume-btn">
              VIST
              <button className="btn-2"></button>
            </div>
          </a>
        </div>
        <div className="project-num">
          <div className="project-info-line w-80"></div>
          <span className="project-count ff-Robot">{projectInfo.count}</span>
        </div>
      </article>
    </section>
  );
};
export default ProjectInfo;
