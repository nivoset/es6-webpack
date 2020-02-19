import Person from './person.js';

export const people = Object.freeze([
    new Person("Art"),
    new Person("Ben"),
    new Person("Bill"),
    new Person("Ken"),
    new Person("Charit"),
    new Person("Mike"),
    new Person("Sirisha", "Tester"),
]);

export const listOfPeople = people.map(person => person.getName());
export const listOfJobs = people.map(person => person.getJob());
export const setOfJobs = new Set(people.map(person => person.getJob()));

