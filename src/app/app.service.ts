import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  users = [
    {
      id: 1,
      age: 24,
      name: 'Collinewait',
    },
    {
      id: 2,
      age: 25,
      name: 'Redman',
    },
    {
      id: 3,
      age: 32,
      name: 'Koko',
    },
  ];
  getUsers() {
    return of(this.users);
  }
}
