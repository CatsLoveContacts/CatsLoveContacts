import { Contact } from "./contact.model";
import { Company } from "./company.model";
import { Filter, Pagination } from "./configClasses.repository";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const contactUrl = "/api/contacts";
const companyUrl = "/api/companies";

@Injectable()
export class Repository {
    private filterObject = new Filter();
    private paginationObject = new Pagination();

    constructor(private http: Http) {
        //this.getContact(2);
        //this.getCompany(1);
        this.filter.related = true;
        this.getContacts();
    }

    getContact(id: number) {
        this.sendRequest(RequestMethod.Get, contactUrl + "/" + id)
            .subscribe(response => { this.contact = response });
    }
    getContacts() {
        let url = contactUrl + "/" + "?related=" + this.filter.related;
        if (this.filter.company) {
            url += "&company=" + this.filter.company;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }

        this.sendRequest(RequestMethod.Get, url)
            .subscribe(response => { 
                this.contacts = response;
                this.pagination.currentPage = 1 });
    }
    createContact(c: Contact) {
        let data = {
            firstname: c.firstname,
            surname: c.surname,
            birthday: c.birthday,
            email: c.email,
            website: c.website,
            phone: c.phone,

            company: c.company ? c.company.id : 0
        };

        this.sendRequest(RequestMethod.Post, contactUrl, data)
            .subscribe(response => {
                c.id = response;
                this.contacts.push(c);
            });
    }
    replaceContact(c: Contact) {
        let data = {
            firstname: c.firstname,
            surname: c.surname,
            birthday: c.birthday,
            email: c.email,
            website: c.website,
            phone: c.phone,

            company: c.company ? c.company.id : 0
        };

        this.sendRequest(RequestMethod.Put, contactUrl + "/" + c.id, data)
            .subscribe(response => this.getContacts());
    }
    deleteContact(id: number) {
        this.sendRequest(RequestMethod.Delete, contactUrl + "/" + id)
            .subscribe(response => this.getContacts());
    }

    getCompany(id: number) {
        this.sendRequest(RequestMethod.Get, companyUrl + "/" + id)
            .subscribe(response => { this.company = response });
    }
    getCompanies()  {
        this.sendRequest(RequestMethod.Get, companyUrl)
            .subscribe(respone => { 
                this.companies = respone });
    }
    createCompany(c: Company) {
        let data = {
            name: c.name,
            email: c.email,
            website: c.website,
            phone: c.phone,
            contact: null
        };

        this.sendRequest(RequestMethod.Post, companyUrl, data)
            .subscribe(response => {
                c.id = response;
                this.companies.push(c);
            });
    }
    replaceCompany(c: Company) {
        let data = {
            name: c.name,
            email: c.email,
            website: c.website,
            phone: c.phone
        };

        this.sendRequest(RequestMethod.Put, companyUrl + "/" + c.id, data)
            .subscribe(response => this.getCompanies());
    }
    deleteCompany(id: number) {
        this.sendRequest(RequestMethod.Delete, companyUrl + "/" + id)
            .subscribe(response => this.getCompanies());
    }


    private sendRequest(verb: RequestMethod, url: string, data?: any): Observable<any> {
        return this.http.request(new Request({
            method: verb, url: url, body: data
        })).map(response => {
            return response.headers.get("Content-Lenth") != "0" ? response.json() : null;
        });
    }

    contact: Contact;
    contacts: Contact[];
    company: Company;
    companies: Company[];

    get filter(): Filter {
        return this.filterObject;
    }
    get pagination(): Pagination {
        return this.paginationObject;
    }
}