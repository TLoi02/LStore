import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private authService:AuthenticationService, private _snackBar:MatSnackBar) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  handleLogin():void{
    const isLoginSuccess = this.authService.login(); 
    
    if (isLoginSuccess) {
      this.router.navigate(['/']);
    } else {
      this._snackBar.open('Sorry Login Unsuccess', 'Close', { duration: 2000 }); 
    }
  }
}
