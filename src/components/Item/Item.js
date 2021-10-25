const Item = ({nombre, desc, precio}) => {
    return (
        <div className="border rounded">
            <h2>Componente ITEM</h2>
            <h2>{nombre}</h2>
            <h3>{desc}</h3>
            <h4>$ {precio}</h4>
        </div>
    )
}

export default Item

