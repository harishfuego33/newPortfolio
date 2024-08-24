// import Link from "react";

function Contact() {
  return (
    <section className=" flex justify-center contact__section" id="Contact">
      <div className="row w-100 gap-2">
        <div className="intro__article col-7">
          <div className="timeline alt">
            <div className="ellipse alt"></div>
          </div>
          <p className="Poject-tag opa-1">
            Contact<span>&#47;&gt;</span>
          </p>
          <div className="links">
            <h4 className="findmeon">Find me out:</h4>
            <div className="link-grid">
              <div className="link-container">
                <a
                  className="link"
                  href="https://linkedin.com/in/harishkumars33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/icon/icons8-linked-in.svg"
                    alt="linked"
                    className="link-icon"
                  />
                  in/harish_33
                </a>
              </div>
              <div className="link-container">
                <a
                  className="link"
                  href="https://github.com/harishfuego33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/icon/icons8-github.svg"
                    alt="linked"
                    className="link-icon"
                  />
                  github/harish_33
                </a>
              </div>
              <div className="link-container">
                <a
                  className="link"
                  href="https://www.leetcode.com/harish_33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../assets/icon/leetcode.svg"
                    alt="linked"
                    className="link-icon"
                  />
                  leetcode/harish_33
                </a>
              </div>
              <div className="link-container">
                <a
                  className="link"
                  href="https://auth.geeksforgeeks.org/user/harishfuego33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../assets/icon/icons8-geeksforgeeks.svg"
                    alt="linked"
                    className="link-icon"
                  />
                  geeksforgeeks/harish_33
                </a>
              </div>
              <div className="link-container">
                <a
                  className="link"
                  href="https://www.hackerrank.com/harish_33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../assets/icon/icons8-hackerrank.svg"
                    alt="linked"
                    className="link-icon"
                  />
                  hackerrank/harish_33
                </a>
              </div>
            </div>
            <a
              className="resume"
              href="https://drive.google.com/file/d/1j_-Pb-0d7SdT4KryYLb6B7B_T2mChve2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resume-btn">
                RESUME
                <button className="btn-2"></button>
              </div>
            </a>
          </div>
          <p className="copyrigth">
            &copy; made with 💜 by{" "}
            <span className="copy-lessthan"> &#8249;</span>HarisH
            <span className="copy-lessthan">&#47;&#8250;</span> copyright 2024
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;
