import './css/BotonLogin.css'

export function BotonLogin () {
    const routes = (
        {
            path: '/Login',
            name: 'Inicia sesion',
        }
    )

    return (
        <a href={routes.path}><button>{routes.name}</button></a>
    )
}

export default BotonLogin