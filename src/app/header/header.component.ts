import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}

  toHome(){
    this.router.navigate(['home'])
  }
  toLogin(){
    this.router.navigate(['login']);
  }
  toOperationHistory(){
    this.router.navigate(['operations'])
  }
  toMyTransfers(){
    this.router.navigate(['transfers'])
  }
  toTransferMoney(){
    this.router.navigate(['transferMoney'])
  }
  toMyBeneficaries(){
    this.router.navigate(['beneficiaries'])
  }
}
