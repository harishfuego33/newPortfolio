import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <nav className=" flex align-center navbar-box">
      <div className=" flex align-center ff-inter">
        <span className="lessthan">&lt;</span>
        <h1 className="heading">HarisH</h1>
        <span className="lessthan">&#47;&gt;</span>
      </div>
      <ul className="navbar__options flex">
        <li className="navbar__option">
          Start<span>&#47;&gt;</span>
        </li>
        <li className="navbar__option">
          Project<span>&#47;&gt;</span>
        </li>
        <li className="navbar__option">
          About<span>&#47;&gt;</span>
        </li>
        <li className="navbar__option">
          Contact<span>&#47;&gt;</span>
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
  );
}
export default NavBar;
