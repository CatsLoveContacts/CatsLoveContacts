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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
