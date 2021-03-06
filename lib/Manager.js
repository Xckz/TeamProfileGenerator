const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    get getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
