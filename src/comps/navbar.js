function NavBar() {
  return (
    <nav className="navbar-box">
      <div className="name-logo">
        <span> &lt;</span>
        <h1 className="heading">HarisH</h1>
        <span>&#47;&gt;</span>
      </div>
      <ul className="navbar__options">
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
    </nav>
  );
}
export default NavBar;
