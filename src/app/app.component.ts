import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    title = 'angularProject2A';


constructor(public authentication: AuthenticationService, public httpClient: HttpClient){

}



  logOut() {
    this.authentication.logout();
  }

  
  

  
}


