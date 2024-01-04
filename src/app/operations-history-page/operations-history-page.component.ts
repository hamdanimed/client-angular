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
  ngOnInit(){
    this.transfers=this.transfersService.getTransfers();
  }

  toOperationDetail(){
    this.router.navigate(['operation-detail'])
  }
}
