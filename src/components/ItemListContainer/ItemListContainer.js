// import React from 'react' ya no es necesario en las nuevas versiones
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemListContainer.css"

export const ItemListContainer = ( { titulo, subtitulo } ) => {

    const cantidad = 10;
    const unidadesPedidas = 0;


    return (
        <div>
            <h1 className="colorItemListContainer bg-gradient text-white text-center m-5 p-2 rounded">{titulo}</h1>
            <h2 className="text-secondary display-4 text-center m-5 p-2 rounded">{subtitulo}</h2>
            <ItemCount stock = {cantidad} initial={unidadesPedidas} />
        </div>
    )
}
