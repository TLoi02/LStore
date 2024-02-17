import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login():boolean {
    //handle call backend to get jwt 

    const token = 'generated_jwt_token';
    this.storeTokens(token);

    //return type for ui
    return this.isLoggedIn();
  }

  logout():void {
    //handle call backend to remove jwt
    
    this.removeTokens();
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
}
