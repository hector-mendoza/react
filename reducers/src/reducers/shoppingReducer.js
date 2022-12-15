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
        case TYPES.ADD_TO_CART: { }

        case TYPES.REMOVE_ONE_FROM_CART: { }

        case TYPES.REMOVE_ALL_FROM_CART: { }

        case TYPES.CLEAR_CART: { }

        default:
            return state;
    }
}