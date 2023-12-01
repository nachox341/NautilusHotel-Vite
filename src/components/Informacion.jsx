import './css/Informacion.css'

export function Informacion (props) {
    const { titulo, informacion, imagen } = props

    return (
        <div className="contenedor-informacion">
            <div className="texto">
                <h1>{ props.titulo }</h1>
                <p>{ props.informacion }</p>
            </div>
            <div className="imagen">
                <img src={ imagen } alt="imagen" />
            </div>
        </div>
    )
}

export default Informacion