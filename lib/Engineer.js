// engineer constructor extends employee constructor 
const Employee = require('./Employee');

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor(name, id, github) {
         // calling employee constructor 
        super(name, id, email);
    
        this.github = github;
    }

    gitGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.export = Engineer;