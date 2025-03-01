import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState(false);
  const navigateToHome = (e) => {
    window.scrollTo(0, 0);
    
  } 
  return (
    <>
      <nav className=" flex align-center navbar-box">
        <div className=" flex align-center ff-inter" onClick={navigateToHome}>
          <span className="lessthan">&#8249;</span>
          <h1 className="heading">HarisH</h1>
          <span className="lessthan">&#47;&#8250;</span>
        </div>
        <ul className="navbar__options ff-Robot flex">  
          <li className="navbar__option">
          <a href="#Start" className="nav-link">
            Start<span>&#47;&gt;</span></a>
          </li>
          <li className="navbar__option">
          <a href="#Project" className="nav-link">
            Project<span>&#47;&gt;</span>
          </a>
          </li>
          <li className="navbar__option">
          <a href="#About" className="nav-link">
            About<span>&#47;&gt;</span>
            </a>
          </li>
          <li className="navbar__option">
          <a href="#Contact" className="nav-link">
            Contact<span>&#47;&gt;</span>
            </a>
          </li>
        </ul>
        <button
          className={`hamburger-btn ${active ? "active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`background-main ${active ? "active" : ""}`}></div>
      </nav>
      <ul className={`navbar__center ${ active ? "active" : " "} ff-Robot`}>
        <li
          className={`navbar__center-option ${
            active ? "active" : ""
          } flex align-center justify-center `}
          onClick={() => setActive(!active)}
        >
          <a href="#Start" className="navbar__link">
            {" "}
            Start<span className="lessthan">&#47;&gt;</span>{" "}
          </a>
        </li>
        <li
          className={`navbar__center-option  ${
            active ? "active" : ""
          } flex align-center justify-center `}
          onClick={() => setActive(!active)}
        >
          <a href="#Project" className="navbar__link">
            {" "}
            Project<span className="lessthan">&#47;&gt;</span>{" "}
          </a>
        </li>
        <li
          className={`navbar__center-option ${
            active ? "active" : ""
          } flex align-center justify-center `}
          onClick={() => setActive(!active)}
        >
          <a href="#About" className="navbar__link">
            {" "}
            About<span className="lessthan">&#47;&gt;</span>{" "}
          </a>
        </li>
        <li
          className={`navbar__center-option ${
            active ? "active" : ""
          } flex align-center justify-center `}
          onClick={() => setActive(!active)}
        >
          <a href="#Contact" className="navbar__link">
            {" "}
            Contact<span className="lessthan">&#47;&gt;</span>{" "}
          </a>
        </li>
      </ul>
    </>
  );
}
export default NavBar;
