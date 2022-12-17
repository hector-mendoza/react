import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 50
        },
        {
            id: 2,
            name: "Product 2",
            price: 55
        },
        {
            id: 3,
            name: "Product 3",
            price: 90
        }
    ],
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let newItem = state.products.find((product) => product.id === action.payload);

            // console.log(newItem);

            // search if Item is already in the cart
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ?
                // if item already exists in the cart add an item to quantity
                {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                :
                // if this is a new item
                // return what the state already has + the cart with existent items + new item
                {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...newItem,
                            quantity: 1
                        },
                    ],
                }
        }

        case TYPES.REMOVE_ONE_FROM_CART: { }

        case TYPES.REMOVE_ALL_FROM_CART: { }

        case TYPES.CLEAR_CART: { }

        default:
            return state;
    }
}