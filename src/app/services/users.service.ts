import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export type User = {
  id?: number,
  firstName?: string,
  lastName?: string,
  phone_number?: number,
  email?: string,
  building?: string,
  unit?: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>({
  });

  constructor() { }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  setUser(): void {
    // for demo purposes
    let tempUser: User = {
      id: 1,
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phone_number: 1231231234,
      building: 'Areve 1',
      unit: '101',
    }
    this.user.next(tempUser);
  }

}
