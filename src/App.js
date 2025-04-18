import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RevealContext from "./comps/customHooks";
import NavBar from "./comps/navbar";
import Start from "./sections/startSection";
import ProjectSection from "./sections/projectSection";
import About from "./sections/aboutSection";
import Contact from "./sections/contactSection";
import Project from "./pages/project";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";

import "./index.css";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      {windowWidth > 860 ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={2.5}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--blue)",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
          clickables={[
            ".link",
            ".box",
            ".nav-link",
            ".navbar__center-option",
            ".code",
            "a",
            ".resume-btn",
            ".btn-2",
            "#logo-primary",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 17,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      ) : null}
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="project/:index" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const Main = () => {
  const [reveal, setReveal] = useState(false);
  return (
    <main
      className={`portfolio__main block-reveal  ${
        reveal ? "block-reveal--active-1" : ""
      }`}
    >
      <span className="block-reveal__block-2"></span>
      <NavBar />
      <Start />
      <RevealContext.Provider value={{ reveal, setReveal }}>
        <ProjectSection />
      </RevealContext.Provider>
      <About />
      <Contact />
    </main>
  );
};
