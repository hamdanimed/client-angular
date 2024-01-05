import { Component } from '@angular/core';
import { TransfersService } from 'src/services/transfers-service/transfers.service';

@Component({
  selector: 'app-transfers-page',
  templateUrl: './transfers-page.component.html',
  styleUrls: ['./transfers-page.component.css']
})
export class TransfersPageComponent {
  constructor(private transfersService:TransfersService){}

  transfers:any=[];
  ngOnInit(){
    this.transfers=this.transfersService.getTransfers();
  }
}
