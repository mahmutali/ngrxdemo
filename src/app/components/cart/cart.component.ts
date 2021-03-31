import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { AddProduct, RemoveProduct } from 'src/app/store/actions/cart-actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Product[];
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
      this.store.select("cartReducer").subscribe(state=>this.cart = state);
  }

  removeFromCart(product : Product){
      this.store.dispatch(new RemoveProduct(product))
  }

}
