const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.internSchool = internSchool;
    }
    getRole = () => 'Intern';

    getSchool() {

    }
}

module.exports = Intern;