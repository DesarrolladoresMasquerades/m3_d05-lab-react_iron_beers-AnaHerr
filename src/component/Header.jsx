import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="App-header">
      <NavLink to="/">
        <button>🏠</button>
      </NavLink>
    </nav>
  );
}

export default Header;