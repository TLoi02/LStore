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
    this.authService.login(); 
    this.router.navigate(['/']);
  }
}
