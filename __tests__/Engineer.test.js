const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

// What does this test need to do - When I create a new manager, I want to see that object created, and I want to make sure it's added to the array.

describe('Engineer', () => {
    it('should create a new Engineer class with a name, id, email, gitHubUser', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const gitHubUser = "mknowlton89"

        // Act
        const engineer = new Engineer(name, id, email, gitHubUser);

        // Assert
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.gitHubUser).toEqual(gitHubUser);
    });

    it('should create a new Engineer class with a name, id, email', () => {

        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';

        // Act
        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });

    it('should create an Engineer class with a method of getrole() that should return "engineer"', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const gitHubUser = "mknowlton89"

        // Act
        const engineer = new Engineer(name, id, email, gitHubUser);

        expect(engineer.getRole()).toEqual("Engineer");

    });
})