const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, ghUsername) {
        super(name, id, email)
        this.github = ghUsername
        this.role = "Engineer"
    }
    gitGithub() {
        return this.github
    }
    getRole() {
        return "Engineer";
    }
}

module.export = Engineer