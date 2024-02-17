import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit{
  productList : any[] = [];
  
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  
}
