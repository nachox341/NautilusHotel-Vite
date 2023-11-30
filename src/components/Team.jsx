import './css/Team.css'
import  foto1 from '../assets/image/foto1.png'
import  foto2 from '../assets/image/foto2.png'
import  foto3 from '../assets/image/foto3.png'

export function Team () {
    return (
        <div className="contenedor-team">
            <h1>Nuestro team</h1>
            <div className="fotos">
                <img src={foto1} alt="foto 1" />
                <img src={foto2} alt="foto 2" />
                <img src={foto3} alt="foto 3" />
            </div>
        </div>
    )
}

export default Team