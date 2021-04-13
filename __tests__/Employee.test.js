const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

// What does this test need to do - When I create a new manager, I want to see that object created, and I want to make sure it's added to the array.

describe('Employee', () => {
    it('should create a new Employee class with a name, id, email when a new Manager is created', () => {

        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const officeNumber = 1;

        // Act
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
    });

    it('should create a new Employee class with a name, id, email when a new Engineer is created', () => {

        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const gitHubUser = 'mknowlton89';

        // Act
        const engineer = new Manager(name, id, email, gitHubUser);

        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
    });

    it('should create a new Employee class with a name, id, email when a new Intern is created', () => {

        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const internSchool = "Georgia Tech"

        // Act
        const intern = new Manager(name, id, email, internSchool);

        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
    });

    // it('should create an Engineer class with a method of getrole() that should return "engineer"', () => {
    //     // Arrange
    //     const name = 'Michael';
    //     const id = 1;
    //     const email = 'michael@michael.com';
    //     const gitHubUser = "mknowlton89"

    //     // Act
    //     const engineer = new Engineer(name, id, email, gitHubUser);

    //     expect(engineer.getRole()).toEqual("Engineer");

    // });
})