import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="fotter-top">
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
                <div className="logo-LyLR">
                    <img
                        src="/src/assets/images/logoLyLR.png"
                        alt="LyLR"
                        className="logoLyLR"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
