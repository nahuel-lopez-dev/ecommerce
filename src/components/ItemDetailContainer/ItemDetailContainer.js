// import dataBase from "../../dataBase/dataBase"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from "../../Firebase/firebase"

const ItemDetailContainer = ( ) => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
		const itemCollection = db.collection('items')
		const item = itemCollection.doc(id)

		item.get().then((doc) => {
			if (!doc.exists) {
				console.log('El producto no existe !! :(')
				return
			}			
			setProducto({ id: doc.id, ...doc.data() })
		}).catch((error) => {
			console.log("Error al buscar productos", error)
			alert('El producto no existe')
		}).finally(() => {
			setCargando(false)
		})

        // const productos = ()=>{
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve(dataBase)
        //         }, 2000)
        //     })
        // }
        // productos().then((items)=>{
        //     const producto = items.find(producto => producto.id == id)
        //     setProducto(producto)
        //     setCargando(false)
        // })
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