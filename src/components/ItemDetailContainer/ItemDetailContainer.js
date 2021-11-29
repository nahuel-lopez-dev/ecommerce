import Loading from "../Loading/Loading"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from "../../Firebase/firebase"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
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
    }, [id])

    return (
        <div className="container-fluid">
            <div className="row bg-dark bg-gradient mt-4 mb-4">
                {cargando ? <Loading /> :
                    <ItemDetail
                        key={`detail-${producto.id}`}
                        id={producto.id}
                        nombre={producto.nombre}
                        desc={producto.desc}
                        precio={producto.precio}
                        stock={producto.stock}
                        imagen={producto.imagen}
                    />}
            </div>
        </div>
    )
}

export default ItemDetailContainer