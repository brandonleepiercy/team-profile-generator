//Importing the properties and methods from the Employee Class
const Employee = require("./Employee");

//Extending the Employee class with a Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }

    getRole() {
        console.log("manager");
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
    }
}
