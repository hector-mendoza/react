import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;

    // console.log(products)

    const addToCart = (id) => {
        // console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    const deleteFromCart = () => {};

    const clearCart = () => {};

    return (  
        <>
            <h2>Shopping Cart</h2>
            <h3>Products</h3>
            <article className="box grid-responsive">
                {
                    products.map(
                        (product) => (
                            <ProductItem key={product.id} data={product} addToCart={addToCart} />
                        )
                    )
                }
            </article>
            <h3>Cart</h3>
            <article className="box">
                <button onClick={clearCart}>CLEAR CART</button>
                {
                    cart.map( (item, index) => (
                        <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
                    ) )
                }
            </article>
        </>
    );
}
 
export default ShoppingCart;