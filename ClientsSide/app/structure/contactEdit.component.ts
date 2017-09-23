import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Repository } from "../models/repository";
import { Contact } from "../models/contact.model";
import { Company } from "../models/company.model";

@Component({
    selector: "contact-edit",
    templateUrl: "contactEdit.component.html"
})
export class ContactEditComponent {
    constructor(private repo: Repository, router: Router, activeRoute: ActivatedRoute) {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id >> 0) {
            this.repo.getContact(id);
            this.repo.getCompanies();
        } else {
            this.repo.contact = new Contact();
            this.repo.getCompanies();
        }
    }

    get contact(): Contact {
        return this.repo.contact;
    }
    get company(): Company {
        return this.repo.company;
    }
    get companies(): Company[] {
        return this.repo.companies;
    }

    saveContact(id: number) {
        if (id) {
            console.log("replace " + id);
            this.repo.replaceContact(this.repo.contact);
        } else {
            console.log("create");
            this.createContact();
        }
    }
    createContact() {
        this.repo.createContact(this.repo.contact);
    }
    
    public setBirthday(value: Date) {
        this.contact.birthday = value;
    }
}