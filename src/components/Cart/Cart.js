import "./Cart.css"
import { Context } from "../Context/CartContext"
import { useContext } from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import FormBuyer from "../FormBuyer/FormBuyer"
import { useState } from "react"
import 'firebase/firestore'
import { getFirestore } from "../../Firebase/firebase"
import firebase from 'firebase'
import 'firebase/firestore'

const Cart = () => {

  const { cart, total, clear } = useContext(Context)
  const [userInfo, setUserInfo] = useState(null)
  const [orderId, setOrderId] = useState(null)

  const updateUserInfo = (userInfo) => {
    setUserInfo(userInfo)
  }

  const items = cart.map((cart) => ({
    id: cart.id,
    title: cart.nombre,
    quantity: cart.cantidad
  }))

  const order = {
    userInfo,
    item: items,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: total,
    estado: 'Generado',
  }

  async function createOrder() {
    const db = getFirestore()
    const orders = db.collection('orders')
    try {
      const { id } = await orders.add(order)
      alert('El id de su orden es:' + id)
      setOrderId(id)
      clear()
    } catch (err) {
      console.log(err);
    }
  }

  return <>
    {(cart.length === 0 && orderId === null) && 
    <div className="col-12 text-center mt-5">
      <p className="display-4">Tu carrito está vacío =(</p>
      <Button variant="danger bg-gradient" as={Link} to='/'>ir a comprar</Button>  
    </div>}
    {orderId !== null && 
    <div className="col-12 text-center mt-5 mb-5">
      <h2 className="display-5 mb-4">Hemos procesado su compra correctamente</h2>
      <h3 className="fs-4 mb-5 bg-dark bg-gradient text-white p-5">Su nro. de orden es: {orderId}</h3>
      <Link to="/">
        <button className="btn btn-danger bg-gradient" >¡¡Gracias por su compra!!</button>
      </Link>
    </div>}
    {cart.length !== 0 && 
    <>
      <div className="container mt-3">
        {cart.map((producto) =>
          <CartItem
            key={`cart-${producto.id}`}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            cantidad={producto.cantidad}
            subtotal={producto.subtotal}
          />
        )}
      </div>
      <h2 className="display-5 text-center">Total del carrito: ${total}</h2>
      {!userInfo}
      <FormBuyer onChange={updateUserInfo} />
      <Container className="text-center">
        <Button variant="danger bg-gradient m-2" onClick={() => clear()}>Vaciar carrito</Button>
        <Button variant="btn btn-dark bg-gradient m-2" disabled={userInfo ? false : true} onClick={createOrder}>Realizar Comprar</Button>
      </Container>
    </>}
  </>
}

export default Cart
