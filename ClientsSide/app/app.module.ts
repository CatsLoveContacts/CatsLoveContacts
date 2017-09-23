import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingConfig } from "./app.routing";
import { ModelModule } from "./models/model.module";

import { ContactTableComponent } from "./structure/contactTable.component";
import { SearchFilterComponent } from "./structure/searchFilter.component";
import { ContactDetailComponent } from "./structure/contactDetail.component";

import { DashboardModule } from "./dashboard/dashboard.module";
import { ContactSelectionComponent } from "./dashboard/contactSelection.component";

import { ErrorHandler } from "@angular/core";
import { ErrorHandlerService } from "./errorHandler.service";

const eHandler = new ErrorHandlerService();

export function handler() {
  return eHandler;
}

@NgModule({
  declarations: [
    AppComponent,
    // ContactTableComponent,
    // SearchFilterComponent,
    // ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModelModule,
    RoutingConfig,
    DashboardModule
  ],
  providers: [
    { provide: ErrorHandlerService, useFactory: handler },
    { provide: ErrorHandler, useFactory: handler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
