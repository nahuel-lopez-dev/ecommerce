import "./ItemDetailContainer.css"
import dataBase from "../../dataBase/dataBase"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ( ) => {

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
    }, [id])

    return (
        <>
            {cargando ? <h2 className="bg-dark text-center text-danger p-4">SE ESTÁ CARGANDO EL PRODUCTO</h2> : 
            <ItemDetail 
                key={`detail-${producto.id}`}
                id={producto.id} 
                nombre={producto.nombre} 
                desc={producto.desc} 
                precio={producto.precio} 
                stock={producto.stock}
                imagen={producto.imagen} 
            /> }
        </>
    )
}

export default ItemDetailContainer