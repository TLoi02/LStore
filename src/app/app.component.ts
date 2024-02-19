import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLogin:boolean = true;
  cartItemCount: number = 0;

  constructor(private authService: AuthenticationService, private cartService : CartService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((loggedIn: boolean) => {
      this.isLogin = loggedIn;
    });

   

  }

  
}
