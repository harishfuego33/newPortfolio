import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "../comps/box";

gsap.registerPlugin(ScrollTrigger);

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
  const boxRef = useRef([]);
  useGSAP(() => {
    const boxes = gsap.utils.toArray(boxRef.current);
    boxes.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    ScrollTrigger.refresh();
  }, {});
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
        <div className="grid">
          {props.map((props, index) => (
            <Box
              key={index}
              atr={props.class}
              index={props.index}
              title={props.title}
              webp={props.webp}
              ref={(el) => (boxRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
