//Importing the methods and properties from the Employee Class
const Employee = require("./Employee");

//Extending the employee class with the Intern Class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name,id,email);
        this.school=school;
    }

    getSchool() {
        return(this.school);
    }

    getRole() {
        return("Intern");
    }
}
module.exports = Intern;