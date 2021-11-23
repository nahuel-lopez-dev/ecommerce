import { Context } from "../Context/CartContext"
import { useContext } from "react"
import { useState } from "react"
import { Container, Button } from "react-bootstrap"
import { getFirestore } from "../../Firebase/firebase"
import firebase from 'firebase'
import 'firebase/firestore'

const FormBuyer = () => {

    const { cart, total, clear } = useContext(Context)

    const [formData, setFormData] = useState({
        nombre: '',
        tel: '',
        email: ''
    })

    function handleOnChange(e) {

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

            return { id, title, price }
        })

        const db = getFirestore();
        db.collection('orders').add(orden)
            .then(resp => alert(`Su código de compra es: ${resp.id}`))
            .catch(err => console.log(err))
            .finally(() => setFormData({
                name: '',
                tel: '',
                email: ''
            }))
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form onChange={handleOnChange} onSubmit={handleOnSubmit} action="">
                    <Container className="d-flex justify-content-center mt-2">
                        <div className="col-12 col-md-10 col-lg-6 bg-dark p-2 rounded">
                            <h4 className="text-white">Estos datos son necesarios para poder terminar su compra</h4>
                            <label htmlFor="nombre"></label>
                            <input name="nombre" className="form-control" type="text" placeholder="Nombre" defaultValue={formData.nombre} required />

                            <label htmlFor="tel"></label>
                            <input type="tel" name="tel" className="form-control" placeholder="Ingrese su teléfono" defaultValue={formData.tel} />

                            <label htmlFor="email"></label>
                            <input name="email" className="form-control" type="email" placeholder="Ingrese su email" defaultValue={formData.email} required />
                        </div>
                    </Container>
                    <Container>
                        <Button variant="danger bg-gradient m-2" onClick={() => clear()}>Vaciar carrito</Button>
                        <Button type="submit" variant="dark bg-gradient m-2">Terminar Compra</Button>
                    </Container>
                </form>
            </div>
        </div>

    )
}

export default FormBuyer
