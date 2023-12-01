import Footer from '../components/Footer'
import Informacion from '../components/Informacion'
import Team from '../components/Team'
import { Titulo } from '../components/Titulo'
import imagen6 from '../assets/image/imagen6.jpg'

export function About () {
    return (
        <>
            <Titulo titulo={ "Sobre nosotros" } />
            <Informacion 
                titulo={ "Algunas palabras sobre nosotros" }
                informacion={ "¿Estás cansado de tu rutina diaria? ¿Buscas un lugar para quedarte y descansar con tu familia? Estás en el lugar correcto! Nuestro resort y hotel con spa ofrece alojamiento histórico y de lujo para los viajeros. Combina estilo moderno y comodidades con valores tradicionales. Todas las habitaciones están equipadas con aire acondicionado y televisores LCD. El servicio WI-FI gratuito está disponible en todo el territorio del hotel. La comida de nuestro restaurante y las comidas de cocinas mundiales unen a personas que conectan historia y tradiciones. ¡Experimente nuestra cálida hospitalidad, alta calidad de servicio y comodidad excepcional! ¡Haga una reserva para las vacaciones de sus sueños hoy!" } 
                imagen={ imagen6 }
            />
            <Team />
            <Footer />
        </>
    )
}

export default About