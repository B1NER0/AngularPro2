import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData('blabla', 'test123');
  isAuthenticated = false;
  

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home'])
      return true;
    }

    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return signInData.getEmail() === this.mockedUser.getEmail() && signInData.getPassword() === this.mockedUser.getPassword();
  }

logout() {
  this.isAuthenticated = false;
  this.router.navigate(['']);
}

}
