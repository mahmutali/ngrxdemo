import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { AddProduct } from 'src/app/store/actions/cart-actions';

import * as Cart from '../../store/actions/cart-actions'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  products : Product[] = [
    {id:1, name:"Elma"},
    {id:2, name:"Armut"},
    {id:3, name:"Karpuz"},
    {id:4, name:"Kiraz"},
    {id:5, name:"Çilek"},
  ]

  constructor(private activatedRoute:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
    this.getDetail()
  }

  getDetail(){
    this.activatedRoute.params.subscribe(params=>{
        let detail = this.products.find(p=>p.id==params["id"])
        this.product = detail
    })
  }

  addToCart(product: Product){
    this.store.dispatch(new Cart.AddProduct(product))
  }

}
