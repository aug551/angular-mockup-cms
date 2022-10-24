import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import contractorsdata from '../../data/contractors.json';

export type Contractor = {
  id: number,
  name?: string,
  companyName: string,
  services: number[]
}

// export type User = {
//   id?: number,
//   firstName?: string,
//   lastName?: string,
//   phone_number?: number,
//   email?: string,
//   building?: string,
//   unit?: string
// }

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {
  contractors: BehaviorSubject<Contractor[]> = new BehaviorSubject<Contractor[]>(contractorsdata.contractors);

  constructor() { }

  getContractors(): Observable<Contractor[]> {
    return this.contractors.asObservable();
  }
}
