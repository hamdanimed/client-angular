import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> jaa2


@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
<<<<<<< HEAD

  constructor(private router:Router){}

  add(){
    this.router.navigate(['home']);
  }

=======
  customerId: number=1;
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  constructor(private router:Router,private http: HttpClient){}

  add() {
    const newBeneficiary = {
      customer: {
        customerId: this.customerId},
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      customerId: this.customerId
    };

    this.http.post('http://localhost:8092/beneficiaries', newBeneficiary).subscribe(
      (response) => {
        console.log('Beneficiary added successfully', response);
        this.router.navigate(['home']);      },
      (error) => {
        console.error('Error adding beneficiary', error);
      }
    );
  }

  toTransfer(){
    this.router.navigate(['transferMoney']);
    
  }
  
>>>>>>> jaa2
}
