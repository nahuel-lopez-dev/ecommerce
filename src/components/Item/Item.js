// import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const Item = ({ nombre, desc, precio, categoria, id, imagen }) => {
    return (
        <div className="container">
            <div className="row mt-3 justify-content-center d-flex">
                <div className="col-9 col-md-6 col-lg-5">
                    <div className="card">
                        <img className="card-img-top" src="#" alt="" />
                        <div className="card-body text-center">
                            <h4 className="card-title">{nombre}</h4>
                            <p className="card-text">{desc}</p>
                            <h5 className="card-subtitle text-muted mb-2">$ {precio}</h5>
                            <Link to={`/${categoria}/${id}`}>
                                <img className="justify-content-center p-1 img-fluid" src={imagen} alt={nombre} />
                                <button className="btn btn-lg btn-dark bg-gradient text-white mt-2">Ver detalle</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

