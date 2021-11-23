import "./Cart.css"
import { Context } from "../Context/CartContext"
import { useContext } from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import FormBuyer from "../FormBuyer/FormBuyer"
import 'firebase/firestore'

const Cart = () => {
  
  const { cart, total, clear } = useContext(Context)

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
              <FormBuyer />  
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
