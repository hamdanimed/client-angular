import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {

  constructor(private router:Router){}

  add(){
    this.router.navigate(['home']);
  }

}
