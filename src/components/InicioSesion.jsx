import './css/InicioSesion.css'
import './css/Contactanos.css'
import  logo2 from '../assets/image/logo2.png'
import  logo3 from '../assets/image/logo3.png'

export function InicioSesion () {
    const routes = (
        {
            path: '/Signup',
            name: 'Registrate',
        }
    )

    return (
        <div className='contenedor-inicio'>
            <div className="login rojo-inicio">
                <div className="logos">
                    <img id="logo1" src={ logo3 } alt="logo" />
                    <img id="logo2" src={ logo2 } alt="logo" />
                </div>
                <a href={routes.path}>{routes.name}</a>
            </div>
            <div className="login gris-inicio">
                <h1>¡Bienvenidos!</h1>
                <form id="form" className="form"  action="#" method="POST">
                    <label>
                        <input name="usuario" placeholder="" type="text" className="input" />
                        <span>Usuario</span>
                    </label>
                    <label>
                        <input name="contraseña" placeholder="" type="password" className="input" />
                        <span>Contraseña</span>
                    </label>
                    <button className='boton-inicio' type="submit">Iniciar Sesión</button>
                </form>
                <br />
                <a href="">¿Has olvidado tu contraseña?</a>
            </div>
        </div>
    )
}

export default InicioSesion