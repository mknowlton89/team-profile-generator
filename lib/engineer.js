const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.gitHubUser = gitHubUser;
    }
    getRole = () => 'Engineer';
}

module.exports = Engineer;