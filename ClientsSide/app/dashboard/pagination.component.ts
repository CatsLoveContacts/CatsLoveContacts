import { Component } from "@angular/core";
import { Repository } from "../models/repository";

@Component({
    selector: "dashboard-pagination",
    templateUrl: "pagination.component.html"
})
export class PaginationComponent{
    constructor(private repo: Repository) {}

    get current(): number {
        return this.repo.pagination.currentPage;
    }
    get pages(): number[] {
        if (this.repo.contacts != null) {
            return Array(Math.ceil(this.repo.contacts.length / this.repo.pagination.contactsPerPage))
                .fill(0).map((x, i) => i + 1);
        } else {
            return [];
        }
    }
    changePage(newPage: number) {
        this.repo.pagination.currentPage = newPage;
    }

}