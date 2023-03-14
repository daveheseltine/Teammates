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