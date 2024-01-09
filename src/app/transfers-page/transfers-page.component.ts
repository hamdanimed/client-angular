import { Component } from '@angular/core';
import { TransfersService } from 'src/services/transfers-service/transfers.service';

@Component({
  selector: 'app-transfers-page',
  templateUrl: './transfers-page.component.html',
  styleUrls: ['./transfers-page.component.css']
})
export class TransfersPageComponent {
  constructor(private transfersService:TransfersService){}

  customerTransfers:any=[];
  toBeServedCustomerTransfers:any=[];
  servedCustomerTransfers:any=[];

  toBeServed=true;
  served=false;

  ngOnInit(){
    this.transfersService.getCustomerTransfers(353).subscribe((response:any)=>{
      console.log(response);
      this.customerTransfers=response;
      this.servedCustomerTransfers=this.customerTransfers.filter((t:any)=>{
        return t["transferDTO"]["status"]=="SERVIE"
      })
      this.toBeServedCustomerTransfers=this.customerTransfers.filter((t:any)=>{
        return t["transferDTO"]["status"]=="A_SERVIR";
      })
      console.log(this.servedCustomerTransfers,this.toBeServedCustomerTransfers);
    });
  }

  toggleToBeServed(){
    this.toBeServed=!this.toBeServed;
    if(this.served==true && this.toBeServed==true){
      this.toggleServed();
    }
  }
  toggleServed(){
    this.served=!this.served;
    if(this.toBeServed==true && this.served==true){
      this.toggleToBeServed();
    }
  }

}
