import {useDispatch, useSelector} from 'react-redux';
import { clearCart, pushCart, removeAllProd } from '../actions/crudActions';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
    const state = useSelector(state => state)
    const {products, cart} = state.shopping
    const dispatch = useDispatch()




    return(
    <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <div>
            {
                products.map((products) => (
                    <ProductItem key={products.id} data={products} pushCart={() => dispatch(pushCart(products.id))}/>
                ))
            }
        </div>
        <h3>Carrito</h3>
        <div>
            <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
            {
                cart.map((item,index) => (
                    <CartItem key={index} data={item} 
                    delOneFromCart={() => dispatch(removeAllProd(item.id))}
                    delAllFromCart={() => dispatch(removeAllProd(item.id, true))}
                    />
                ))
            }
        </div>
    </div>
    )
}

export default ShoppingCart;