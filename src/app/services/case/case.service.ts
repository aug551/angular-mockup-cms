import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import casesData from '../../data/cases.json';

export type Case = {
  id: string,
  requestedBy: number,
  typeOfService: number,
  assignedContractors: number,
  building: string,
  unit: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  cases: BehaviorSubject<Case[]> = new BehaviorSubject<Case[]>(casesData.cases);

  constructor() { }

  getCases(): Observable<Case[]> {
    return this.cases.asObservable();
  }

  getCasesById(id: string): Case[] {
    return this.cases.value.filter(_case => _case.id == id);
  }

  getCasesByRequestedUser(id: number): Case[] {
    return this.cases.value.filter(_case => _case.requestedBy == id);
  }

  setCases(cases: Case[]): void {
    console.log(cases);
    this.cases.next(cases);
  }

  addCase(requestedBy: number, typeOfService: number, assignedContractors: number, building: string,
    unit: string, description: string, status: string, date_time_now: number): void {
    let numId = this.cases.value.length + 1;
    let numIdPadded = numId.toString().padStart(5, "0");
    let newId = "SRV" + numIdPadded;
    let journal = [{
      created_on: new Date().getTime(),
      created_by: requestedBy,
      comment: "Case created."
    }];


    let _case = {
      id: newId,
      requestedBy,
      typeOfService,
      assignedContractors,
      building,
      unit,
      description,
      status,
      created_on: date_time_now,
      updated_on: date_time_now,
      journal
    }
    let temp = this.cases.value;
    temp.push(_case);

    this.setCases(temp);
  }

}
