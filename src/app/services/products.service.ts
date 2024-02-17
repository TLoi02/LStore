import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private productList: any[] = [
        {
          id: 1,
          name: 'Product 1',
          imageUrl: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 10.99,
          sale: null
        },
        {
          id: 2,
          name: 'Product 2',
          imageUrl: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 20.49,
          sale: null
        },
        {
          id: 3,
          name: 'Product 3',
          imageUrl: 'https://media.paulsmith.com/dam/products/w_auto,c_scale/q_80/STILL/GRB/GRB-MERC-AXSING-92/GRB-MERC-AXSING-92-0_10.jpg',
          price: 15.79,
          sale: 20
        },
    ];

    constructor() { }

    getProducts():any[]{
        return this.productList;
    }
}
