// import Link from "react";
import mouse from "../assests/icon/mouse.svg";
export default function Start() {
  return (
    <section className="Start__section" id="#Start">
      <article className="intro__article">
        <a href="#Contact" className="scroll-box">
          <img src={mouse} alt="mouse" className="mouse-icon" />
          <p className="scoll">SCROLL</p>
        </a>
        <div className="timeline">
          <div className="ellipse"></div>
        </div>
        <div className="row">
          <p className="start">
            Start<span>&#47;&gt;</span>
          </p>
          <h1 className="intro__hi">
            Hi, my name is{" "}
            <strong className="color-purple">Harish Kumar</strong>
          </h1>
          <h3 className="intro__friend">
            i am your <em className="satcify">friendly</em> neighbourhood front
            end developer
          </h3>
          <p className="into__letme"> Let me show You...</p>
        </div>
      </article>
    </section>
  );
}
