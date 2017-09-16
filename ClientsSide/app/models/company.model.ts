import { Contact } from "./contact.model";

export class Company {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public website?: string,
        public phone?: string,

        public contacts?: Contact) { }
}