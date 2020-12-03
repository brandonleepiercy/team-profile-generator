//Importing the methods and properties from the Employee Class
const Employee = require("./Employee");

//Extending the employee class with the Engineer Class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name,id,email);
        this.github=github;
    }

    getGithub() {
        return(this.github);
    }

    getRole() {
        return("Engineer");
    }
}
module.exports = Engineer;