import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Repository } from "../models/repository";
import { Contact } from "../models/contact.model";

@Component({
    selector: "dashboard-contact-list",
    templateUrl: "contactList.component.html"
})
export class ContactListComponent{
    constructor(private repo: Repository, private router: Router) {}

    get contacts(): Contact[] {
        if (this.repo.contacts != null && this.repo.contacts.length != null && this.repo.contacts.length > 0) {
            let pageIndex = (this.repo.pagination.currentPage -1) * this.repo.pagination.contactsPerPage;
            return this.repo.contacts.slice(pageIndex, pageIndex + this.repo.pagination.contactsPerPage);
        }
    }

    selectContact(id: number) {
        this.repo.getContact(id);
        this.router.navigateByUrl("condet");
    }
    deleteContact(id: number) {
        this.repo.deleteContact(id);
    }
}