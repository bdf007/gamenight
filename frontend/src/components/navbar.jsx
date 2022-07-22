import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import "@components/componentsCss/navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  // console.warn(handleShowLinks);
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <Link to="/" className="navbar_link">
            Home
          </Link>
        </li>
        <li className="navbar_item slideInDown-2">
          <Link to="/login" className="navbar_link">
            Login
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link to="/register" className="navbar_link">
            Register
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link to="/search" className="navbar_link">
            Search
          </Link>
        </li>
        {/* <li className="navbar_item slideInDown-5">
          <Link to="/user" className="navbar_link">
            User
          </Link>
        </li> */}
      </ul>
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}
