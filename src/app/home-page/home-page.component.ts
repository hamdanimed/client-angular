import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransfersService } from 'src/services/transfers-service/transfers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router:Router,private transfersService:TransfersService){}

  price=1000000;

  transfers:any=[];
  customerEmail="hamdanimee@gmail.com";
  ngOnInit(){
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

  toOperationsHistory(){
    this.router.navigate(['operations'])
  }

  toTransferMoney(){
    this.router.navigate(['transferMoney'])
  }

  toAddBeneficiary(){
    this.router.navigate(['addBeneficiary'])
  }

}
