import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] = [
    {id:1, name:"Elma"},
    {id:2, name:"Armut"},
    {id:3, name:"Karpuz"},
    {id:4, name:"Kiraz"},
    {id:5, name:"Çilek"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
