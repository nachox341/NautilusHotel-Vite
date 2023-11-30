import './css/Buscador.css'
import lupa from '../assets/image/lupa.png'

export function Buscador () {
    return (
        <div className="contenedor-buscador">

            <div className="buscador">
                <form className="form-buscador" method="post" action="#">
                    <div className="fecha-desde">
                        <label htmlFor="check-in">Desde</label>
                        <input type="date" id="check-in" name="check-in" required />
                    </div>

                    <div className="fecha-hasta">
                        <label htmlFor="check-out">Hasta</label>
                        <input type="date" id="check-out" name="check-out" required />
                    </div>

                    <div className="tipo-habitacion">
                        <label htmlFor="tipo-habitacion">Habitación</label>
                        <select id="tipo-habitacion" name="habitacion" required>
                            <option defaultValue="seleccionar">Seleccionar</option>
                            <option defaultValue="simple">Simple</option>
                            <option defaultValue="doble">Doble</option>
                            <option defaultValue="triple">Triple</option>
                        </select>
                    </div>

                    <div className="personas">
                        <label htmlFor="cantidad-personas">Personas</label>
                        <input type="number" id="cantidad-personas" name="cantidad-personas" min="1" value="1" required />
                    </div>

                    <div className="boton-buscador">
                        <button type="submit">
                            <img src={lupa} />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Buscador