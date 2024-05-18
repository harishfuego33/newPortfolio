import NavBar from "./comps/navbar";
import Start from "./pages/startSection";
import Project from "./pages/projectSection";
import About from "./pages/aboutSection";

import "./index.css";
export default function App() {
  return (
      <main className="MAIN">
          <NavBar />
          <Start />
          <Project/>
          <About/>
          <section className="contact__section" id="Contact"></section>
      </main>
  );
}
