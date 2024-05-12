import NavBar from "./comps/navbar";
import Start from "./pages/Startsection";
// import Link from "react";
import "./index.css";
export default function App() {
  return (
    <main className="MAIN">
      <NavBar />
      <Start />
      <section className="project__section" id="Project"></section>
      <section className="about__section" id="About"></section>
      <section className="contact__section" id="Contact"></section>
    </main>
  );
}
