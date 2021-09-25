import React from 'react'

export const ItemListContainer = ( { content } ) => {
    return (
        <div>
            <h1 className="bg-dark bg-gradient text-white text-center m-5 p-2 rounded">{content}</h1>
        </div>
    )
}
