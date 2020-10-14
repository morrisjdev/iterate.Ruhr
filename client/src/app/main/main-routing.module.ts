import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {JoinComponent} from './join/join.component';
import {GameComponent} from './game/game.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'game/:gameId', component: JoinComponent },
  { path: 'game/:gameId/:player', component: GameComponent },
  { path: '**', redirectTo: 'start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
