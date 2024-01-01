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
}
