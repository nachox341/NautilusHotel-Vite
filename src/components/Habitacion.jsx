import './css/Habitacion.css'
import  room1 from '../assets/image/room-1.jpg'

export function Habitacion () {
    const routes = (
        {
            path: '/Habitacion',
            name: 'Reserva ahora',
        }
    )

    return (
        <div className='habitacion'>
            <div className="contenedor-imagen">
                <img src={ room1 } alt="Habitación 1" />
            </div>
            <div className="descripcion">
                <div>
                    <h5>Habitación Deluxe</h5>
                </div>
                <div>
                    <a className="reserva" href={routes.path}>{routes.name}</a>
                </div>
            </div>
        </div>
    )
}

export default Habitacion