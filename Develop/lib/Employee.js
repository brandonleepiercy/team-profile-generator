//Class to be exported which provides the basis for every employee generation
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email=email;
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log("employee")
    }
}
module.exports = Employee;