import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RevealContext from "../src/comps/customeHooks";
import NavBar from "./comps/navbar";
import Start from "./sections/startSection";
import Project from "./sections/projectSection";
import About from "./sections/aboutSection";
import Contact from "./sections/contactSection";
import Project0 from "./pages/project-0";
import Project1 from "./pages/project-1";
import Project2 from "./pages/project-2";
import Project3 from "./pages/project-3";
import Project4 from "./pages/project-4";
import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="project-0/" element={<Project0 />} />
          <Route path="project-1/" element={<Project1 />} />
          <Route path="project-2/" element={<Project2 />} />
          <Route path="project-3/" element={<Project3 />} />
          <Route path="project-4/" element={<Project4 />} />
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
      <span class="block-reveal__block-2"></span>
      <NavBar />
      <Start />
      <RevealContext.Provider value={{ reveal, setReveal }}>
        <Project />
      </RevealContext.Provider>
      <About />
      <Contact />
    </main>
  );
};
