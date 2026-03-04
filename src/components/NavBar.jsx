import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/menu">Menu</NavLink>
      <NavLink className="nav-item" to="/builder">Builder</NavLink>
      <NavLink className="nav-item" to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;