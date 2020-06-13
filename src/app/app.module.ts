import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputSwitchModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SatDatepickerModule,
    SatNativeDateModule
    
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
