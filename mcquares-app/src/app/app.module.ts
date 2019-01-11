import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyPlayButtonComponent } from '../app/lobby/features/lobby-play-button/lobby-play-button.component';
import { LobbyPinButtonComponent } from './lobby/features/lobby-pin-button/lobby-pin-button.component';
import { LoadingSquaresComponent } from './shared/components/loading-squares/loading-squares.component';
import { LockerRoomComponent } from './locker-room/locker-room.component';
import { DimensionsComponent } from './locker-room/features/dimensions/dimensions.component';

const appRoutes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'locker-room', component: LockerRoomComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LobbyPlayButtonComponent,
    LobbyPinButtonComponent,
    LoadingSquaresComponent,
    LockerRoomComponent,
    DimensionsComponent
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
