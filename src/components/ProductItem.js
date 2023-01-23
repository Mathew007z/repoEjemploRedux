


const ProductItem = ({ data,  pushCart }) => {
    
    const { id, name ,price } = data

    return(
      <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button onClick={() => pushCart(id)}>Agregar</button>
      </div>
           
    )
}


export default ProductItem;