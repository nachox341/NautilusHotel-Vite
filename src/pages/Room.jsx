import { Header } from '../components/Header'
import { Habitaciones } from '../components/Habitaciones'
import Footer from '../components/Footer'
import Titulo from '../components/Titulo'

export function Room () {
    return (
        <>
            <Titulo />
            <Habitaciones />
            <Footer />
        </>
    )
}

export default Room