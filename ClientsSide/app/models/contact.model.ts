import { Company } from "./company.model";

export class Contact {
    constructor(
        public id?: number,
        public firstname?: string,
        public surname?: string,
        public birthday?: Date,
        public email?: string,
        public website?: string,
        public phone?: string,
    
        public company?: Company) { }
}