import { Routes, RouterModule } from "@angular/router";
import { ContactTableComponent } from "./structure/contactTable.component";
import { ContactDetailComponent } from "./structure/contactDetail.component";
import { ContactEditComponent } from "./structure/contactEdit.component";
import { ContactSelectionComponent } from "./dashboard/contactSelection.component";

const routes: Routes = [
    { path: "contab", component: ContactTableComponent },
    { path: "condet", component: ContactDetailComponent},
    { path: "condet/:id", component: ContactDetailComponent},
    { path: "conedi/:id", component: ContactEditComponent},
    { path: "conedi", component: ContactEditComponent},
    { path: "dashboard", component: ContactSelectionComponent},
    { path: "", component: ContactSelectionComponent }
]

export const RoutingConfig = RouterModule.forRoot(routes);