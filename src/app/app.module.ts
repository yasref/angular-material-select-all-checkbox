import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatCheckboxModule } from '@angular/material/checkbox';
 
 
@NgModule({
  imports:      [
    MatSelectModule,
    MatCheckboxModule, 
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
