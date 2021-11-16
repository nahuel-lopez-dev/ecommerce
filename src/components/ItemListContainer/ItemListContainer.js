// import dataBase from "../../dataBase/dataBase"
import { ItemList } from '../ItemList/ItemList';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from "../../Firebase/firebase";
import "./ItemListContainer.css"

const ItemListContainer = ( { titulo, subtitulo } ) => {


    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {categoria} = useParams()

    useEffect(()=>{
        if(categoria){
            const dbQuery = getFirestore()
            dbQuery.collection('items').where('categoria', '==', categoria).get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(resp => {
                setProductos(resp.docs.map(productos => ( {id: productos.id, ... productos.data() } ) ))
            })
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))
        }

        // const productos = ()=>{
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve(dataBase)
        //         }, 2000)
        //     })
        // }
        // productos().then((items)=>{
        //     if(categoria != null){
        //         const productosFiltrados = items.filter((producto) => producto.categoria === categoria)
        //         setProductos(productosFiltrados)
        //         setCargando(false)
        //     } else {
        //         setProductos(items)
        //         setCargando(false)
        //     }
        // })
    }, [categoria])

    console.log(productos);

    return (
        <div>
            <h1 className="colorItemListContainer bg-gradient text-white text-center mt-4 p-4">{titulo}</h1>
            <h2 className="text-secondary display-4 text-center m-2 p-2 rounded">{subtitulo}</h2>
            <div className="container d-flex justify-content-center">
                <img className="img-fluid p-2 border rounded" src="./images/portada2.jpg" alt="Imagen de una chica comiendo una barra de chocolate" />
            </div>
            {/* Si está cargando los productos muestro el mensaje, sino llamo a ItemList con productos */}
            {cargando ? 
                <h2 className="bg-dark text-center text-danger p-4">SE ESTÁN CARGANDO LOS PRODUCTOS...</h2> 
                :
                <div className="container-fluid">
                    <div className="row">
                        <ItemList items={productos} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemListContainer
