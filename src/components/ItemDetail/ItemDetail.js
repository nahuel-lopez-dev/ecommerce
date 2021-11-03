import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({nombre, desc, precio, stock, imagen}) => {
    return (
        <div className="container">
            <div className="row mt-3 justify-content-center">
                <div className="col-9 col-md-6 col-lg-5">
                    <div className="card">
                        <img className="card-img-top" src="#" alt="" />
                        <div className="card-body text-center">
                            <h4>Componente ItemDetail</h4>
                            <h4 className="card-title">{nombre}</h4>
                            <p className="card-text">{desc}</p>
                            <h5 className="card-subtitle text-muted mb-2">$ {precio}</h5>
                            <img className="justify-content-center p-1 img-fluid" src={imagen} alt={nombre} />
                            <ItemCount stock={stock} initial={0}/>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail