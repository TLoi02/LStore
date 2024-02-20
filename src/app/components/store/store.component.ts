import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit{
  productList : Product[] = [];
  
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  
}
