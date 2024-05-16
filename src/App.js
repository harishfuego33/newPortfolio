import NavBar from "./comps/navbar";
import Start from "./pages/startSection";
import Project from "./pages/projectSection";

import "./index.css";
export default function App() {
  return (
    <main className="MAIN">
      <NavBar />
      <Start />
      <Project/>
      <section className="about__section" id="About"></section>
      <section className="contact__section" id="Contact"></section>
    </main>
  );
}
