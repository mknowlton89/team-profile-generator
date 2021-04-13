const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

// What does this test need to do - When I create a new manager, I want to see that object created, and I want to make sure it's added to the array.

describe('Intern', () => {
    it('should create a new Intern class with a name, id, email, internSchool', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const internSchool = "Georgia Tech"

        // Act
        const intern = new Intern(name, id, email, internSchool);

        // Assert
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.internSchool).toEqual(internSchool);
    });

    it('should create a new Employee class with a name, id, email', () => {

        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';

        // Act
        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });

    it('should create a Intern class with a method of getrole() that should return "intern"', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const internSchool = "Georgia Tech"

        // Act
        const intern = new Intern(name, id, email, internSchool);

        expect(intern.getRole()).toEqual("Intern");

    });
})