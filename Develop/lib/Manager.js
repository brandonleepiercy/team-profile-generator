//Importing the properties and methods from the Employee Class
const Employee = require("./Employee");

//Extending the Employee class with a Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }

    getRole() {
        return("Manager");
    }

    getOfficeNumber() {
        return(this.officeNumber);
    }
}
module.exports = Manager;