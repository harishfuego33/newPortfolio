// import Link from "react";
import linkedin from "../assests/icon/icons8-linked-in.svg";
import git from "../assests/icon/icons8-github.svg";
import leetcode from "../assests/icon/leetcode.svg";
import geeksforgeeks from "../assests/icon/icons8-geeksforgeeks.svg";
import hackerrank from "../assests/icon/icons8-hackerrank.svg";

function Contact() {

    return (
        <section className=" flex justify-center contact__section" id="Contact">
            <div className="row w-100 gap-2">
                <div className="intro__article col-7">
                    <div className="timeline alt"><div className="ellipse alt"></div></div>
                    <p className="Poject-tag opa-1">Contact<span>&#47;&gt;</span></p>
                    <div className="links">
                        <h4 className="findmeon">Find me out:</h4>
                        <div className="link-grid">
                            <div className="link-container">
                                <a className="link" href="https://linkedin.com/in/harishkumars33" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linked" className="link-icon"/>
                                    in/harish_33</a>
                            </div>
                            <div className="link-container">
                                <a className="link" href="https://github.com/harishfuego33" target="_blank" rel="noopener noreferrer">
                                <img src={git} alt="linked"className="link-icon" />
                                    github/harish_33</a>
                            </div>
                            <div className="link-container">
                                <a className="link" href="https://www.leetcode.com/harish_33" target="_blank" rel="noopener noreferrer">
                                <img src={leetcode} alt="linked" className="link-icon"/>
                                    leetcode/harish_33</a>
                            </div>
                            <div className="link-container">
                                <a className="link" href="https://auth.geeksforgeeks.org/user/harishfuego33" target="_blank" rel="noopener noreferrer">
                                <img src={geeksforgeeks} alt="linked" className="link-icon"/>
                                    harish_33</a>
                            </div>
                            <div className="link-container">
                                <a className="link" href="https://www.hackerrank.com/harish_33" target="_blank" rel="noopener noreferrer">
                                <img src={hackerrank} alt="linked" className="link-icon"/>
                                    harish_33</a>
                            </div>
                        </div>
                        <a className="resume" href="https://drive.google.com/file/d/1Hbe_8Q_1tGQWj8-8dGxWRW_FGKx06vbB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="resume-btn">
                                <button className="btn-2"></button>
                            </button>
                            <p>RESUME</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;