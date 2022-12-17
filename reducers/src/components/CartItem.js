const CartItem = ({ data, deleteFromCart }) => {

    let { id, name, price } = data;

    return (
        <div style={{ borderBottom: "thin solid gray", paddingBottom: "25px" }}>
            <h5>{name}</h5>
            <p><strong>{price}</strong></p>
            <button onClick={""}>REMOVE ONE</button>
            <button onClick={""}>REMOVE ALL</button>
        </div>
    );
}

export default CartItem;