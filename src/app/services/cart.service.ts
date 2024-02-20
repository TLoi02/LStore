import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductCart } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<ProductCart[]>([]);
  private totalQuantitySubject = new BehaviorSubject<number>(0);

  addToCart(product: Product): void {
    const currentItems = this.itemsSubject.getValue();
    const existingItem = currentItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem: ProductCart = { product, quantity: 1 };
      currentItems.push(newItem);
    }
    this.itemsSubject.next(currentItems);
    this.updateTotalQuantity();
  }

  private updateTotalQuantity(): void {
    const totalQuantity = this.itemsSubject.getValue().length;
    this.totalQuantitySubject.next(totalQuantity);
  }

  getCartItems(): BehaviorSubject<ProductCart[]> {
    return this.itemsSubject;
  }

  getTotalQuantity(): BehaviorSubject<number> {
    return this.totalQuantitySubject;
  }
}
