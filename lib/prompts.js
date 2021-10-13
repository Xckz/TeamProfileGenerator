const inquirer = require("inquirer");
const Employee = require("./tests/Employee");
const Engineer = require("./tests/Engineer");
const Intern = require("./tests/Intern");
const Manager = require("./tests/Manager");

function createManagerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the team manager?",
            name: "manager_name",
        },
        {
            type: "input",
            message: "What is the team manager's employee ID?",
            name: "manager_ID",
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "manager_email",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "manager_office",
        },
    ]);
}

function createEmployeePrompt() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Which employee would you like to add to your team?",
            name: "employee_role",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            message: "What is your employee's name?",
            name: "employee_name",
        },
        {
            type: "input",
            message: "What is your employee's ID?",
            name: "employee_ID",
        },
        {
            type: "input",
            message: "What is your employee's email?",
            name: "employee_email",
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "employee_github",
            when: (answers) => answers["employee_role"] === "Engineer",
        },
        {
            type: "input",
            message: "What school does the intern attend?",
            name: "employee_school",
            when: (answers) => answers["employee_role"] === "Intern",
        },
    ]);
}

function continuePrompt() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addAnother",
            choices: ["Yes", "No"],
        },
    ]);
    return;
}
module.exports = { createEmployeePrompt, createManagerPrompt, continuePrompt };
