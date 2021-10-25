import dataBase from "../../dataBase/dataBase"
import Item from "../Item/Item"
import React, {useState, useEffect} from 'react'

export const ItemList = () => {

    const [productos, setProductos] = useState([])
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
            setProductos(items)
            setCargando(false)
        })
    }, [])
    //para se renderice una sola vez, le aplico un array vacío como segundo parámetro

    return (
        <div>
            {cargando ? <h2>SE ESTÁN CARGANDO LOS PRODUCTOS...</h2> :
            productos.map((producto)=> 
            <Item key={producto.id} nombre={producto.desc} precio={producto.precio} /> )}
        </div>
    )
}



