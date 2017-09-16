import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    selector: "navigation",
    templateUrl: "navigation.component.html"
})
export class NavigationComponent {
    constructor(private repo: Repository) { }
}