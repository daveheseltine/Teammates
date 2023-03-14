// Require:
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const render = require("./assets/lib/js/page-template.js");
const Manager = require("./assets/js/Manager");
const Engineer = require("./assets/js/Engineer");
const Intern = require("./assets/js/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// Define variables:
const team = [];


// Inquirer Questions:
const questions = {
  Role: [
    {
      type: "list",
      name: "role",
      message: "Please select the role of the employee:",
      choices: ["Engineer", "Intern"]
    }
  ],

  Manager: [
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email Address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Office Number:",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another employee:",
      choices: ["yes", "no (end)"]
    }
  ],

  Engineer: [
    {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email Address:",
    },
    {
      type: "input",
      name: "github",
      message: "Github address:",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another employee:",
      choices: ["yes", "no (end)"]
    }
  ],

  Intern: [
        {
      type: "input",
      name: "name",
      message: "Name:",
    },
    {
      type: "input",
      name: "id",
      message: "ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Email Address:",
    },
    {
      type: "input",
      name: "school",
      message: "School:",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another employee:",
      choices: ["yes", "no (end)"]
    }
  ]
}
  

// # Named Functions:
// ## Function to add a new employee:
function addEmployee(role) {

  // Inquirer: Manager details:
  if (role === "Manager") {
    console.log(
`================================================================================

████████╗███████╗░█████╗░███╗░░░███╗███╗░░░███╗░█████╗░████████╗███████╗░██████╗
╚══██╔══╝██╔════╝██╔══██╗████╗░████║████╗░████║██╔══██╗╚══██╔══╝██╔════╝██╔════╝
░░░██║░░░█████╗░░███████║██╔████╔██║██╔████╔██║███████║░░░██║░░░█████╗░░╚█████╗░
░░░██║░░░██╔══╝░░██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║░░░██║░░░██╔══╝░░░╚═══██╗
░░░██║░░░███████╗██║░░██║██║░╚═╝░██║██║░╚═╝░██║██║░░██║░░░██║░░░███████╗██████╔╝
░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═════╝░
                              the HTML generator
================================================================================
    
Please start by entering the Team Manager's details:`);
    inquirer.prompt(questions.Manager).then(answer => {
      let employee = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
      team.push(employee);
      if (answer.addEmployee === "yes") {
        inquirer.prompt(questions.Role).then(answer => {
          addEmployee(answer.role)
        })
      } else {
        htmlGenerate();
      }
    })
  }

  // Inquirer: Engineer details:
  if (role === "Engineer") {
    console.log(`
Please enter the "Engineer"s details:`)
    inquirer.prompt(questions.Engineer).then(answer => {
      let employee = new Engineer(answer.name, answer.id, answer.email, answer.github);
      team.push(employee);
      if (answer.addEmployee === "yes") {
        inquirer.prompt(questions.Role).then(answer => {
          addEmployee(answer.role)
        })
      } else {
        htmlGenerate();
      };
    });
  }

  // Inquirer: Intern details:
  if (role === "Intern") {
    console.log(`
Please enter the "Intern"s details:`)
    inquirer.prompt(questions.Intern).then(answer => {
      let employee = new Intern(answer.name, answer.id, answer.email, answer.school);
      team.push(employee);
      if (answer.addEmployee === "yes") {
        inquirer.prompt(questions.Role).then(answer => {
          addEmployee(answer.role)
        })
      } else {
        htmlGenerate();
      };
    });
  }
}

// ## Function to generate the HTML:
function htmlGenerate() {
  fs.writeFileSync(outputPath, render(team), "utf-8");
  console.log(`
================================================================================
     Task complete! Your new HTML file can be found at "./output/team.html"
================================================================================`)
  process.exit(0);
}


// # Initialise the App:
addEmployee("Manager");