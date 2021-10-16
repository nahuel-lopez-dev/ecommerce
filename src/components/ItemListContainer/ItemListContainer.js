// import React from 'react' ya no es necesario en las nuevas versiones
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemListContainer.css"

export const ItemListContainer = ( { content } ) => {
    return (
        <div>
            <h1 className="colorItemListContainer bg-gradient text-white text-center m-5 p-2 rounded">{content}</h1>
            <ItemCount/>
        </div>
    )
}
