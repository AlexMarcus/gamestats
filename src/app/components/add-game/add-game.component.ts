import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeAddGame(){
    this.router.navigate(['games',{outlets: {addgame: null}}]);
  }

}
