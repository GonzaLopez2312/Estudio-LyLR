import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo-LyLR-header">
        <img
          src="src/assets/images/logoLyLR.png"
          alt="LyLR"
          className="logoLyLR-header"
        />
      </div>
      <nav className="nav-sections">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/aboutus">Nosotros</Link></li>
        <li><Link to="/contacts">Contacto</Link></li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;
