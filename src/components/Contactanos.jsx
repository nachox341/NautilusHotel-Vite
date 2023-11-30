import './css/Contactanos.css'

export function Contactanos () {
    return (
        <div className='contenedor-contactanos'>
            <form id="form" className="form"  action="#" method="POST">
                <div className="flex">
                    <label>
                        <input name="nombre" placeholder="" type="text" className="input" />
                        <span>Primer nombre</span>
                    </label>

                    <label>
                        <input name="apellido" placeholder="" type="text" className="input" />
                        <span>Apellido</span>
                    </label>
                </div>

                <label>
                    <input name="correo" placeholder="" type="email" className="input" />
                    <span>Correo</span>
                </label> 

                <label>
                    <input name="telefono" type="tel" placeholder="" className="input" />
                    <span>Numero de telefono</span>
                </label>

                <label>
                    <textarea name="mensaje" rows="3" placeholder="Escribe aqui" className="input01"></textarea>
                    <span>mensaje</span>
                </label>

                <button className="fancy" href="#">
                    <span className="top-key"></span>
                    <span className="text">submit</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </form>
                <a href="mailto:adanayaviri2016@gmail.com " id="hack">
                </a>
        </div>
    )
}

export default Contactanos