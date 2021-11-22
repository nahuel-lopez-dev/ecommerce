import "./Cart.css"
import { Context } from "../Context/CartContext"
import { useContext } from "react"
import { useState } from "react"
import { Container, Button } from "react-bootstrap"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { getFirestore } from "../../Firebase/firebase"
import firebase from 'firebase'
import 'firebase/firestore'

const Cart = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    tel: '',
    email: ''
  })

  const { cart, total, clear } = useContext(Context)

  function handleOnChange(e){

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    let orden = {}

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());

    orden.buyer = formData
    
    orden.total = total;

    orden.items = cart.map(cart => {
      const id = cart.id;
      const title = cart.nombre;
      const price = cart.precio * cart.cantidad;

      return {id, title, price}
    })

    const db = getFirestore();
    db.collection('orders').add(orden)
    .then(resp => console.log(resp.id) )
    .catch(err => console.log(err))
    .finally(()=> setFormData({
      name: '',
      tel: '',
      email: ''
    }))
  }

  console.log(formData);

  return (
    <div className="cart">
        <h2 className="fs-1 p-4 bg-dark text-white text-center">Carrito de compras</h2>
      <Container className="container align-top justify-content-center p-2 text-center ">

        <Container>
          {/* Si hay productos en el carrito, los muestra.*/}
          {cart.length > 0 ? (
            <>
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

              <h2 className="display-5">Total del carrito: ${total}</h2>

              <div className="container-fluid">
                <div className="row">
                  <form onChange={handleOnChange} onSubmit={handleOnSubmit} action="">
                    <Container className="d-flex justify-content-center mt-2">
                      <div className="col-12 col-md-10 col-lg-6 bg-dark p-2 rounded">
                        {/* <label htmlFor="nombre"></label> */}
                        <input name="nombre" className="form-control" type="text" placeholder="Nombre" defaultValue={formData.nombre} required/>

                        {/* <label htmlFor="tel"></label> */}
                        <input type="tel" name="tel" className="form-control" placeholder="Ingrese su teléfono" defaultValue={formData.tel} />

                        {/* <label htmlFor="email"></label> */}
                        <input name="email" className="form-control" type="email" placeholder="Ingrese su email" defaultValue={formData.email} required />  
                      
                        {/* <label htmlFor="emailConf"></label> */}
                        <input name="emailConf" className="form-control" type="email" placeholder="Confirme su email" required />  
                      </div>
                    </Container>
                    <Container>
                      <Button variant="danger bg-gradient m-2" onClick={() => clear()}>Vaciar carrito</Button>
                      <Button type="submit" variant="dark bg-gradient m-2">Terminar Compra</Button>
                    </Container>
                  </form>  
                </div>
              </div>
            </>
          )
            :
            (
              <>
                <p className="display-4">Tu carrito está vacío =(</p>
                <Button variant="danger bg-gradient" as={Link} to='/'>Volver a inicio</Button>
              </>
            )
          }
        </Container>
      </Container>
    </div>
  )
}

export default Cart
