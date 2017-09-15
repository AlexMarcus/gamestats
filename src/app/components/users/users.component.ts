import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service'
import {User} from '../../classes/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  users: User[];

  getUsers(): void{
    this.userService.getUsers().then((users) => this.users = users);
  }



}
