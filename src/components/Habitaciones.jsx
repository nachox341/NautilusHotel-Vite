import './css/Habitaciones.css'
import { Habitacion } from './Habitacion'

export function Habitaciones () {
    return (
        <div className='contenedor-habitaciones'>
            <Habitacion />
            <Habitacion />
            <Habitacion />
            <Habitacion />
        </div>
    )
}

export default Habitaciones