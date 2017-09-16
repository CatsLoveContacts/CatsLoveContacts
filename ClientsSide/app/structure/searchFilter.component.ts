import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    selector: "search-filter",
    templateUrl: "searchFilter.component.html"
})
export class SearchFilterComponent {
    constructor(private repo: Repository) { }

    setSearch(search: string) {
        this.repo.filter.search = search;
        this.repo.getContacts();
    }
}