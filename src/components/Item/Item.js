
const Item = ({nombre, desc, precio}) => {
    return (
        <div className="container">
            <div className="row mt-3 justify-content-center">
                <div className="col-4">
                    <div class="card">
                        <img className="card-img-top" src="#" alt="" />
                        <div className="card-body">
                            <h4>Componente ITEM</h4>
                            <h4 className="card-title">{nombre}</h4>
                            <p className="card-text">{desc}</p>
                            <h6 className="card-subtitle text-muted mb-2">$ {precio}</h6>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

