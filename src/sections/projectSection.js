import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RevealContext from "../comps/customeHooks";
import Tilt from 'react-parallax-tilt';

const Project = () => {
  const props = [
    {
      index: 0,
      class: `project-0`,
      title: "SUSPICIOUS URL DETECTOR",
      webp: "./assets/project-0.webp",
      to: "/project-0",
    },
    {
      index: 1,
      class: `project-1`,
      title: " EXPLORE THE SPACE",
      webp: "./assets/project-1.webp",
    },
    {
      index: 2,
      class: `project-2`,
      title: "NATOUR FOR TOUR",
      webp: "./assets/project-2.webp",
    },
    {
      index: 3,
      class: `project-3`,
      title: " AI BASED CLOUD BLOGGING",
      webp: "./assets/project-3.webp",
    },
    {
      index: 4,
      class: `project-4`,
      title: "VELS FARMS",
      webp: "./assets/project-4.webp",
    },
  ];

  return <Section props={props} />;
};
const Section = ({ props }) => {
  return (
    <section className={`flex justify-center project__section `} id="Project">
      <div className="row w-100 gap-2">
        <div className="intro__article col-7">
          <div className="timeline alt">
            <div className="ellipse alt"></div>
          </div>
          <p className="Project-tag opa-1">
            Project<span>&#47;&gt;</span>
          </p>
          <h4 className="project">Selected web projects...</h4>
        </div>
        <div className="grid ">
          {props.map((props) => (
            <Box
              atr={props.class}
              key={props.index}
              index={props.index}
              title={props.title}
              webp={props.webp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const Box = ({
  atr,
  index,
  title,
  webp
}) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { reveal, setReveal } = useContext(RevealContext);
  function hold() {
    setReveal(!reveal);
    setTimeout(() => {
      navigate("/project/" + index);
    }, 1000);
  }
  const nexProject = (e)=>{
    e.stopPropagation();
    hold();
    setActive(!active);
  }
  return (
    <div className={`box ${atr}`}
    onClick={nexProject}
    >
      <Tilt className={`box ${atr}`} >
        <Tilt
          tiltEnable={false}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.3}
          glarePosition="all" 
          className={`img-box block-reveal ${
            active === true ? "block-reveal--active" : ""
          }`}
        >
          <span className="block-reveal__block-1"></span>
          <img
            className="img"
            src={webp}
            alt="project-img"
            type="image/webp"
            style={{ userSelect: "none" }}
          />
        </Tilt>
        <div className="project-info">
          <div
            className={`block-reveal ${active ? "block-reveal--active  " : ""}`}
          >
            <span className="block-reveal__block-1"></span>
            <h1 className="project-title" style={{ userSelect: "none" }}>
              {title}
            </h1>
          </div>
          <div className="project-line"></div>
          <div
            className={`block-reveal ${active ? "block-reveal--active  " : ""}`}
          >
            <span
              className="block-reveal__block-1"
              style={{ background: "#8036e7" }}
            ></span>
            <h1 className="project-00" style={{ userSelect: "none" }}>
              0{index}
            </h1>
            <div className="project-arrow " style={{ userSelect: "none" }}>
              &rarr;
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default Project;
