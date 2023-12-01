import './css/Titulo.css'

export function Titulo (props) {
    const { titulo } = props

    return (
        <div className="contenedor-titulo">
            <h1>{ props.titulo }</h1>
        </div>
    )
}

export default Titulo