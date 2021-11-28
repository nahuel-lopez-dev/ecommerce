import { Link } from 'react-router-dom'

const Item = ({ id, nombre, desc, precio, categoria, imagen }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 m-auto p-3">
            <div className="card" key={id}>
                <div className="card-body text-center">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-text">{desc}</p>
                    <h5 className="card-subtitle text-muted mb-2">$ {precio}</h5>
                    <div className="d-flex row justify-content-center">
                        <img className="p-2 img-fluid" src={imagen} alt={nombre} />
                        <Link to={`/${categoria}/${id}`}>
                            <button className="btn btn-lg col-12 btn-dark bg-gradient text-white mt-2 mb-2">COMPRAR</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

