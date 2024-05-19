import { useEffect, useState } from "react";
import mouse from "../assests/icon/mouse.svg";
const Start = () => {
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
  useEffect(() => {
    if (isLoaded) {
      const timers = [
        setInterval(() => setText1(true), 1000),
        setInterval(() => setText2(true), 2000),
        setInterval(() => setText3(true), 3000),
        setInterval(() => setText4(true), 4000),
      ];

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [isLoaded]);
  if(isLoaded===false)
    setTimeout(()=>setIsLoaded(true),1000)
  return (
    <section
      className="flex justify-center Start__section"
      id="Start"
    >
      <div className="row align-self-center w-100 justify-center align-center  ">
        <div className="intro__article col-7">
          <div className="timeline">
            <a href="#Project" className="scroll-box">
              <img src={mouse} alt="mouse" className="mouse-icon" />
              <p className="scoll">SCROLL</p>
            </a>
            <div className="ellipse"></div>
          </div>
          <div className={`block-reveal ${text3 === true ? "block-reveal--active  " : ""}`}>
            <span class="block-reveal__block" style={{background:"white"}}></span>
            <span className="start block-reveal__text">Start<span>&#47;&gt;</span></span>
          </div>
          <br />
          <div className={`block-reveal ${text1 === true ? "block-reveal--active " : ""}`}>
          <span class="block-reveal__block"></span>
            <span className="intro__hi block-reveal__text">Hi, my name is <strong className="color-purple">Harish Kumar</strong></span>
          </div>
          <br/>
          <div className={`block-reveal ${text2 === true ? "block-reveal--active  " : ""}`}>
          <span class="block-reveal__block"></span>
            <span className="intro__friend block-reveal__text">i am your <em className="ff-satcify">friendly</em> neighbourhood front end developer</span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className={`block-reveal ${text4 === true ? "block-reveal--active " : ""}`}>
          <span class="block-reveal__block "style={{background:"white"}}></span>
            <span className="into__letme block-reveal__text"> Let me show You...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Start;
