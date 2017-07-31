import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { StatsComponent } from './components/stats/stats.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RecordGameComponent } from './components/record-game/record-game.component';
import { UsersComponent } from './components/users/users.component';
import { GamesComponent } from './components/games/games.component'

@NgModule({
  declarations: [
    AppComponent,
    AddGameComponent,
    StatsComponent,
    PageNotFoundComponent,
    AddUserComponent,
    RecordGameComponent,
    UsersComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
