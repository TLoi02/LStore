import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());
  
  constructor() { }

  login():void {
    //handle call backend to get jwt 

    const token = 'generated_jwt_token';
    this.storeTokens(token);

    //return type for ui
    this.loggedIn.next(true);
  }

  logout():void {
    //handle call backend to remove jwt
    
    this.removeTokens();
    this.loggedIn.next(false);
  }

  private storeTokens(tokens:any):void{
    localStorage.setItem('jwtToken', tokens);
  }

  private removeTokens():void{
    localStorage.removeItem('jwtToken');
  }

  isLoggedIn():boolean{
    if (this.getJwtToken()){
        return true;
    }
    return false;
  }

  getJwtToken():any{
    return localStorage.getItem("jwtToken");
  }

  isAuthenticated(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }
}
