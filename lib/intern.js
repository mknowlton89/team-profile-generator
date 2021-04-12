const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getRole = () => 'Engineer';
}

module.exports = Intern;