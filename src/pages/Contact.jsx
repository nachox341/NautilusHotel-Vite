import Contactanos from '../components/Contactanos'
import Footer from '../components/Footer'
import Titulo from '../components/Titulo'

export function Contact () {
    return (
        <>
            <Titulo titulo={ "Contactanos" } />
            <Contactanos />
            <Footer />
        </>
    )
}

export default Contact