import { NgModule } from "@angular/core";
import { Repository } from "./repository";

//decorator
@NgModule({
    providers: [Repository]
})

//feature module
export class ModelModule { }
