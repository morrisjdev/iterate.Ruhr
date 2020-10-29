import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { JoinComponent } from './join/join.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [StartComponent, GameComponent, JoinComponent, DemoComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
