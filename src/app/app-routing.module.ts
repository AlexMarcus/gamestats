import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { StatsComponent } from './components/stats/stats.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RecordGameComponent } from './components/record-game/record-game.component';
import { UsersComponent } from './components/users/users.component';
import { GamesComponent } from './components/games/games.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stats',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      
    ]
  },
  {
    path: 'add_user',
    component: AddUserComponent
  },
  {
    path: 'games',
    component: GamesComponent,
    children: [
      
    ]
  },
  {
        path: 'add_game',
        component: AddGameComponent
  },
  {
    path: 'record',
    component: RecordGameComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
