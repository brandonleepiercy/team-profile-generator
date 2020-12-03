//Class to be exported which provides the basis for every employee generation
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email=email;
    }

    getName() {
        return(this.name);
    }

    getId() {
        return(this.id);
    }

    getEmail() {
        return(this.email);
    }

    getRole() {
        return("Employee")
    }
}
module.exports = Employee;