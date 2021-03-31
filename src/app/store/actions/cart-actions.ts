import { Action } from "@ngrx/store";
import { Product } from "src/app/models/product";

export enum CartActionTypes{
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT"
}


export class AddProduct implements Action{
    type: string = CartActionTypes.ADD_PRODUCT;
    constructor(public payload:Product){}
}

export class RemoveProduct implements Action{
    type: string = CartActionTypes.REMOVE_PRODUCT;
    constructor(public payload:Product){}
}

export type CartActions = AddProduct | RemoveProduct

//Reducer -- State yönetimini (CartItem[]) bu arkadaş yapıyor
//ActionType, payload


