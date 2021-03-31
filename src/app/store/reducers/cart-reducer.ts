import { Product } from "src/app/models/product";
import { CartActions, CartActionTypes } from "../actions/cart-actions";


export let initialState : Product[] = [];

export function cartReducer(state = initialState, action:CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return [...state,action.payload]
        case CartActionTypes.REMOVE_PRODUCT:
            let product = action.payload
            return state.filter((p)=>p.id!==product.id)
        default:
            state;
    }
}