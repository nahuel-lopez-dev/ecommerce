import React, {useState} from 'react'
import "./ItemCount.css"

export const ItemCount = ({ initial = 0 }) => {

    const [ contador, setContador ] = useState( initial );

    const sube = () => setContador( contador +1 );
    const baja = () => setContador( contador -1 );
    const resetea = () => setContador( initial )          

    return (
        <div>
            <h3 className="text-dark m-3 p-3 fs-3 text-center">ItemCount</h3>
            <div className="text-center">
                <h3>{ contador }</h3>
                <button className="btn btn-dark btn-lg m-2 p-2" onClick={ sube }>+1</button>
                <button className="btn btn-dark btn-lg m-2 p-2" onClick={ resetea }>Reset</button>
                <button className="btn btn-dark btn-lg m-2 p-2" onClick={ baja }>-1</button>
            </div>
        </div>
    )
}
