<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> jaa2
import { BeneficiariesService } from 'src/services/beneficiaries-services/beneficiaries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent {

<<<<<<< HEAD
  constructor(private BeneficiariesService: BeneficiariesService,
    private router:Router) {}

    beneficiaries:any=[];
    ngOnInit(){
      this.beneficiaries=this.BeneficiariesService.getBeneficiaries();
    }
=======
  constructor(private beneficiariesService: BeneficiariesService,
    private router:Router) {}

    beneficiaries:any=[];
    customerId = 1;
    
    ngOnInit() {
      this.getBeneficiaries();
    }
  
    getBeneficiaries() {
      this.beneficiariesService.getBeneficiariesByCustomerId(this.customerId).subscribe(
        (data) => {
          this.beneficiaries = data;
          console.log('Beneficiaries:', this.beneficiaries);
        },
        (error) => {
          console.error('Error fetching beneficiaries', error);
        }
      );
    }


    deleteBeneficiary(beneficiaryId: number) {
      this.beneficiariesService.deleteBeneficiary(beneficiaryId).subscribe(
        () => {
          console.log('Beneficiary deleted successfully');
          // Actualiser la liste des bénéficiaires après la suppression
          this.getBeneficiaries();
        },
        (error) => {
          console.error('Error deleting beneficiary', error);
        }
      );
    }

>>>>>>> jaa2
  Add(){
    this.router.navigate(['addBeneficiary']);
  }
  
}
