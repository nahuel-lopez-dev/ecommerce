import { Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"

// import React from 'react'

const CartWidget = () => {

    const { unidades } = useContext(Context)

    return (
        <div>
            <Container as={Link} to="/cart" fluid>
                <div className="btn btn-lg p-3">
                    <FaShoppingCart color="black"/>
                    {unidades > 0 ?
                        (<div className="navCart">
                            <h4>{unidades}</h4>
                        </div>)
                    :
                        <></>
                    }
                </div>
            </Container>
        </div>
    )
}

export default CartWidget
