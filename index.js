const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const createHTML = require("./lib/createHTML");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

async function buildATeam() {
    let team = [];
    let managerResponse = await prompts.managerPrompt();
    let manager = new Manager(
        managerResponse["manager_name"],
        managerResponse["manager_ID"],
        managerResponse["manager_email"],
        managerResponse["manager_office"]
    );
    team.push(manager);

    let employeeReponse;
    let employee;
    let addEmployees = await prompts.continuePrompt();
    addEmployees = addEmployees["addAnother"];
    console.log(addEmployees);

    while (addEmployees === "Yes") {
        employeeReponse = await prompts.employeePrompt();
        if (employeeReponse.employee_role === "Engineer") {
            employee = new Engineer(
                employeeReponse["employee_name"],
                employeeReponse["employee_ID"],
                employeeReponse["employee_email"],
                employeeReponse["employee_github"]
            );
        } else {
            employee = new Intern(
                employeeReponse["employee_name"],
                employeeReponse["employee_ID"],
                employeeReponse["employee_email"],
                employeeReponse["employee_school"]
            );
        }

        team.push(employee);
        addEmployees = await prompts.continuePrompt();
        addEmployees = addEmployees["addAnother"];
    }

    fs.writeFileSync(path.resolve("./dist/index.html"), "");
    createHTML(team);
}

function initTest() {
    console.log(process.cwd());
    fs.copyFileSync(path.resolve("./dist/index.html"));
}

initTest();
