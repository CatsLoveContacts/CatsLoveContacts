import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Repository } from "../models/repository";
import { Contact } from "../models/contact.model";

@Component({
    selector: "contact-table",
    templateUrl: "./contactTable.component.html"
})
export class ContactTableComponent {
    constructor(private repo: Repository, private router: Router) { }

    get contacts(): Contact[] {
        return this.repo.contacts;
    }

    selectContact(id: number) {
        this.repo.getContact(id);
        this.router.navigateByUrl("condet");
    }
    clearContact() {
        // this.repo.contact = new Contact(0);
        // this.router.navigateByUrl("conedi/" + this.repo.contact.id);
        this.repo.contact = new Contact();
        this.router.navigateByUrl("conedi");
    }
}