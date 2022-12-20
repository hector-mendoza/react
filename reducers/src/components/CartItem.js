const CartItem = ({ data, deleteFromCart }) => {

    let { id, name, price, quantity } = data;

    return (
        <div style={{ borderBottom: "thin solid gray", paddingBottom: "25px" }}>
            <h4>{name}</h4>
            <p><strong>${price}</strong>x<small>{quantity}</small></p>
            <h5>
                <strong>SUBTOTAL: </strong>
                $
                {
                    quantity * price
                }
            </h5>
            <button onClick={() => deleteFromCart(id) } style={{ marginRight: "15px" }}>REMOVE ONE</button>
            <button onClick={() => deleteFromCart(id, true) }>REMOVE ALL</button>
        </div>
    );
}

export default CartItem;