import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeAddUser(){
    this.router.navigate(['users',{outlets: {adduser: null}}]);
  }

}
