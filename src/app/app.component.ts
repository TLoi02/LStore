import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isLogin:boolean = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn();
  }

  
}
