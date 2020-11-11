import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { ApiRequestsAService } from '../service/API/api-requests-a.service';
import { AuthenticationService } from '../service/authentication/authentication.service';

declare function handleFileSelect(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormInValid = false;
  areCredentialsInvalid = false;

  constructor(private authentication: AuthenticationService, private API: ApiRequestsAService){
    
   }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm)
  {
    handleFileSelect();


   // this.API.sendTestGetRequest();
    if(!signInForm.valid){
      this.isFormInValid = true;
      this.areCredentialsInvalid = false;
      return;
    }

    this.checkCredentials(signInForm);
    
    
  }

  


  private checkCredentials(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    
    if(!this.authentication.authenticate(signInData)){
      this.isFormInValid = false;
      this.areCredentialsInvalid = true;

      

    }
  }

}
