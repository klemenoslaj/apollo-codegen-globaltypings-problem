import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Library1Module } from 'library1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Library1Module],
  bootstrap: [AppComponent]
})
export class AppModule { }
