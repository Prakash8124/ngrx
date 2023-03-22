import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AddewComponent } from './addew/addew.component';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from './ngrx/table.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({studentData: studentReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
