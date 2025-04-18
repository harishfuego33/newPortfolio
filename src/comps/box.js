import { useContext, forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RevealContext from "../comps/customHooks";
import Tilt from "react-parallax-tilt";

const Box = forwardRef(({ atr, index, title, webp }, ref) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { reveal, setReveal } = useContext(RevealContext);
  const hold = () => {
    setReveal(!reveal);
    setTimeout(() => {
      navigate("/project/" + index);
    }, 1000);
  };
  const nexProject = (e) => {
    e.stopPropagation();
    hold();
    setActive(!active);
  };

  return (
    <div className={`box ${atr}`} onClick={nexProject} ref={ref}>
      <Tilt className={`box ${atr}`}>
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
});

export default Box;
