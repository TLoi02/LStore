import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  productList : any[] = [];
  
  constructor(private productService:ProductService, private authService: AuthenticationService, private _snackBar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  handleLogout():void{
    this.authService.logout();
    this.router.navigate(['/']);
    this._snackBar.open('Logout Success', 'Close', { duration: 2000 }); 
  }
}
