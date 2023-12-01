import './css/Registro.css'
import './css/Contactanos.css'
import  logo2 from '../assets/image/logo2.png'
import  logo3 from '../assets/image/logo3.png'

export function Registro () {
    const routes = (
        {
            path: '/Login',
            name: 'Inicio sesion',
        }
    )
    
    return (
        <div className='contenedor-inicio'>
            <div className="signup gris-registro">
                <h1>Registro</h1>
                <form id="form" className="form"  action="#" method="POST">
                    <label>
                        <input name="nombre" placeholder="" type="text" className="input" required />
                        <span>Nombre</span>
                    </label>
                    <label>
                        <input name="rut" placeholder="" type="text" className="input" required />
                        <span>Rut</span>
                    </label>
                    <label>
                        <input name="contraseña" placeholder="" type="password" className="input" required />
                        <span>Contraseña</span>
                    </label>
                    <button className='boton-registro' type="submit">Registrarse</button>
                </form>
            </div>
            <div className="signup rojo-registro">
                <div className="logos">
                    <img id="logo1" src={ logo3 } alt="logo" />
                    <img id="logo2" src={ logo2 } alt="logo" />
                </div>
                <a href={routes.path}>{routes.name}</a>
            </div>
        </div>
    )
}

export default Registro