import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiariesService {

    constructor(private http: HttpClient) { }

  
  
    getBeneficiariesByCustomerId(customerId: number): Observable<any[]> {
      const url = `http://localhost:8092/beneficiaries/beneficiaries-customer/${customerId}`;
      return this.http.get<any[]>(url);
    }
    deleteBeneficiary(beneficiaryId: number): Observable<void> {
      const url = `http://localhost:8092/beneficiaries/${beneficiaryId}`;
      return this.http.delete<void>(url);
    }
}
