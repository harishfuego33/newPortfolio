import { useEffect, useState } from "react";
import mouse from "../assests/icon/mouse.svg";
export default function Start() {
  const [isLoaded, setIsLoaded] = useState(false);
const [textVisibility, setTextVisibility] = useState([false, false, false, false]); // Array for all text visibility

useEffect(() => {
  const handleLoad = () => {
    setIsLoaded(true);
  };
  window.addEventListener("load", handleLoad);
  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);

useEffect(() => {
  if (isLoaded) {
    let timeoutIds = []; // Array to store timeout IDs
    for (let i = 0; i < 4; i++) {
      const delay = (i + 1) * 1000; // Delays from 1 to 4 seconds
      timeoutIds.push(setTimeout(() => setTextVisibility(prev => {
        const updatedVisibility = [...prev];
        updatedVisibility[i] = true;
        return updatedVisibility;
      }), delay));
    }
    return () => {
      timeoutIds.forEach(clearTimeout); // Clear all timeouts on cleanup
    };
  }
}, [isLoaded]);

  
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
          <div className={`block-reveal ${textVisibility[2] === true ? "block-reveal--active  " : ""}`}>
            <span class="block-reveal__block" style={{background:"white"}}></span>
            <span className="start block-reveal__text">Start<span>&#47;&gt;</span></span></div>
          <br />
          <div className={`block-reveal ${textVisibility[0] === true ? "block-reveal--active " : ""}`}>
          <span class="block-reveal__block"></span>
            <span className="intro__hi block-reveal__text">Hi, my name is<strong className="color-purple">Harish Kumar</strong></span>
          </div>
          <br/>
          <div className={`block-reveal ${textVisibility[1] === true ? "block-reveal--active  " : ""}`}>
          <span class="block-reveal__block"></span>
            <span className="intro__friend block-reveal__text">i am your <em className="ff-satcify">friendly</em> neighbourhood front end developer</span>
          </div>
          <br />
          <div className={`block-reveal ${textVisibility[3] === true ? "block-reveal--active " : ""}`}>
          <span class="block-reveal__block "style={{background:"white"}}></span>
            <span className="into__letme block-reveal__text"> Let me show You...</span>
          </div>
        </article>
      </div>
    </section>
  );
}
