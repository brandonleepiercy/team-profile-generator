//Importing the methods and properties from the Employee Class
const Employee = require("./Employee");

//Extending the employee class with the Engineer Class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name,id,email);
        this.github=github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log("engineer");
    }
}
