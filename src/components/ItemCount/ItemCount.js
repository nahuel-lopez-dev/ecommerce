import { useState } from "react"
import { Button, Card } from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {

  const [stockItem, setStockItem] = useState(stock)
  const [cantidad, setCantidad] = useState(initial)

  const changeStock = {
    handleAdd: () => {
      if (stockItem === 0) {
        alert("No hay más stock.")
      } else {
        setCantidad(cantidad + 1)
        setStockItem(stockItem - 1)
      }
    },
    handleSubtract: () => {
      if (cantidad > 0) {
          setCantidad(cantidad - 1)
          setStockItem(stockItem + 1)
      }
    }
  }

  return (
    <div className="container">
      <div className="container justify-content-center display-flex col-12 p-2">

        <div className="container d-flex justify-content-center">
          <Card.Text className="text-muted">Stock disponible: {stockItem}</Card.Text>
        </div>

        <div className="container d-flex justify-content-between col-4 p-2">
          <button className="btn btn-danger bg-gradient" onClick={changeStock.handleSubtract} disabled={stockItem === 0 && cantidad === 0}>-</button>
          <h5>{cantidad}</h5>
          <button className="btn btn-danger bg-gradient" onClick={changeStock.handleAdd} disabled={stockItem === 0 && cantidad === 0}>+</button>
        </div>

        <div className="container d-flex justify-content-center">
          <Button className="col-4" variant="dark bg-gradient" onClick={() => {onAdd({cantidad}) }} disabled={cantidad === 0}>
            Agregar al carrito
          </Button>
        </div>

      </div>
    </div>
  )
}

export default ItemCount