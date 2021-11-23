import { useState } from "react"
import { Container } from "react-bootstrap"

const FormBuyer = ({onChange}) => {

    const [formUser, setFormUser] = useState({
        name: '',
        phone: '',
        email: '',
        emailConf: ''
    })

    const handleSubmit = (fieldId, evt) => {
        const value = evt.target.value
        const formData = {...formUser, [fieldId]: value}
        const {name, email, phone} = formData
        onChange((Object.keys(formData).every(k=> formData[k] !== '') && formData.email === formData.emailConf) ? ({name, email, phone}) : null)
        setFormUser(formData)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form action="">
                    <Container className="d-flex justify-content-center mt-2">
                        <div className="col-12 col-md-10 col-lg-6 bg-dark p-2 rounded">
                            <h4 className="text-white text-center">Estos datos son necesarios para poder terminar su compra</h4>
                            <label htmlFor="nombre"></label>
                            <input name="nombre" className="form-control" type="text" placeholder="Nombre" defaultValue={formUser.name} onChange={(evt) => handleSubmit('name',evt)} id="inputText" required />

                            <label htmlFor="tel"></label>
                            <input type="tel" name="tel" className="form-control" placeholder="Ingrese su teléfono" defaultValue={formUser.phone} onChange={(evt) => handleSubmit('phone', evt)} id="inputTel" />

                            <label htmlFor="email"></label>
                            <input name="email" className="form-control" type="email" placeholder="Ingrese su email" defaultValue={formUser.email} onChange={(evt) => handleSubmit('email', evt)} id="staticEmail" required />
                            
                            <label htmlFor="emailConf"></label>
                            <input name="emailConf" className="form-control" type="email" placeholder="Ingrese su email" defaultValue={formUser.emailConf} onChange={(evt) => handleSubmit('emailConf', evt)} id="staticEmailConf" required />
                        </div>
                    </Container>
                </form>
            </div>
        </div>
    )
}

export default FormBuyer
