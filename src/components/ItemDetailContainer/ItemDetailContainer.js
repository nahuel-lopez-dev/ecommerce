import dataBase from "../../dataBase/dataBase"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./ItemDetailContainer.css"

export const ItemDetailContainer = ( ) => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        const productos = ()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(dataBase)
                }, 2000)
            })
        }
        productos().then((items)=>{
            const producto = items.find(producto => producto.id == id)
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