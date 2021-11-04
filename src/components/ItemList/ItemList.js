import Item from "../Item/Item"


export const ItemList = ({cargando, productos}) => {


    return (
        <div>
            {cargando ? <h2 className="bg-dark text-center text-danger p-4">SE ESTÁN CARGANDO LOS PRODUCTOS...</h2> :
            productos.map((producto)=> 
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



