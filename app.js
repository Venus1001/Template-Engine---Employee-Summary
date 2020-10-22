const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let name;
let id;
let role;
let github;
let email;
let officeNumber;
let school;
const employee = [];

const promptMain = function () {
    inquirer.prompt([
        {
            type: "list",
            name: "Employee Role",
            message: "What's your position in the team?",
            choices: ["Manager", "Intern", "Engineer"]
        }
    ]).then(teamMembers => {
        console.log(teamMembers);
        role = teamMembers["Employee Role"];
        console.log(role);
        promptRole();
    })
}

const promptRole = function () {

    switch (role) {
        case "Manager":
            inquirer.prompt([
                {
                    type: "input",
                    name: "OfficeNumber",
                    message: "What's your manager's office number?"
                }
            ]).then(office => {
                console.log(office);
                officeNumber = office["Office Number"];
                console.log(officeNumber);
                promptRole2();
            })
            break;

        case "Engineer":
            inquirer.prompt([
                {
                    type: "input",
                    name: "Github userName",
                    message: "What's your engineer's Github username?"
                }
            ]).then(engineer => {
                console.log(engineer);
                github = office["Github Username"];
                console.log(github);
                promptRole2();
            })
            break;

        case "Intern":
            inquirer.prompt([
                {
                    type: "input",
                    name: "School",
                    message: "Which school you attend for your intern?"
                }
            ]).then(school => {
                console.log(school);
                schoolIntern = office["Github Username"];
                console.log(schoolIntern);
                promptRole2();
            })
            break;
            render(employee);
    }
}

const promptRole2 = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "Employee Name",
            message: "What's your employee's name?"
        },
        {
            type: "input",
            name: "Employee ID",
            message: "What's the employee ID number?",
            validate: function (val) {
                var valid = !isNaN(parseFloat(val));
                return valid || "Please enter a number"
            }
        },
        {
            type: "email",
            name: "Employee Email",
            message: "What's the employee's email address?"
        },
    ]).then(answers => {

        name = answers["Employee Name"];
        console.log(name);
        id = answers["Employee ID"];
        console.log(id);
        email = answers["Employee Email"];
        console.log(email);

        promptRole3();

    })

}

const promptRole3 = function () {

    switch (role) {

        case "Engineer":

            employees.push(new Engineer(name, id, email, github));

            promptMain();
            break;

        case "Intern":

            employees.push(new Intern(name, id, email, school));

            promptMain();
            break;

        case "Manager":

            employees.push(new Manager(name, id, email, officeNumber));

            promptMain();
            break;

    }
}


promptMain();
module.exports = employees;
