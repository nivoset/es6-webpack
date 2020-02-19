export default class Person {
    constructor(name, job = `Developer`, company = `Chase`) {
        this.name = name;
        this.job = job;
        this.company = company;
    }

    description() {
        return `${this.name} works for ${this.company} as a ${this.job}`
    }

    getName() {
        return this.name;
    }

    getJob() {
        return this.job;
    }

    getCompany() {
        return this.company;
    }
}