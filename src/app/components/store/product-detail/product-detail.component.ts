import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  quantity: number = 1;
  productList : any[] = [];
  
  constructor(private productService:ProductService, private cartService:CartService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  handleAddToCart():void{
    
  }
}
