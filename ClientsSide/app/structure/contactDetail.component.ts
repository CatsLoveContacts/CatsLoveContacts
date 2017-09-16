import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Repository } from "../models/repository";
import { Contact } from "../models/contact.model";

@Component({
    selector: "contact-detail",
    templateUrl: "contactDetail.component.html"
})
export class ContactDetailComponent {
    constructor(private repo: Repository, router: Router, activeRoute: ActivatedRoute) {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getContact(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get contact(): Contact {
        return this.repo.contact;
    }
}