import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsAService {

  constructor(private httpClient: HttpClient) { }


  private urlAPI = 'http://localhost:8080';//http://elasticbeanproject1a-env.eba-g57rzbfc.us-east-1.elasticbeanstalk.com/test

  sendTestGetRequest() {
    this.httpClient.get(this.urlAPI).subscribe((res) => {
      console.log(res);
    });
   
  };

}
