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

            // return what the state already has + the cart with existent items + new items
            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem,
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