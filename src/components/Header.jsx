import './css/Header.css'
import  logo1 from '../assets/image/logo1.png'

export function Header () {
    return (
        <header>
            <div className="barra">
                <div className="nada"></div>
                <div className="logo">
                    <img src={ logo1 } />
                </div>
                <div className="boton-login">
                    <a href="login.html"><button>Iniciar Sesion</button></a>
                </div>
            </div>
            <hr />
            <div className="contenedor-navegador">
                <nav className="navegador sticky">
                    <a href="home.html">Inicio</a>
                    <a href="room.html">Habitaciones</a>
                    <a href="about.html">Nosotros</a>
                    <a href="contact.html">Contacto</a>
                </nav>
            </div>
            <hr />
        </header>
    )
}

export default Header