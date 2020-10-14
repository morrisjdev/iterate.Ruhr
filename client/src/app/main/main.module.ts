import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { JoinComponent } from './join/join.component';


@NgModule({
  declarations: [StartComponent, GameComponent, JoinComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
