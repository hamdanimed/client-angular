import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> jaa2

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

<<<<<<< HEAD
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
=======
    constructor(private http: HttpClient) { }

  
  
    getBeneficiariesByCustomerId(customerId: number): Observable<any[]> {
      const url = `http://localhost:8092/beneficiaries/beneficiaries-customer/${customerId}`;
      return this.http.get<any[]>(url);
    }
    deleteBeneficiary(beneficiaryId: number): Observable<void> {
      const url = `http://localhost:8092/beneficiaries/${beneficiaryId}`;
      return this.http.delete<void>(url);
>>>>>>> jaa2
    }
}
