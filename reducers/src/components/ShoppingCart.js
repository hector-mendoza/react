import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;

    // console.log(products)

    const addToCart = (id) => {
        console.log(id);
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

            </article>
        </>
    );
}
 
export default ShoppingCart;