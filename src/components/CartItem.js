



const CartItem = ({delAllFromCart, delOneFromCart, data}) => {

    const { id , name , price, quantity} = data;


    return(
        <div>
            <h2>{name}</h2>
            <h5>${price}.00 x {quantity} = {price * quantity}.00</h5>
            <button onClick={() => delAllFromCart(id)}> Eliminar Todos</button>
            <button onClick={() => delOneFromCart(id, true)}>Eliminar uno </button>
        </div>
    )
}

export default  CartItem;