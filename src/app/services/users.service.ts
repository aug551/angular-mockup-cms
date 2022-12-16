import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, iif } from 'rxjs';
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
  user: BehaviorSubject<User> = new BehaviorSubject<User>({});

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
    // let user = users.users.find(user => user.id = userId) as User;

    for (let i = 0; i < users.users.length; i++) {
      if (users.users[i].id == userId) {
        return users.users[i];
      }
    }

    return {};
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

  login(email: string, password: string): User | number {
    let loggedUser;

    for (let user of users.users) {
      if (user.email === email && user.password === password) {
        loggedUser = user;
        this.setUser(user);
        break;
      }
    }

    if (!loggedUser) {
      return 400;
    }

    return loggedUser;

  }

}
