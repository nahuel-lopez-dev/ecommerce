// import React from 'react' ya no es necesario en las nuevas versiones
import { ItemList } from '../ItemList/ItemList';
import dataBase from "../../dataBase/dataBase"
import React, {useState, useEffect} from 'react'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import "./ItemListContainer.css"

export const ItemListContainer = ( { titulo, subtitulo } ) => {

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
            <h1 className="colorItemListContainer bg-gradient text-white text-center mt-5 p-4">{titulo}</h1>
            <h2 className="text-secondary display-4 text-center m-2 p-2 rounded">{subtitulo}</h2>
            <div className="container d-flex justify-content-center">
                <img className="m-2 p-5 border rounded" src="./images/portada2.jpg" alt="Imagen de una chica comiendo una barra de chocolate" />
            </div>
            <ItemList cargando={cargando} productos={productos} />
            <ItemDetailContainer />
        </div>
    )
}
