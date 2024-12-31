import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RevealContext from "../src/comps/customeHooks";
import NavBar from "./comps/navbar";
import Start from "./sections/startSection";
import ProjectSection from "./sections/projectSection";
import About from "./sections/aboutSection";
import Contact from "./sections/contactSection";
import Project from "./pages/project";
import "./index.css";

export default function App() {
  return (
    <>
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
