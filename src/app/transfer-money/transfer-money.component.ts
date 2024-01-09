import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {

  amount=0;
  feetype="";
  constructor(private router:Router, private httpClient: HttpClient){}

  send(){
    const searchParams = {
      "operationBody":{
          "transferType":"EMISSION",
          "operationType":"APPLICATION_MOBILE"
      },
      "transferBody":{
          "senderId":1,
          "receiverId":1,
          "amount":this.amount
      },
      "fraisType":this.feetype
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    console.log(searchParams);

    const apiUrl = `http://localhost:8091/operation/emission`;
    this.httpClient.post(apiUrl, searchParams,{headers}).subscribe(
      (response: any) => {
        
        // this.router.navigate(['/otp-verification', response['transferRef']]);
        console.log(response);
      },
      );
  }


}
