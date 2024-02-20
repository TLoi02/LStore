import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{
  quantity: number = 1;
  productDetail : Product | undefined;
  productList : Product[] = [];
  idProduct : number = 0;
  
  constructor(private productService:ProductService, private cartService:CartService, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.idProduct = Number(this.route.snapshot.paramMap.get('id'));

    //getListRecomment
    this.productList = this.productService.getRecommentProducts();
    //get product detail
    this.productDetail = this.productService.getProductDetail(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  handleAddToCart(product : Product):void{
    this.cartService.addToCart(product);
    this.quantity = 1;
    this.showAddedToCartAlert(product.title);
  }

  private showAddedToCartAlert(productName: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `${productName} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
