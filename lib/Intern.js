const employee = require("./employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    get getSchool() {
        return this.school;
    }
}

module.exports = Intern;
