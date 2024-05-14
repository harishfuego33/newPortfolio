import { useEffect, useState } from "react";
import mouse from "../assests/icon/mouse.svg";
export default function Start() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  if (isLoaded) {
    setInterval(() => setText1(true), 1000);
    setInterval(() => setText2(true), 2000);
    setInterval(() => setText3(true), 3000);
    setInterval(() => setText4(true), 4000);
  }
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
          <div
            className={`text-body-1 ${text3 === true ? "reveal opa-1" : ""}`}
          >
            <span className="start">
              Start<span>&#47;&gt;</span>
            </span>
          </div>
          <br />
          <div
            className={`text-body-2 ${text1 === true ? "reveal opa-1" : ""}`}
          >
            <span className="intro__hi">
              Hi, my name is
              <strong className="color-purple">Harish Kumar</strong>
            </span>
          </div>
          <br />
          <div
            className={`text-body-3 ${text2 === true ? "reveal opa-1" : ""}`}
          >
            <span className="intro__friend">
              i am your <em className="ff-satcify">friendly</em> neighbourhood
              front end developer
            </span>
          </div>
          <br />
          <div
            className={`text-body-4 ${text4 === true ? "reveal opa-1" : ""}`}
          >
            <span className="into__letme"> Let me show You...</span>
          </div>
        </article>
      </div>
    </section>
  );
}
