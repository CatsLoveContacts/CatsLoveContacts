export class Filter {
    company?: string;
    search?: string;
    related: boolean = false;

    reset() {
        this.company = this.search = null;
        this.related = false;
    }
}

export class Pagination {
    contactsPerPage: number = 5;
    currentPage = 1;
}