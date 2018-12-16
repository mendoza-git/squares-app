import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyPlayButtonComponent } from '../app/lobby/features/lobby-play-button/lobby-play-button.component';
import { LobbyPinButtonComponent } from './lobby/features/lobby-pin-button/lobby-pin-button.component';

const appRoutes: Routes = [
  { 
    path: 'mcquares-lobby',
    component: LobbyComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LobbyPlayButtonComponent,
    LobbyPinButtonComponent
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
