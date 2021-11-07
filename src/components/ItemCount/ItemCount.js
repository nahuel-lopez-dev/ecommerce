import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./ItemCount.css"

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [ cantidad, setCantidad] = useState( stock );
    const [ counter, setCounter ] = useState( initial );
    const [cambiarBoton, setCambiarBoton] = useState(true)

    //Para agregar productos. Tiena la condición de sumar, y en el button donde se aplica lo acompaña la propiedad disabled para el stock = 0. De este modo, mientras el contador sea menor que el stock, permite sumar. Si alcanza el mismo valor que el stock, ya no permite sumar.
    const handleAdd = () => {
        if(cantidad > 0)
            setCounter(counter +1)
            setCantidad(cantidad -1)
    } 
    //Para sacar productos. Tiene la condición de restar mientras el contador sea mayor a cero. Si llega a ser igual a cero, ya no permite restar
    const handleSubtract = () => {
        if(counter > 0){
            setCounter(counter -1)
            setCantidad(cantidad +1)
        }
    } 
    //Para generar un alert de la cantidad de unidades que se agregarán al carrito.
    const addProducts = () => {
        if(counter !== 0){
            onAdd(counter)
            setCambiarBoton(false)
            alert(`Se agregarán: ${counter} unidades a su carrito`)
        }
    }

    return (
        <div>
            <p className="text-dark m-1 p-1 fs-3 text-center">Stock disponible: {cantidad}</p>
            <div className="text-center d-flex align-items-center justify-content-center">
                <button className="btn btn-danger btn-lg m-3 p-2" onClick={handleSubtract} disabled={stock === 0}> -1 </button>
                <h3 className="m-3">{ counter }</h3>
                <button className="btn btn-danger btn-lg m-3 p-2" onClick={handleAdd} disabled={cantidad === 0}>+1</button>
            </div>
            <div className="text-center">
                { cambiarBoton ?
                    <button className="btn btn-dark btn-lg mb-4 p-2" onClick={addProducts}>Agregar al carrito</button>
                    :
                    <div>
                        <Link to={'/cart'}>
                            <button className="btn btn-dark btn-md mb-4 m-1 p-1" >Terminar Compra</button> 
                        </Link>
                        <Link to={'/'}>
                            <button className="btn btn-dark btn-md mb-4 m-1 p-1" >Seguir comprando</button> 
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
