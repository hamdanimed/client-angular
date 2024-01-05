import { Component } from '@angular/core';
import { BeneficiariesService } from 'src/services/beneficiaries-services/beneficiaries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent {

  constructor(private BeneficiariesService: BeneficiariesService,
    private router:Router) {}

    beneficiaries:any=[];
    ngOnInit(){
      this.beneficiaries=this.BeneficiariesService.getBeneficiaries();
    }
  Add(){
    this.router.navigate(['addBeneficiary']);
  }
  
}
