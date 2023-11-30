import Footer from '../components/Footer'
import { Header } from '../components/Header'
import Informacion from '../components/Informacion'
import Team from '../components/Team'
import { Titulo } from '../components/Titulo'

export function About () {
    return (
        <>
            <Header />
            <Titulo />
            <Informacion />
            <Team />
            <Footer />
        </>
    )
}

export default About