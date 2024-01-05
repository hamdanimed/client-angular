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

  ngOnInit(){
    this.transfers=this.transfersService.getTransfers().slice(0,4)
  }

  toOperationsHistory(){
    this.router.navigate(['operations'])
  }

  toTransferMoney(){
    this.router.navigate(['transferMoney']);
  }
  toTransfers(){
    this.router.navigate(['transfers']);
  }
  toAdd(){
    this.router.navigate(['addBeneficiary']);
  }
}
