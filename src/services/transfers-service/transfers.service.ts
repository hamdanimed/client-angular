import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  
  // transfers=[
    //   {"timestamp":1703954497,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  //   {"timestamp":1703945878,"sender":"Client 1","reciever":"Client 2","amount":2000},
  // ]

  constructor(private httpClient : HttpClient){}

  url="http://localhost:8091/transfers/";

  getCustomerTransfers(customerId:any): Observable<Object> {
    return this.httpClient.get(this.url+"customer-transfers/"+customerId);
  }

  getCustomerTransfersAsCustomerAndBeneficiary(customerEmail:any): Observable<Object>{
    return this.httpClient.get(this.url+"tranfersByEmail/"+customerEmail)
  }
}
