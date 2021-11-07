import Item from "../Item/Item"


export const ItemList = ({items}) => {


    return (
        <div>
            {items.map((producto)=> 
            <Item 
            key={producto.id} 
            nombre={producto.nombre} 
            desc={producto.desc} 
            precio={producto.precio} 
            stock={producto.stock}
            categoria={producto.categoria}
            id={producto.id}
            imagen={producto.imagen}
             /> )}
        </div>
    )
}



