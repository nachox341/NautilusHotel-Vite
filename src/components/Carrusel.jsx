import './css/Carrusel.css'
import  imagen1 from '../assets/image/imagen1.jpg'
import  imagen2 from '../assets/image/imagen2.jpg'
import  imagen3 from '../assets/image/imagen3.jpg'
import  imagen4 from '../assets/image/imagen4.jpg'

const carrusel = document.querySelector('.carrusel');
const circulo = document.querySelectorAll('.circulo');

circulo.forEach( (cadaCirculo , i) => {
    circulo[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;

        carrusel.style.transform = `translateX(${ operacion }%)`;

        circulo.forEach( (cadaCirculo , i) => {
            circulo[i].classList.remove('activo');
        });
        circulo[i].classList.add('activo');
    });
});

export function Carrusel () {
    return (
        <div className="sesion">
            <div className="contenedor-carrusel">
                <div className="carrusel">
                    <img src={ imagen1 } alt="imagen 1" />
                    <img src={ imagen2 } alt="imagen 2" />
                    <img src={ imagen3 } alt="imagen 3" />
                    <img src={ imagen4 } alt="imagen 4" />
                </div>
    
                <ul className="circulitos">
                    <li className="circulo activo"></li>
                    <li className="circulo"></li>
                    <li className="circulo"></li>
                    <li className="circulo"></li>
                </ul>
            </div>
            
            <div className="contenedor-texto">
                <p>Descanse a pasos de Playa Marítima en el Hotel Nautilus, Atlántida. A minutos de Cavancha, Muelles, restaurantes y el casino "Dreams Iquique". Piscina con vista al mar, Coral Reef sirve desayuno, almuerzo y cena.</p>
            </div>
        </div>
    )
}

export default Carrusel