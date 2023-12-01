import './css/a.css'
import imagen1 from '../assets/image/imagen1.jpg'

export function Ann () {
    return (
        <div className="contenedor-a">
            <img src={ imagen1 } alt="Imagen 1" />
            <div className='detalles'>
                <h1>Habitacion Deluxe</h1>
                <p>Hermosas habitaciones dobles de lujo, que combina el confort y la modernidad</p>
                <p>$35.000 pesos por día</p>
                <p>Disponibilidad</p>
                <button className='boton-inicio'>Reservar ahora</button>
            </div>
        </div>
    )
}

export default Ann