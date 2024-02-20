import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CartService } from './services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLogin:boolean = true;
  cartItemCount: number = 0;
  email: string = '';

  constructor(private authService: AuthenticationService, private cartService : CartService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((loggedIn: boolean) => {
      this.isLogin = loggedIn;
    });
    this.cartService.getTotalQuantity().subscribe((value: number) => {
      this.cartItemCount = value;
    });
  }

  subscribe(): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(this.email)) {
      //handle send mail to backend handle

      this.email = '';
      this.showSuccessAlert();
    } else {
      this.showErrorAlert();
    }
  }

  showSuccessAlert(): void {
    Swal.fire({
      icon: 'success',
      title: 'Subscribe Success',
      text: 'You have successfully subscribed to our newsletter!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  showErrorAlert(): void {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      showConfirmButton: false,
      timer: 1500
    });
  }

  // subscribe(): void {
  //   console.log(this.email)

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Subscribe Success',
  //     text: 'You have successfully subscribed to our newsletter!',
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // }
}
