import './css/Header.css'
import  logo1 from '../assets/image/logo1.png'
import BotonLogin from './BotonLogin'

export function Header () {
    const routes = [
        {
            path: '/',
            name: 'Inicio',
        },

        {
            path: '/Room',
            name: 'Habitaciones',
        },

        {
            path: '/About',
            name: 'Nosotros',
        },
        
        {
            path: '/Contact',
            name: 'Contacto',
        },
    ]
    return (
        <header>
            <div className="barra">
                <div className="nada"></div>
                <div className="logo">
                    <img src={ logo1 } />
                </div>
                <div className="boton-login">
                    <BotonLogin />
                </div>
            </div>
            <hr />
            <div className="contenedor-navegador">
                <ul className='navegador sticky'>
                    {
                        routes.map((route) => (
                            <li key={route.name}>
                                <a href={route.path}>{route.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr />
        </header>
    )
}

export default Header