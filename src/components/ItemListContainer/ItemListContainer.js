import dataBase from "../../dataBase/dataBase"
import { ItemList } from '../ItemList/ItemList';
// import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import "./ItemListContainer.css"

export const ItemListContainer = ( { titulo, subtitulo } ) => {


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoria} = useParams()

    useEffect(()=>{
        const productos = ()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(dataBase)
                }, 2000)
            })
        }
        productos().then((items)=>{
            if(categoria != null){
                const productosFiltrados = items.filter((producto) => producto.categoria === categoria)
                setProductos(productosFiltrados)
                setCargando(false)
            } else {
                setProductos(items)
                setCargando(false)
            }
        })
    }, [categoria])

    return (
        <div>
            <h1 className="colorItemListContainer bg-gradient text-white text-center mt-5 p-4">{titulo}</h1>
            <h2 className="text-secondary display-4 text-center m-2 p-2 rounded">{subtitulo}</h2>
            <div className="container d-flex justify-content-center">
                <img className="img-fluid p-2 border rounded" src="./images/portada2.jpg" alt="Imagen de una chica comiendo una barra de chocolate" />
            </div>
            <ItemList cargando={cargando} productos={productos} />
            {/* <ItemDetailContainer /> */}
        </div>
    )
}
