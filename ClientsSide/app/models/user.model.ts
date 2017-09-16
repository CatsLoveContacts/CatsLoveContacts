export class User {
    constructor(
        public id?: number,
        public password?: string,
        public firstname?: string,
        public surname?: string,
        public birthday?: Date,
        public email?: string,
        public website?: string,
        public phone?: string,
        public active?: boolean) { }
}