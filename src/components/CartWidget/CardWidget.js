import { Button } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";

// import React from 'react'

export default function CardWidget({text}) {
    return (
        <div>
            <Button className="btn btn-dark m-2 p-2">
                <GiShoppingCart ClassName="me-5"/>
                { text }
            </Button>
        </div>
    )
}
