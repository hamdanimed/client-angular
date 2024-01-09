import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}

  logout() {
    // Clear the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    //logic redirecting to the login page
    this.router.navigate(['login']);
  }

  toHome(){
    this.router.navigate(['home'])
  }
  toProfil(){
    this.router.navigate(['profil'])
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
