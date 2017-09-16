import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PaginationComponent } from "../dashboard/pagination.component";
import { ContactListComponent } from "../dashboard/contactList.component";
import { ContactSelectionComponent } from "../dashboard/contactSelection.component";
import { ContactTableComponent } from "../structure/contactTable.component";
import { ContactDetailComponent } from "../structure/contactDetail.component";
import { SearchFilterComponent } from "../structure/searchFilter.component";
import { NavigationComponent } from "../structure/navigation.component";

@NgModule({
  declarations: [
    ContactSelectionComponent,
    ContactListComponent,
    SearchFilterComponent,
    PaginationComponent,
    ContactTableComponent,
    ContactDetailComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [ContactSelectionComponent]
})
export class DashboardModule { }
