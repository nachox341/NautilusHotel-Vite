import Buscador from '../components/Buscador'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import Informacion from '../components/Informacion'
import imagen5 from '../assets/image/imagen5.jpg'

export function Home () {
    return (
        <>
            <Buscador />
            <Carrusel />
            <Informacion 
                titulo={ "Piscina del hotel" }
                informacion={ "La piscina cubierta climatizada tiene techos abovedados con vigas de madera. La bañera de hidromasaje cuenta con ventanales y da al estanque y a la cara norte del hermoso paraje local. Por motivos de seguridad y salud, los niños deben ir acompañados de un adulto cuando visiten la piscina. La serena piscina del hotel y resort spa Royal Villas cuenta con una decoración elegante que incluye impresionantes columnas de teca del piso al techo contrastadas con un fresco piso de baldosas negras. También está disponible un comedor junto a la piscina, que ofrece una selección de platos de cualquier cocina que desee, que son saludables y deliciosos. Las clases diarias de aeróbic acuático ayudan a los huéspedes a mantenerse en forma mientras viajan." } 
                imagen={ imagen5 }
            />
            <Footer />
        </>
    )
}

export default Home