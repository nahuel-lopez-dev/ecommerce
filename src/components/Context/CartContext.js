import React, { useState } from 'react'

const Context = React.createContext()

const CartFunction = ({ children }) => {
  
  const [cart, setCart] = useState([]) 
  const [unidades, setUnidades] = useState(0) 
  const [total, setTotal] = useState(0) 

  const onAdd = (producto, cantidad) => {

    if (!isInCart(producto.id)) {
      setCart(
        [...cart,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: cantidad,
          imagen: producto.imagen,
          subtotal: producto.precio * cantidad
        }
        ]
      )
      setUnidades(unidades + 1) 
      setTotal(total + (producto.precio * cantidad))
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad
          item.subtotal += (producto.precio * cantidad)
        }
        return item
      })
      setCart(cartAux)
      setTotal(total + (producto.precio * cantidad))
    }
  }

  const isInCart = (id) => {
    return (cart.find(item => item.id === id))
  }

  const remove = (id, cantidad, precio) => {
    
    const carritoFiltrado = cart.filter((item) => item.id !== id)
    setCart(carritoFiltrado)
    setTotal(total - (cantidad * precio))
    setUnidades(unidades - 1)
  }

  const clear = () => {
    setCart([])
    setUnidades(0)
    setTotal(0)
  }

  return (
    <>
      <Context.Provider value={{ cart, unidades, total, onAdd, remove, clear }}>
        {children}
      </Context.Provider>
    </>
  )
}

export { CartFunction, Context }