// import Link from "react";
import mouse from "../assests/icon/mouse.svg";
export default function Start() {
  return (
    <section
      className="flex justify-center align-center Start__section"
      id="#Start"
    >
      <div className="row flex justify-center align-center col-7 ">
        <article className="intro__article ">
          <div className="timeline">
            <a href="#Project" className="scroll-box">
              <img src={mouse} alt="mouse" className="mouse-icon" />
              <p className="scoll">SCROLL</p>
            </a>
            <div className="ellipse"></div>
          </div>
          <p className="start">
            Start<span>&#47;&gt;</span>
          </p>
          <h1 className="intro__hi">
            Hi, my name is{" "}
            <strong className="color-purple">Harish Kumar</strong>
          </h1>
          <h3 className="intro__friend">
            i am your <em className="ff-satcify">friendly</em> neighbourhood
            front end developer
          </h3>
          <p className="into__letme"> Let me show You...</p>
        </article>
      </div>
    </section>
  );
}
