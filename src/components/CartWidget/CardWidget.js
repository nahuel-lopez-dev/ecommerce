import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

// import React from 'react'

export default function CardWidget({text}) {
    return (
        <div>
            <Button className="btn btn-dark mt-md-2 p-3">
                <FaShoppingCart ClassName="m-1"/>
                { text }
            </Button>
        </div>
    )
}
