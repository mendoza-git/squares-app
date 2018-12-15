import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';

const appRoutes: Routes = [
  { 
    path: 'mcquares-lobby',
    component: LobbyComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
