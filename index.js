const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "What position is this employee?",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the employee?",
      },
    ])
    .then(({ position, email, id, name }) => {
      switch (position) {
        case "Manager":
          // ask about office number
          inquirer
            .prompt([
              {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?",
              },
            ])
            .then(({ officeNumber }) => {
              employees.push(new Manager(name, id, email, officeNumber))

              another()
            });
          break;
        case "Intern":
          // ask about school
          break;
        case "Eningeer":
          // ask about github
          break;
        default:
        // Uh Oh
      }
    });
}
function another() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "more",
        message: "Would you like to create another employee?",
      },
    ])
    .then(({ more }) => {
      if (more) newEmployee();
      else renderHTMLFile();
    });
}
function renderHTMLFile() {
  fs.writeFileSync(
    "./index.html",
    /*html*/ `
        <ul>
            ${employees.map(
              (employee) => /*html*/ `
                <li>
                    <div>
                    <h1>${employee.getName()}</h1>
                    <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                    <p>${employee.getId()}</p>
                    <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a>
            `
            )}
        </ul>
    `
  );
}

newEmployee();
