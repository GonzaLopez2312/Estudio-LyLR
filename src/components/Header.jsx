import './Header.css';


function Header() {
    return(
        <header className='header'>
        <div className='logoLyLR'>
            <img src= "src/assets/images/logoLyLR.png" alt='LyLR' className='logoLyLR'/>
        </div>
        <nav className='nav-sections'>
            <a href='#inicio'>Inicio</a>
            <a href='#nosotros'>Nosotros</a>
            <a href='#servicios'>Servicios</a>
            <a href='#contacto'>Contacto</a>
        </nav>
        </header>
    );
}

export default Header;