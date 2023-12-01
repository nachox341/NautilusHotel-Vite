import Buscador from '../components/Buscador'
import Carrusel from '../components/Carrusel'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import Informacion from '../components/Informacion'

export function Home () {
    return (
        <>
            <Buscador />
            <Carrusel />
            <Informacion />
            <Footer />
        </>
    )
}

export default Home