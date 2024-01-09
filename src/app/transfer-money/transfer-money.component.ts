import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {

  
  constructor(private router:Router){}

  send(){
    this.router.navigate(['home']);
  }


}
