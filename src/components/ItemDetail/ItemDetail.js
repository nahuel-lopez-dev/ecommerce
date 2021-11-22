import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { Context } from "../Context/CartContext"
import { Container, Card, Button } from "react-bootstrap"

const ItemDetail = ({ id, nombre, desc, precio, stock, imagen }) => {

  const [add, setAdd] = useState(false)
  const { onAdd } = useContext(Context)

  const addToCart = (props) => {
    setAdd(true)
    onAdd({ id, nombre, precio, imagen }, props.cantidad) //producto, cantidad
  }

  return (
    <Container className="col-12 col-md-12 col-lg-12 d-flex justify-content-center my-3">
      <Card className="card p-3 bg-light rounded-3">
        <Card.Img className="rounded-3" variant="top" src={imagen} alt={nombre} style={{ width: "100%" }} />
        <Card.Body>
          <Card.Title className="fs-1 text-center">{nombre}</Card.Title>
          <Card.Text className="text-center">{desc}</Card.Text>
          <Card.Subtitle className="p-2" style={{ textAlign: "center" }}><strong className="fs-3">$ {precio}</strong></Card.Subtitle>

          {!add ?
            <ItemCount onAdd={addToCart} stock={stock} initial={0} />
            :
            <div className="container d-flex justify-content-center">
              <Button as={Link} to='/cart' className="col-4" variant="dark bg-gradient">Terminar compra</Button>
            </div>
          }

          <Button as={Link} to={'/'} variant="danger bg-gradient">Volver</Button>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default ItemDetail