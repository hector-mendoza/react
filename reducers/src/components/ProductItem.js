const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data;
    return (
        <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={() => addToCart(id)}>ADD TO CART</button>
        </div>
    );
}

export default ProductItem;