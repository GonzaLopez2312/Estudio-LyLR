import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <nav className="footer-sections">
                    <a href="#inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#contacto">Contacto</a>
                </nav>
                <nav className="actions">
                    <img src="/src/assets/images/call.png" alt="Llamá" />
                    <img src="/src/assets/images/email.png" alt="Email" />
                    <img src="/src/assets/images/linkedin.png" alt="LinkedIn" />
                </nav>
                <div className="logo-LyLR-footer">
                    <img
                        src="/src/assets/images/logoLyLR.png"
                        alt="LyLR"
                        className="logoLyLR-footer"
                    />
                </div>
            </div>
            <div className="sign">
                <hr />
                <h6>© 2025 Lopez y Lopez Romera. Todos los derechos reservados.</h6>
                <h6 className="h6-underlined"><a href="https://www.linkedin.com/in/gonzalo-lopez-romera-a30602270/">Desarrollado por Gonzalo Lopez Romera</a></h6>
            </div>
        </footer>
    );
}

export default Footer;
