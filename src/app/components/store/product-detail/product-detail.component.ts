import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  quantity: number = 1;
  productList : any[] = [];
  
  constructor(private productService:ProductService) {}

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
}
