import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

    constructor() { }

    beneficiaries=[
      {"timestamp":1703954497,"LastName":"Jaa","FirstName":"ikrame","Phone":+212600000000},
      {"timestamp":1703945878,"LastName":"Hader","FirstName":"sanae","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"lamiaa","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"mouad","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"ahmed","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"ahmed","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"ahmed","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"ahmed","Phone":+212000000000},
      {"timestamp":1703945878,"LastName":"Imani","FirstName":"ahmed","Phone":+212000000000},
    ]
  
    getBeneficiaries(){
      return this.beneficiaries.sort((a, b) => b.timestamp - a.timestamp);
    }
}
