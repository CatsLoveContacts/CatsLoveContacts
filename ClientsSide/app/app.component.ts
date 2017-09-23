import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Contact } from "./models/contact.model";
import { Company } from "./models/company.model";
import { ErrorHandlerService } from "./errorHandler.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lastError: string[];

  constructor(private repo: Repository, errorHandler: ErrorHandlerService) {
    errorHandler.errors.subscribe(error => {
      this.lastError = error;
    });
  }

  get error(): string[] {
    return this.lastError;
  }

  clearError() {
    this.lastError = null;
  }

  get contact(): Contact {
    return this.repo.contact;
  }
  get contacts(): Contact[] {
    return this.repo.contacts;
  }
  createContact() {
    this.repo.createContact(new Contact(0, "Lisa", "Zattler", new Date("7.12.92"), "elisabeth.zattler@gmail.com",
      // "zattler.com", "08178/4516", new Company(0, "Zattler GmbH", "info@zattler.com", "zattler.com")));
      "zattler.com", "08178/4516", new Company(1)));
  }
  replaceContact() {
    let c = this.repo.contacts[10];
    c.firstname = "Liza";
    c.surname = "Sattler";
    c.company = new Company(7);

    this.repo.replaceContact(c);
  }
  deleteContact() {
    this.repo.deleteContact(10002);
  }

  get company(): Company {
    return this.repo.company;
  }
  get companies(): Company[] {
    return this.repo.companies;
  }
  createCompany() {
    this.repo.createCompany(new Company(0, "CLC Solutions GmbH",
      "info@clc.com", "clc.com", "089/33333"));
  }
  replaceCompany() {
    let c = new Company(6, "ASDF AG", "asdf@clc.com", "clc.com", "089/4444");

    this.repo.replaceCompany(c);
  }
  deleteCompany() {
    this.repo.deleteCompany(10003);
  }
}
