// import React from 'react' ya no es necesario en las nuevas versiones
import dataBase from "../../dataBase/dataBase"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, {useState, useEffect} from 'react'
import "./ItemDetailContainer.css"

export const ItemDetailContainer = ( ) => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const productos = ()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(dataBase)
                }, 2000)
            })
        }
        productos().then((items)=>{
            const producto = items.find(producto => producto.id === "1")
            setProducto(producto)
            setCargando(false)
        })
    }, [])
    //para se renderice una sola vez, le aplico un array vacío como segundo parámetro

    return (
        <>
            {cargando ? <h2 className="bg-dark text-center text-danger p-4">SE ESTÁ CARGANDO EL PRODUCTO</h2> : 
            <ItemDetail 
                key={producto.id} 
                nombre={producto.nombre} 
                desc={producto.desc} 
                precio={producto.precio} 
                stock={producto.stock}
                imagen={producto.imagen} 
            /> }
        </>
    )
}