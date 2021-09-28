import React from 'react'
import "./ItemListContainer.css"

export const ItemListContainer = ( { content } ) => {
    return (
        <div>
            <h1 className="colorItemListContainer bg-gradient text-white text-center m-5 p-2 rounded">{content}</h1>
        </div>
    )
}
