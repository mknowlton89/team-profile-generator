const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

// What does this test need to do - When I create a new manager, I want to see that object created, and I want to make sure it's added to the array.

describe('Manager', () => {
    it('should create a new Manager class with a name, id, email, officeNumber', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const officeNumber = 1;

        // Act
        const manager = new Manager(name, id, email, officeNumber);

        // Assert
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
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

    it('should create a Manager class with a method of getrole() that should return "manager"', () => {
        // Arrange
        const name = 'Michael';
        const id = 1;
        const email = 'michael@michael.com';
        const officeNumber = 1;

        // Act
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getRole()).toEqual("Manager");

    });
})