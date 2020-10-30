
var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var render = require("./lib/htmlRenderer");

const employees = [];

function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "EmployeeRole",
            message: "What's your position in the team?",
            choices: ["Manager", "Intern", "Engineer", "No other roles in the team"]
        }
    ]).then(userChoice => {

        switch (userChoice.EmployeeRole) {
            case "Manager":
                getManager();
                break;
            case "Intern":
                getIntern();
                break;
            case "Engineer":
                getEngineer();
                break;
            case "No other roles in the team":
                render(employees);
                break;
        }
    })

    // get manager in the team function 
    function getManager() {
        inquirer.prompt([

            {
                type: "input",
                message: "What's your name?",
                name: "emoplyeeName"
            },

            {
                type: "input",
                message: "What'syour employee ID?",
                name: "employeeID"
            },

            {
                type: "input",
                message: "What's your email?",
                name: "employeeEmail"
            },

            {
                type: "input",
                message: "What is your office number?",
                name: "employeeOfficeNumber"
            }

        ]).then(userChoice => {
            console.log(userChoice);

            const manager = new Manager(userChoice.emoplyeeName, userChoice.employeeID, userChoice.employeeEmail, userChoice.employeeOfficeNumber)

            employees.push(manager)

            buildTeam();

        })


    }

    function getEngineer() {
        inquirer.prompt([

            {
                type: "input",
                message: "What's your name?",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What's your employee ID?",
                name: "engineerID"
            },

            {
                type: "input",
                message: "What's your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What's your GitHub username?",
                name: "gitHubUsername"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

            employees.push(engineer)

            buildTeam();

        })
    }

    function getIntern() {

        inquirer.prompt([

            {
                type: "input",
                message: "What's your name?",
                name: "internName"
            },

            {
                type: "input",
                message: "What's your employee ID?",
                name: "internID"
            },

            {
                type: "input",
                message: "What's your email?",
                name: "internEmail"
            },

            {
                type: "input",
                message: "Which school you attend for intern?",
                name: "internSchool"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

            employees.push(intern)

            buildTeam();
        })
    }
}

module.exports = employees

buildTeam();

