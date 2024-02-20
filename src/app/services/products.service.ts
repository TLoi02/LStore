import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private productList: Product[] = [
        {
          id: 1,
          title: 'Product 1',
          image: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 10.99,
          salePercent: null
        },
        {
          id: 2,
          title: 'Product 2',
          image: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 20.49,
          salePercent: null
        },
        {
          id: 3,
          title: 'Product 3',
          image: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 15.79,
          salePercent: 20
        },
    ];

    constructor() { }

    getProducts():Product[]{
        return this.productList;
    }

    //Handle convert to Detail DTO
    getProductDetail(id: number): Product | undefined {
      return this.productList.find(product => product.id === id);
    }

    getRecommentProducts():Product[]{
      return this.productList;
    }

}
