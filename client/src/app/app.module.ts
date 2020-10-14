import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SAPPHIRE_DB_OPTIONS, SapphireDbModule} from 'ng-sapphiredb';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SapphireDbModule
  ],
  providers: [
    { provide: SAPPHIRE_DB_OPTIONS, useValue: environment.sapphireDb }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
