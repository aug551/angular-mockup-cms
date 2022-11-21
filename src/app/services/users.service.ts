import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import users from '../data/users.json';

export type User = {
  id?: number,
  firstName?: string,
  lastName?: string,
  phone_number?: number,
  email?: string,
  password?: string,
  building?: string,
  unit?: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: 1,
    email: 'john.doe@example.com',
    password: 'password',
    firstName: 'John',
    lastName: 'Doe',
    phone_number: 1231231234,
    building: 'Areve 1',
    unit: '101',
  });

  // user: BehaviorSubject<User> = new BehaviorSubject<User>({
  //   id: 1,
  //   email: 'john.doe@example.com',
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   phone_number: 1231231234,
  //   building: 'Areve 1',
  //   unit: '101',
  // });

  constructor() { }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  getUserById(userId: number): User {
    return users.users.find(user => user.id = userId) as User;
  }


  setUser(user: User): void {
    // // for demo purposes
    // let tempUser: User = {
    //   id: 1,
    //   email: 'john.doe@example.com',
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   phone_number: 1231231234,
    //   building: 'Areve 1',
    //   unit: '101',
    // }
    // this.user.next(tempUser);
    this.user.next(user);
  }

  logout(): void {
    let tempUser: User = {

    }
    this.user.next(tempUser);
  }

  login(email: string, password: string): User | undefined {
    let loggedUser;

    for (let user of users.users) {
      if (user.email === email && user.password === password) {
        loggedUser = user;
        this.setUser(user);
        break;
      }
    }

    return loggedUser;

  }

}
