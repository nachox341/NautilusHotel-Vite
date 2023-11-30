import './css/Footer.css'

export function Footer () {
    return (
        <footer>
            <div className="horario">
                <h1>Horario de apertura</h1>
                <p>Lunes a jueves: 8:00</p>
                <p>Viernes a Domingo: 6:00</p>
            </div>
            <div className="direccion">
                <h1>Direccion</h1>
                <p>Manuel Pl. 2940, 1111020 Iquique, Tarapacá</p>
                <p>+569 78824017</p>
            </div>
        </footer>
    )
}

export default Footer