import { Injectable } from '@angular/core';

import {User} from '../classes/user'
import {USERS} from '../mock-users'

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]>{
    return Promise.resolve(USERS);
  }

  getUser(id:number): Promise<User>{
    return this.getUsers().then(users => users.find(u => u.id == id));
  }

}
