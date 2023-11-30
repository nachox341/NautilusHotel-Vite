import './css/Informacion.css'
import  imagen5 from '../assets/image/imagen5.jpg'

export function Informacion () {
    return (
        <div className="contenedor-informacion">
            <div className="texto">
                <h1>Piscina del hotel</h1>
                <p>La piscina cubierta climatizada tiene techos abovedados con vigas de madera. La bañera de hidromasaje cuenta con ventanales y da al estanque y a la cara norte del hermoso paraje local. Por motivos de seguridad y salud, los niños deben ir acompañados de un adulto cuando visiten la piscina.
                    <br />
                    La serena piscina del hotel y resort spa Royal Villas cuenta con una decoración elegante que incluye impresionantes columnas de teca del piso al techo contrastadas con un fresco piso de baldosas negras. También está disponible un comedor junto a la piscina, que ofrece una selección de platos de cualquier cocina que desee, que son saludables y deliciosos. Las clases diarias de aeróbic acuático ayudan a los huéspedes a mantenerse en forma mientras viajan.
                </p>
            </div>
            <div className="imagen">
                <img src={ imagen5 } alt="imagen 5" />
            </div>
        </div>
    )
}

export default Informacion