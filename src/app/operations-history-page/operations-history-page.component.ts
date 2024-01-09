import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransfersService } from 'src/services/transfers-service/transfers.service';

@Component({
  selector: 'app-operations-history-page',
  templateUrl: './operations-history-page.component.html',
  styleUrls: ['./operations-history-page.component.css']
})
export class OperationsHistoryPageComponent {
  constructor(private transfersService:TransfersService,private router:Router){}

  transfers:any=[];
  customerEmail="hamdanimee@gmail.com";
  ngOnInit(){
    //the transfers in which the customer is involved as creditor or debitor (kaywsloh floss [+] ola kaysift floss [-])
    this.transfersService.getCustomerTransfersAsCustomerAndBeneficiary(this.customerEmail).subscribe((response:any)=>{
      response.forEach((t:any) => {
        let sign="-";
        if(t["beneficiary"]["email"]===this.customerEmail){
            sign="+";
        }
        this.transfers.push({...t,sign:sign})
      });
      console.log(this.transfers)
    });
  }

  toOperationDetail(){
    this.router.navigate(['operation-detail'])
  }
}
